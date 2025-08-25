import React from 'react';
import ArrowLeftWhite from '@/assets/icons/arrow-left-light.svg';
import ArrowRightWhite from '@/assets/icons/arrow-right-light.svg';
import ArrowLeftBlue from '@/assets/icons/arrow-left-blue.svg';
import ArrowRightBlue from '@/assets/icons/arrow-right-blue.svg';
import { BaseButton, ButtonVariant, ButtonSize, ArrowVariant } from './button.styled';
import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: ArrowVariant;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'medium',
  arrow = 'none',
  disabled = false,
  onClick,
  type = 'button',
  className,
}) => {
  const getArrowIcons = () => {
    if (variant === 'filled' || variant === 'arrow') {
      return {
        left: ArrowLeftWhite,
        right: ArrowRightWhite
      };
    } else if (variant === 'line' || variant === 'nude') {
      return {
        left: ArrowLeftBlue,
        right: ArrowRightBlue
      };
    }
    return {
      left: ArrowLeftWhite,
      right: ArrowRightWhite
    };
  };

  const arrowIcons = getArrowIcons();

  return (
    <BaseButton
      $variant={variant}
      $size={size}
      $arrow={arrow}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
    >
      {(arrow === 'left' || arrow === 'both') && (
        <Image src={arrowIcons.left} alt="Arrow Left" width={14} height={14} />
      )}
      {children}
      {(arrow === 'right' || arrow === 'both') && (
        <Image src={arrowIcons.right} alt="Arrow Right" width={14} height={14} />
      )}
    </BaseButton>
  );
};