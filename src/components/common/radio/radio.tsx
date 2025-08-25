'use client';

import React from 'react';
import { RadioProps } from '@/types/input.type';
import { RadioContainer, RadioInput, RadioButton } from './radio.styled';

const Radio: React.FC<RadioProps> = ({ 
  name, 
  value, 
  checked = false, 
  disabled = false, 
  onChange 
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <RadioContainer $disabled={disabled} onClick={handleChange}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <RadioButton $checked={checked} $disabled={disabled} />
    </RadioContainer>
  );
};

export default Radio;
