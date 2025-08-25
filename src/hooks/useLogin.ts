import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginRequest {
  id: number;
  pin: string;
}

interface LoginResponse {
  message: string;
  user: {
    id: number;
    displayName: string;
    shift: string;
  };
  token: string;
}

interface LoginError {
  message: string;
  status?: number;
}

interface UseLoginOptions {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: LoginError) => void;
}

export const useLogin = (options?: UseLoginOptions): UseMutationResult<
  LoginResponse,
  LoginError,
  LoginRequest
> => {
  return useMutation<LoginResponse, LoginError, LoginRequest>({
    mutationFn: async ({ id, pin }: LoginRequest) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      try {
        const requestBody = {
          id: id,      
          pin: pin,    
        };

        console.log('Sending login request with:', requestBody); 
        
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(requestBody),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const data = await response.json();

        if (!response.ok) {
          throw {
            message: data.message || `HTTP ${response.status}: ${response.statusText}`,
            status: response.status,
          } as LoginError;
        }

        if (!data.token || !data.user) {
          throw {
            message: "Invalid response format from server",
            status: 502,
          } as LoginError;
        }

        return data;
      } catch (error) {
        clearTimeout(timeoutId);
        
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            throw {
              message: "Request timed out. Please try again.",
              status: 408,
            } as LoginError;
          }
        }
        
        if (typeof error === 'object' && error !== null && 'message' in error) {
          throw error as LoginError;
        }
        
        throw {
          message: "An unexpected error occurred",
          status: 500,
        } as LoginError;
      }
    },

    onSuccess: (data) => {
      try {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        options?.onSuccess?.(data);
      } catch (error) {
        console.error("Error storing login data:", error);
        options?.onError?.({
          message: "Login successful but failed to store session data",
          status: 500,
        });
      }
    },

    onError: (error: LoginError) => {
      if (error.status !== 401) {
        console.error("Login error:", {
          message: error.message,
          status: error.status,
          fullError: error
        });

        console.error("Login error details:", JSON.stringify(error, null, 2));
      }

      options?.onError?.(error);
    },

    retry: (failureCount, error) => {
      if (error.status && error.status >= 400 && error.status < 500) {
        return false;
      }
      return failureCount < 1;
    },
    
    retryDelay: (attemptIndex) => Math.min(500 * 2 ** attemptIndex, 3000),
  });
};

export const useSimpleLogin = () => {
  const router = useRouter();
  
  return useLogin({
    onSuccess: () => {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    },
    onError: (error) => {
      console.error("Simple login error:", error.message);
    }
  });
};