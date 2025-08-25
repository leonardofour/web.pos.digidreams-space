import React from "react";
import { Indicator, IndicatorContainer } from "./slider.styled";

interface SliderIndicatorProps {
  total: number;
  current: number;
  onIndicatorClick?: (index: number) => void;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  activeColor?: string;
}


export const SliderIndicator: React.FC<SliderIndicatorProps> = ({
  total,
  current,
  onIndicatorClick,
  size = 'medium',
  color = 'rgba(255, 255, 255, 0.4)',
  activeColor = 'rgba(255, 255, 255, 0.9)'
}) => {
  return (
    <IndicatorContainer>
      {Array.from({ length: total }, (_, index) => (
        <Indicator
          key={index}
          $isActive={index === current}
          $size={size}
          $color={color}
          $activeColor={activeColor}
          onClick={() => onIndicatorClick?.(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </IndicatorContainer>
  );
};