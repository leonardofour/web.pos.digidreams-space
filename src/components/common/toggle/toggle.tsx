'use client';

import React from 'react';
import { ToggleProps } from '@/types/input.type';
import { ToggleContainer, ToggleInput, ToggleSwitch, ToggleHandle } from './toggle.styled';

const Toggle: React.FC<ToggleProps> = ({ 
  checked = false, 
  disabled = false, 
  onChange 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <ToggleContainer $disabled={disabled}>
      <ToggleInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleSwitch $checked={checked} $disabled={disabled}>
        <ToggleHandle $checked={checked} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default Toggle;