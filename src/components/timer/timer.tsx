"use client";
import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import { useTimerContext } from "@/lib/provider/timer-provider/timer-provider";
import Text from "../common/text/text";
import { getIcon } from "@/types/icons";
import {
  TimerContainer,
  TimerCard,
  Header,
  HeaderLeft,
  Title,
  ResetButton,
  TimeDisplay,
  ControlsContainer,
  ClockButton,
  StatusContainer,
  StatusText,
  SessionText,
  InfoSection,
  InfoDivider,
  InfoRow,
  InfoLabel,
  InfoValue,
  LoadingSpinner,
} from "./timer.styled";

export default function Timer() {
  const { theme } = useThemeContext();
  const {
    isRunning,
    totalSeconds,
    resetTimer,
    toggleTimer,
    isCheckingIn,
    isCheckingOut,
    isCheckedIn,
    clockInTime,
    clockOutTime,
  } = useTimerContext();

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  const formatTimeDisplay = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
  };

  const isLoading = isCheckingIn || isCheckingOut;
  const buttonDisabled = isLoading;

  const getStatusText = () => {
    if (isCheckingIn) return "Checking in...";
    if (isCheckingOut) return "Checking out...";
    if (isCheckedIn && isRunning) return "Clocked In - Timer Running";
    if (isCheckedIn && !isRunning) return "Checked In - Timer Stopped";
    return "Ready to Clock In";
  };

  const getButtonIcon = () => {
    if (isCheckedIn && isRunning) {
      return "stop";
    }
    return "play";
  };

  const getButtonText = () => {
    if (isCheckingIn) return "Checking In...";
    if (isCheckingOut) return "Checking Out...";
    if (isCheckedIn && isRunning) return "Check Out";
    return "Check In";
  };

  return (
    <TimerContainer>
      <TimerCard>
        <Header>
          <HeaderLeft>
            <Title>
              <Text variant="large">Shift Time</Text>
            </Title>
          </HeaderLeft>
          <ResetButton
            onClick={resetTimer}
            disabled={isRunning || isLoading || isCheckedIn}
            style={{
              opacity: isRunning || isLoading || isCheckedIn ? 0.5 : 1,
              cursor:
                isRunning || isLoading || isCheckedIn
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <Image
              src={getIcon("reset", theme)}
              width={30}
              height={30}
              alt="reset"
            />
          </ResetButton>
        </Header>

        <TimeDisplay>
          <Text variant="large">{formatTimeDisplay(totalSeconds)}</Text>
        </TimeDisplay>

        <ControlsContainer>
          <ClockButton
            onClick={toggleTimer}
            $isRunning={isRunning}
            disabled={buttonDisabled}
            style={{
              opacity: buttonDisabled ? 0.7 : 1,
              cursor: buttonDisabled ? "not-allowed" : "pointer",
            }}
            title={getButtonText()}
          >
            {isLoading ? (
              <LoadingSpinner
              />
            ) : (
              <Image
                src={getIcon(getButtonIcon(), theme)}
                alt={getButtonText()}
                width={24}
                height={24}
                style={!isRunning ? { marginLeft: "2px" } : {}}
              />
            )}
          </ClockButton>
        </ControlsContainer>

        <StatusContainer>
          <StatusText>
            <Text variant="subtitle" level={2}>
              {getStatusText()}
            </Text>
          </StatusText>
          {totalSeconds > 0 && !isRunning && !isLoading && clockOutTime && (
            <SessionText>
              <Text variant="subtitle" level={2}>
                Session completed: {formatTimeDisplay(totalSeconds)}
              </Text>
            </SessionText>
          )}
        </StatusContainer>

        <InfoSection>
          <InfoDivider />
          <InfoRow>
            <InfoLabel>
              <Text variant="body" level={2}>
                Status
              </Text>
            </InfoLabel>
            <InfoValue $isActive={isRunning}>
              <Text variant="body" level={2}>
                {isLoading
                  ? "Processing..."
                  : isCheckedIn
                  ? isRunning
                    ? "Active"
                    : "Checked In"
                  : "Inactive"}
              </Text>
            </InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>
              <Text variant="body" level={2}>
                Today&apos;s Total
              </Text>
            </InfoLabel>
            <InfoValue>
              <Text variant="body" level={2}>
                {formatTimeDisplay(totalSeconds)}
              </Text>
            </InfoValue>
          </InfoRow>
          {clockInTime && (
            <InfoRow>
              <InfoLabel>
                <Text variant="body" level={2}>
                  Clock In
                </Text>
              </InfoLabel>
              <InfoValue>
                <Text variant="body" level={2}>
                  {clockInTime}
                </Text>
              </InfoValue>
            </InfoRow>
          )}
          {clockOutTime && (
            <InfoRow>
              <InfoLabel>
                <Text variant="body" level={2}>
                  Clock Out
                </Text>
              </InfoLabel>
              <InfoValue>
                <Text variant="body" level={2}>
                  {clockOutTime}
                </Text>
              </InfoValue>
            </InfoRow>
          )}
        </InfoSection>
      </TimerCard>
    </TimerContainer>
  );
}
