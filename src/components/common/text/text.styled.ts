import styled, { css, RuleSet } from "styled-components";

interface VariantProps {
  variant: "large" | "heading" | "title" | "subtitle" | "body";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const fontSizesHeading = [28, 24, 20, 16, 14, 12];
const fontSizes = [24, 20, 16, 14, 12, 10];
const fontWeights = {
  heading: 700,
  title: 600,
  subtitle: 500,
  body: 400
};

export const getTextStyle = (
  variant: VariantProps["variant"] = "body", 
  level?: VariantProps["level"]
): RuleSet => {
  if (variant === "large") {
    return css`
      font-size: 36px;
      font-weight: 600;
      line-height: 140%;
    `;
  }

  if (variant === "body" && !level) {
    return css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    `;
  }

  const levelIndex = (level ?? 1) - 1;
  const fontSize = 
  variant === 'heading'
  ? fontSizesHeading[levelIndex] || 16
  : fontSizes[levelIndex] || 16
  const fontWeight = fontWeights[variant as keyof typeof fontWeights] || 400;

  return css`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: 150%;
  `;
};


export const TextStyled = styled.p.withConfig({
  shouldForwardProp: (prop) => !['variant', 'level'].includes(prop)
})<VariantProps>`
  ${({ variant, level }) => getTextStyle(variant, level)}
`;