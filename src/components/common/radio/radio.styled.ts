'use client';

import styled from 'styled-components';

export const RadioContainer = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  position: relative;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioButton = styled.div<{ $checked?: boolean; $disabled?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.$checked ? 'var(--primary)' : 'var(--radio)'};
  background: var(--background);
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.$checked ? 'var(--primary)' : 'transparent'};
    transition: all 0.2s ease;
  }

`;