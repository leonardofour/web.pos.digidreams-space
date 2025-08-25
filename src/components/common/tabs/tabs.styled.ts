import styled from "styled-components";

export const TabsContainer = styled.div<{
  $variant: "separated" | "contained";
}>`
  display: flex;
  gap: 8px;
  padding: 0;
  background-color: ${(props) =>
    props.$variant === "contained" ? "var(--netral-100)" : "transparent"};
  border-radius: 12px;
  width: fit-content;

  @media (min-width: 1440px) {
    width: auto;
  }
`;

export const TabButton = styled.button<{
  $isActive: boolean;
  $variant: "separated" | "contained";
}>`
  padding: ${(props) =>
    props.$variant === "contained" ? "15.5px 45px" : "8px 16px"};
  border: none;
  border-radius: ${(props) =>
    props.$variant === "contained" ? "12px" : "8px"};
  cursor: pointer;
  /* transition: all 0.2s ease; */
  white-space: nowrap;

  @media (min-width: 1440px) {
    padding: ${(props) =>
      props.$variant === "contained" ? "15.5px 20px" : "8px 16px"};
      width: 100%;
  }

  ${(props) => {
    if (props.$variant === "contained") {
      return props.$isActive
        ? `
        background-color: var(--secondary-tabs);
          color: var(--primary-tabs);
        `
        : `
          background-color: var(--netral-100);
          color: #6b7280;
        `;
    } else {
      return props.$isActive
        ? `
        background-color: var(--secondary-tabs);
          color: var(--primary-tabs);
        `
        : `
          background-color: var(--background);
          color: var(--netral-500);
        `;
    }
  }}
`;
