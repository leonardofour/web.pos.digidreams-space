import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const TimerContainer = styled.div`
  width: 100%;
  min-height: 880px;
  background: var(--bakcground);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const TimerCard = styled.div`
  background: var(--background);
  border: 2px solid var(--netral-300);
  border-radius: 15px;
  padding: 32px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 50px 1px var(--netral-100);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


export const Title = styled.div`
  color: var(--text);
  margin: 0;
`;

export const ResetButton = styled.button`
  padding: 10px;
  color: var(--netral-300);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const TimeDisplay = styled.div`
  text-align: center;
  color: var(--text);
  margin-bottom: 32px;

  p {
  font-size: 80px;

  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ClockButton = styled.button<{ $isRunning: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${(props) =>
    props.$isRunning ? "var(--danger)" : "var(--success)"};

  &:hover {
    background: ${(props) =>
      props.$isRunning ? "var(--danger-hover)" : "var(--success-hover)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StatusContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const StatusText = styled.div`
  color: var(--netral-300);
  margin: 0;
`;

export const SessionText = styled.div`
  color: var(--success);
  margin: 10px 0 0 0;
`;

export const InfoSection = styled.div`
  margin-top: 32px;
`;

export const InfoDivider = styled.div`
  height: 5px;
  border: none;
  border-radius: 10px;
  background: var(--primary-dark);
  margin-bottom: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.div`
  color: var(--netral-300);
`;

export const InfoValue = styled.div<{ $isActive?: boolean }>`
  color: ${(props) =>
    props.$isActive ? "var(--success)" : "var(--netral-300)"};
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--netral-100);
  border-top: 2px solid var(--primary-status);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;