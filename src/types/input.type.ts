export interface BaseInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

export interface TextInputProps extends BaseInputProps {
  type: "text";
  maxLength?: number;
}

export interface PinInputProps extends BaseInputProps {
  type: "pin";
  length?: number;
}

export type InputProps = TextInputProps | PinInputProps;

export type InputState = "default" | "filled" | "active" | "disabled" | "error";

export interface RadioProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
