import { ShiftApiResponse } from "@/types/shift.type";

export const checkIn = async (): Promise<ShiftApiResponse> => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  console.log("Current time for check-in:", currentTime);

  const response = await fetch("/api/shift/check-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ checkIn: currentTime }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Error response:", errorText);

    try {
      const errorData = JSON.parse(errorText);

      if (errorData.details) {
        const details = JSON.parse(errorData.details);
        if (details.errors?.CheckIn?.includes("Already checked in today")) {
          throw new Error(
            "You have already checked in today. Please check out first if you need to check in again."
          );
        }
      }

      throw new Error(
        errorData.error ||
          errorData.message ||
          `Failed to check in: ${response.status}`
      );
    } catch (parseError) {
      if (
        parseError instanceof Error &&
        parseError.message.includes("already checked in")
      ) {
        throw parseError;
      }
      throw new Error(
        `Failed to check in: ${response.status}. Response: ${errorText}`
      );
    }
  }

  const data = await response.json();
  console.log("Success response:", data);
  return data;
};

export const checkOut = async (): Promise<ShiftApiResponse> => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  console.log("Current time for check-out:", currentTime);

  const response = await fetch("/api/shift/check-out", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ checkOut: currentTime }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Error response:", errorText);

    try {
      const errorData = JSON.parse(errorText);

      if (errorData.details) {
        const details = JSON.parse(errorData.details);
        if (
          details.errors?.CheckOut?.includes("Already checked out") ||
          details.errors?.CheckOut?.includes("Not checked in")
        ) {
          throw new Error(
            "Cannot check out. Either you haven't checked in today or you've already checked out."
          );
        }
      }

      throw new Error(
        errorData.error ||
          errorData.message ||
          `Failed to check out: ${response.status}`
      );
    } catch (parseError) {
      if (
        parseError instanceof Error &&
        parseError.message.includes("Cannot check out")
      ) {
        throw parseError;
      }
      throw new Error(
        `Failed to check out: ${response.status}. Response: ${errorText}`
      );
    }
  }

  const data = await response.json();
  console.log("Success response:", data);
  return data;
};

export const getShiftLogToday = async (): Promise<ShiftApiResponse> => {
  console.log("Fetching shift log for today...");

  const response = await fetch("/api/shift/log", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  console.log("Shift log response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Error response:", errorText);

    try {
      const errorData = JSON.parse(errorText);
      throw new Error(
        errorData.error ||
          errorData.message ||
          `Failed to fetch shift log: ${response.status}`
      );
    } catch (parseError) {
      if (
        parseError instanceof Error &&
        parseError.message.includes("Failed to fetch shift log")
      ) {
        throw parseError;
      }
      throw new Error(
        `Failed to fetch shift log: ${response.status}. Response: ${errorText}`
      );
    }
  }

  const data = await response.json();
  console.log("Shift log success response:", data);
  return data;
};
