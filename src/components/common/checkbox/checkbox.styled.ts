'use client';

import styled from 'styled-components';

export const CheckboxContainer = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxBox = styled.div<{ $checked?: boolean; $disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid ${props => props.$checked ? 'var(--primary)' : 'var(--netral-200)'};
  background: ${props => props.$checked ? 'var(--primary)' : 'var(--netral-100)'};
  position: relative;
  transition: all 0.2s ease;

  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: ${props => props.$checked ? 1 : 0};
    transition: opacity 0.2s ease;
  }
`;