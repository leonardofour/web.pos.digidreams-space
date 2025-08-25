"use client";

import React, { useState, forwardRef, useId } from "react";
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  Caption,
} from "./input-text.styled";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  caption?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  state?: "default" | "filled" | "active" | "disabled" | "error";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder = "Placeholder",
      caption,
      error,
      disabled = false,
      readOnly = false,
      state,
      value,
      onChange,
      onFocus,
      onBlur,
      onClick,
      type = "text",
      name,
      autoComplete,
      required = false,
      style,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value || "");

    const getCurrentState = ():
      | "default"
      | "filled"
      | "active"
      | "disabled"
      | "error" => {
      if (state) return state;
      if (disabled) return "disabled";
      if (error) return "error";
      if (isFocused) return "active";
      if (value || internalValue) return "filled";
      return "default";
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      onClick?.(e);
    };

    const InputId = useId();
    const currentState = getCurrentState();
    const displayValue = value !== undefined ? value : internalValue;

    return (
      <InputContainer>
        {label && (
          <Label htmlFor={InputId} $disabled={disabled} $error={!!error}>
            {label}
          </Label>
        )}

        <InputWrapper>
          <StyledInput
            ref={ref}
            id={InputId}
            name={name}
            type={type}
            placeholder={placeholder}
            value={displayValue}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            $state={currentState}
            $hasError={!!error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            style={style}
            {...props}
          />
        </InputWrapper>

        {(caption || error) && (
          <Caption $error={!!error}>{error || caption}</Caption>
        )}
      </InputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
