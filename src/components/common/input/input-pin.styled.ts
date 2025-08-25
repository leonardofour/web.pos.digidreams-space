import styled, { css } from "styled-components";

export const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label<{ $disabled?: boolean; $error?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => {
    if (props.$disabled) return "var(--netral-500)";
    if (props.$error) return "var(--danger-input)";
    return "var(--text)";
  }};
`;

export const PinWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

export const PinDigit = styled.div<{
  $state: "default" | "filled" | "active" | "disabled" | "error";
  $isFilled: boolean;
  $isActive: boolean;
}>`
  width: 52px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: ${(props) =>
    props.$state === "disabled" ? "not-allowed" : "pointer"};
  position: relative;

  @media (max-width: 1200px) {
    width: 43px;
    height: 45px;
  }

  ${(props) => {
    switch (props.$state) {
      case "active":
        return css`
          background-color: var(--background);
          border: 2px solid var(--primary-input);

          color: var(--text);
        `;

      case "filled":
        return css`
          background-color: var(--netral-100);
          border: none;
          color: var(--background);

        `;

      case "disabled":
        return css`
          background-color: var(--netral-100);
          border: none;
          color: var(--netral-500);
        `;

      case "error":
        return css`
          background-color: var(--danger-light);
          border: none;
          color: var(--danger-input);
        `;

      default:
        return css`
          background-color: var(--netral-100);
          border: none;
          color: var(--text);
        `;
    }
  }}

  ${(props) =>
    props.$isActive &&
    props.$state !== "disabled" &&
    css`
      background-color: var(--background);
    `}
`;

export const PinDot = styled.div<{ $visible: boolean; $error?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$error) return "var(--danger-input)";
    return props.$visible ? "var(--text)" : "transparent";
  }};
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 1px;
  height: 1px;
`;

export const Caption = styled.p<{ $error?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: ${(props) =>
    props.$error ? "var(--danger-input)" : "var(--netral-500)"};
`;
