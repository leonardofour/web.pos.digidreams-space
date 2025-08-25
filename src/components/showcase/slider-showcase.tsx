import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SliderIndicator } from '../common/slider/slider';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`;

const SlideContent = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 100%;
  background: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const slides = [
  { id: 1, content: 'Slide 1', bgColor: '#ff6b6b' },
  { id: 2, content: 'Slide 2', bgColor: '#4ecdc4' },
  { id: 3, content: 'Slide 3', bgColor: '#45b7d1' },
  { id: 4, content: 'Slide 4', bgColor: '#f9ca24' },
];

export const SliderShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <SliderContainer>
      <SlideContent $bgColor={slides[currentSlide].bgColor}>
        {slides[currentSlide].content}
      </SlideContent>
      
      <IndicatorWrapper>
        <SliderIndicator
          total={slides.length}
          current={currentSlide}
          onIndicatorClick={handleIndicatorClick}
          size="medium"
        />
      </IndicatorWrapper>
    </SliderContainer>
  );
};