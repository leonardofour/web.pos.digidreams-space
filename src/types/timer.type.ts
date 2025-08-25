
export interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimerProps {
  onClockIn?: () => void;
  onClockOut?: (totalTime: number) => void;
  onReset?: () => void;
  initialTime?: TimeState;
  autoReset?: boolean;
}

export interface StyledButtonProps {
  $isRunning: boolean;
}

export interface StyledValueProps {
  $isActive?: boolean;
}