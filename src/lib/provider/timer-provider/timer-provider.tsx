"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkIn, checkOut } from "@/lib/api/shift";

interface TimerContextType {
  isRunning: boolean;
  totalSeconds: number;
  clockInTime: string | null;
  clockOutTime: string | null;
  isCheckingIn: boolean;
  isCheckingOut: boolean;
  isCheckedIn: boolean; 
  toggleTimer: () => void;
  resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [clockInTime, setClockInTime] = useState<string | null>(null);
  const [clockOutTime, setClockOutTime] = useState<string | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  
  const queryClient = useQueryClient();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const checkInMutation = useMutation({
    mutationFn: checkIn,
    onSuccess: (data) => {
      console.log("Check-in successful:", data);
      
      setIsCheckedIn(true);
      setIsRunning(true); 
      setClockInTime(data.data.checkIn);
      setClockOutTime(null); 
      
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error: Error) => {
      console.error("Check-in failed:", error);
      
      if (error.message.includes("already checked in")) {
        setIsCheckedIn(true);
        setIsRunning(true);
      }
    },
  });

  const checkOutMutation = useMutation({
    mutationFn: checkOut,
    onSuccess: (data) => {
      console.log("Check-out successful:", data);
      
      setIsCheckedIn(false);
      setIsRunning(false); 
      setClockOutTime(data.data.checkOut);
      
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error: Error) => {
      console.error("Check-out failed:", error);
    },
  });

  const toggleTimer = () => {
    if (!isCheckedIn && !isRunning) {
      // First click - Check in
      checkInMutation.mutate();
    } else if (isCheckedIn && isRunning) {
      // Second click - Check out
      checkOutMutation.mutate();
    }
  };

  const resetTimer = () => {
    if (!isRunning) {
      setTotalSeconds(0);
      setClockInTime(null);
      setClockOutTime(null);
      setIsCheckedIn(false);
    }
  };

  return (
    <TimerContext.Provider
      value={{
        isRunning,
        totalSeconds,
        clockInTime,
        clockOutTime,
        isCheckingIn: checkInMutation.isPending,
        isCheckingOut: checkOutMutation.isPending,
        isCheckedIn,
        toggleTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};