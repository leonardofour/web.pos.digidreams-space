'use client';

import styled from 'styled-components';

export const ToggleContainer = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSwitch = styled.div<{ $checked?: boolean; $disabled?: boolean }>`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background: ${props => props.$checked ? 'var(--primary)' : 'var(--netral-200)'};
  position: relative;
  transition: background 0.2s ease;
`;

export const ToggleHandle = styled.div<{ $checked?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--toggle);
  position: absolute;
  top: 3.5px;
  left: ${props => props.$checked ? '28px' : '4px'};
  transition: left 0.2s ease;
`;