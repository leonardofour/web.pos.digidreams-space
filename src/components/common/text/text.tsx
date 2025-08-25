"use client"
import React from "react";
import { TextStyled } from "./text.styled";

interface TextVariantProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "large" | "heading" | "title" | "subtitle" | "body";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Text: React.FC<TextVariantProps> = ({
  children,
  className = "",
  variant = "body",
  level,
}) => {
  return (
    <TextStyled className={className} variant={variant} level={level}>
      {children}
    </TextStyled>
  );
};

export default Text;
