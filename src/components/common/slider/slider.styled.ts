import styled from "styled-components";

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.button<{
  $isActive: boolean;
  $size: 'small' | 'medium' | 'large';
  $color: string;
  $activeColor: string;
}>`
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $isActive, $color, $activeColor }) => 
    $isActive ? $activeColor : $color};
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          width: ${$size === 'small' ? '6px' : '8px'};
          height: 6px;
          border-radius: 3px;
        `;
      case 'large':
        return `
          width: 12px;
          height: 12px;
          border-radius: 6px;
        `;
      default:
        return `
          width: 8px;
          height: 8px;
          border-radius: 4px;
        `;
    }
  }}
  
  ${({ $isActive, $size }) => 
    $isActive && `
      width: ${$size === 'small' ? '24px' : $size === 'large' ? '32px' : '28px'};
      border-radius: ${$size === 'small' ? '3px' : $size === 'large' ? '6px' : '4px'};
    `
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`;
