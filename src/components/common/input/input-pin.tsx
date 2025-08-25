"use client";
import React, { useState, useRef, useEffect, forwardRef, useId } from "react";
import {
  PinContainer,
  Label,
  PinWrapper,
  PinDigit,
  PinDot,
  HiddenInput,
  Caption,
} from "./input-pin.styled";

export interface PinInputProps {
  length?: number;
  label?: string;
  caption?: string;
  error?: string;
  disabled?: boolean;
  state?: "default" | "filled" | "active" | "disabled" | "error";
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  mask?: boolean;
  autoFocus?: boolean;
  name?: string;
  required?: boolean;
}

export const PinInput = forwardRef<HTMLInputElement, PinInputProps>(
  (
    {
      length = 6,
      label,
      caption,
      error,
      disabled = false,
      state,
      value = "",
      onChange,
      onComplete,
      onFocus,
      onBlur,
      mask = true,
      autoFocus = false,
      name,
      required = false,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (autoFocus && hiddenInputRef.current) {
        hiddenInputRef.current.focus();
      }
    }, [autoFocus]);

    const getDigitState = (
      index: number
    ): "default" | "filled" | "active" | "disabled" | "error" => {
      if (state) return state;
      if (disabled) return "disabled";
      if (error) return "error";
      if (focusedIndex === index) return "active";
      if (currentValue[index]) return "filled";
      return "default";
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\D/g, "").slice(0, length);

      if (onChange) {
        onChange(newValue);
      } else {
        setInternalValue(newValue);
      }

      if (newValue.length === length && onComplete) {
        onComplete(newValue);
      }
    };

    const handleInputFocus = () => {
      const nextEmptyIndex =
        currentValue.length < length ? currentValue.length : length - 1;
      setFocusedIndex(nextEmptyIndex);
      onFocus?.();
    };

    const handleInputBlur = () => {
      setFocusedIndex(null);
      onBlur?.();
    };

    const handleDigitClick = (index: number) => {
      if (disabled) return;

      if (hiddenInputRef.current) {
        hiddenInputRef.current.focus();
        setFocusedIndex(index);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && currentValue.length > 0) {
        const newValue = currentValue.slice(0, -1);
        if (onChange) {
          onChange(newValue);
        } else {
          setInternalValue(newValue);
        }
        setFocusedIndex(Math.max(0, newValue.length));
      }
    };

    const inputId =useId()

    return (
      <PinContainer>
        {label && (
          <Label htmlFor={inputId} $disabled={disabled} $error={!!error}>
            {label}
          </Label>
        )}

        <PinWrapper>
          {Array.from({ length }, (_, index) => {
            const digitState = getDigitState(index);
            const isFilled = !!currentValue[index];
            const isActive = focusedIndex === index;

            return (
              <PinDigit
                ref={ref}
                key={index}
                $state={digitState}
                $isFilled={isFilled}
                $isActive={isActive}
                onClick={() => handleDigitClick(index)}
              >
                {mask ? (
                  <PinDot $visible={isFilled} $error={!!error} />
                ) : (
                  currentValue[index] || ""
                )}
              </PinDigit>
            );
          })}

          <HiddenInput
            ref={hiddenInputRef}
            id={inputId}
            name={name}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={currentValue}
            disabled={disabled}
            required={required}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            {...props}
          />
        </PinWrapper>

        {(caption || error) && (
          <Caption $error={!!error}>{error || caption}</Caption>
        )}
      </PinContainer>
    );
  }
);

PinInput.displayName = "PinInput";
