'use client';

import React from 'react';
import { CheckboxProps } from '@/types/input.type';
import { CheckboxContainer, CheckboxInput, CheckboxBox } from './checkbox.styled';

const Checkbox: React.FC<CheckboxProps> = ({ 
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
    <CheckboxContainer $disabled={disabled}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckboxBox $checked={checked} $disabled={disabled} />
    </CheckboxContainer>
  );
};

export default Checkbox;