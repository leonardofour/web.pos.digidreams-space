import styled, { css } from "styled-components";

export const InputContainer = styled.div`
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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{
  $state: "default" | "filled" | "active" | "disabled" | "error";
  $hasError?: boolean;
}>`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  border: none;

  ${(props) => {
    switch (props.$state) {
      case "active":
        return css`
          background-color: var(--netral-100);
          border: 1px solid var(--primary-input);
          color: var(--text);

          &::placeholder {
            color: var(--netral-500);
          }

          &:focus {
            background-color: var(--background) !important;
          }
        `;

      case "filled":
        return css`
          background-color: var(--background) !important;
            border: 1px solid var(--primary-light);

          color: var(--text);

          &::placeholder {
            color: var(--netral-500);
          }
          /*           
          &:hover {
            border-color: #D1D5DB;
          } */

          &:focus {
            background-color: var(--background) !important;
            border: 1px solid var(--primary-input);

            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
        `;

      case "disabled":
        return css`
          background-color: var(--netral-100);
          color: var(--netral-500);
          cursor: not-allowed;

          &::placeholder {
            color: var(--netral-500);
          }
        `;

      case "error":
        return css`
          background-color: var(--danger-light);
          color: var(--danger-input);

          &::placeholder {
            color: #9ca3af;
          }

          /* &:focus {
            border: 2px solid var(--danger-i);
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
          } */
        `;

      default:
        return css`
          background-color: var(--background);
          border: 1px solid var(--primary-light);
          color: var(--text);

          &::placeholder {
            color: var(--netral-500);
          }

          &:focus {
            background-color: #ffffff;
            border: 2px solid var(--primary-input);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
        `;
    }
  }}
`;

export const Caption = styled.p<{ $error?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: ${(props) =>
    props.$error ? "var(--danger-input)" : "var(--netral-500)"};
`;
