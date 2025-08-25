import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--background);
  box-shadow: 0 -2px 16px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9998;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 6px 32px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 16px;
`;

export const TabLabel = styled.div`
  width: 248.5px;
  height: 68px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$isActive ? "var(--tabs-label)" : "var(--netral-600)"};
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isActive ? "var(--tabs-background)" : "transparent"};
  /* transition: all 0.2s ease; */

  img {
    width: 24px;
    height: 24px;
  }
`;

export const RestaurantTab = styled.div<{ $isActive: boolean }>`
  width: 72px;
  height: 72px;
  background-color: ${(props) =>
    props.$isActive ? "var(--primary)" : "var(--primary)"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  /* transition: all 0.2s ease; */
  position: absolute;
  top: -30px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const TimerIndicator = styled.div`
  position: absolute;
  top: 8px;
  right: -84px;
  width: 8px;
  height: 8px;
  background-color: #ff4444;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;