import styled, { css } from "styled-components";

export type ButtonVariant = "filled" | "line" | "nude" | "arrow";
export type ButtonSize =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large";
export type ArrowVariant = "none" | "left" | "right" | "both";

export const BaseButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $arrow: ArrowVariant;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  outline: none;
  font-family: var(--font-inter);

  ${({ $size, $arrow }) => {
    const hasArrow = $arrow !== "none";
    const horizontalPadding = hasArrow ? "8px" : "48px";
    
    switch ($size) {
      case "extra-small":
        return css`
          padding: 5px ${horizontalPadding};
          font-size: 12px;
        `;
      case "small":
        return css`
          padding: 7.5px ${horizontalPadding};
          font-size: 14px;
        `;
      case "medium":
        return css`
          padding: 10px ${horizontalPadding};
          font-size: 16px;
        `;
      case "large":
        return css`
          padding: 14px ${horizontalPadding};
          font-size: 18px;
        `;
      case "extra-large":
        return css`
          padding: 18px ${horizontalPadding};
          font-size: 20px;
        `;
      default:
        return css`
          padding: 14px ${horizontalPadding};
          font-size: 16px;
        `;
    }
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case "filled":
        return css`
          background-color: var(--primary);
          color: white;
          border: 1px solid var(--primary);

          &:hover:not(:disabled) {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
          }

          &:disabled {
            background-color: var(--secondary-disabled);
            border: none;
            color: var(--secondary-disabled-text);
            cursor: not-allowed;
          }
        `;
      case "line":
        return css`
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);

          &:hover:not(:disabled) {
            background-color: var(--primary);
            color: white;
          }

          &:disabled {
            background-color: transparent;
            border-color: var(--netral-300);
            color: var(--netral-500);
            cursor: not-allowed;
          }
        `;
      case "nude":
        return css`
          background-color: transparent;
          color: var(--primary);
          border: 1px solid transparent;

          &:hover:not(:disabled) {
            background-color: var(--primary-light);
            color: var(--primary-dark);
          }

          &:disabled {
            background-color: transparent;
            color: var(--netral-500);
            cursor: not-allowed;
          }
        `;
      case "arrow":
        return css`
          background-color: var(--primary);
          color: white;
          border: 1px solid var(--primary);

          &:hover:not(:disabled) {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
          }

          &:disabled {
            background-color: var(--netral-300);
            border-color: var(--netral-300);
            color: var(--netral-500);
            cursor: not-allowed;
          }
        `;
      default:
        return css`
          background-color: var(--primary);
          color: white;
          border: 1px solid var(--primary);
        `;
    }
  }}

  ${({ $arrow }) => {
    if ($arrow === "left") {
      return css`
        padding-left: 16px;
      `;
    }
    if ($arrow === "right") {
      return css`
        padding-right: 16px;
      `;
    }
    if ($arrow === "both") {
      return css`
        padding-left: 16px;
        padding-right: 16px;
      `;
    }
    return "";
  }}

  &:focus-visible {
    outline: 2px solid var(--primary-light);
    outline-offset: 2px;
  }
`;