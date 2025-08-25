import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
    0% {
    transform: translateY(50px);
    opacity: 0;
    }
    100% {
    transform: translateY(0);
    opacity: 1;
    }`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 9999;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${slideUp} 0.4s ease-out;
    `}
`;

export const Modal = styled.div`
  background: var(--background);
  border-radius: 12px;
  padding: 40px 32px 32px;
  width: 349px;
  height: 402px;
  max-width: 400px;
  text-align: center;
`;

export const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 44px;
    height: 44px;
  }
`;

export const OuterCircle = styled.div<{ $variant?: "success" | "error" }>`
  width: 120px;
  height: 120px;
  background: ${({ $variant }) =>
    $variant === "error" ? "var(--danger-light)" : "var(--secondary-modal)"};
  border-radius: 50%;
  position: absolute;
`;

export const InnerCircle = styled.div<{ $variant?: "success" | "error" }>`
  width: 80px;
  height: 80px;
  background: ${({ $variant }) =>
    $variant === "error" ? "var(--danger)" : "var(--primary)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  img {
    filter: ${({ $variant }) =>
      $variant === "error"
        ? "brightness(0) invert(1)"
        : "brightness(0) invert(1)"};
  }
`;

export const Title = styled.div`
  color: var(--text);
  margin: 0 0 16px;
`;

export const Message = styled.div`
  color: var(--netral-600);
  margin: 0 0 32px;

  .bold {
    font-weight: 700;
    color: var(--text);
    font-family: var(--font-inter);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  ${({ $variant }) =>
    $variant === "primary"
      ? `
    background: var(--primary-pagination);
    color: white;
    border: none;
    cursor: pointer;
    
    &:hover {
      opacity: 0.9;
    }
  `
      : `
    background: var(--netral-100);
    color: var(--text);
    border: none;
    cursor: pointer;

    
    &:hover {
      background: var(--netral-200);
    }
  `}
`;
