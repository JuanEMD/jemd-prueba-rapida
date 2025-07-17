import type { ReactNode } from "react";
import type { UseFormRegister } from "react-hook-form";

export interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SubmitRegisterForm = {
  onSubmit: (data: RegisterFormProps) => void;
};

export interface IconComponentProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface ButtonProps {
  ariaLabel?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  type?: "button" | "submit" | "reset";
}

export interface InputProps {
  ariaLabel?: string;
  type: string;
  name: "name" | "email" | "password" | "confirmPassword";
  classes?: string;
  placeHolder?: string;
  required?: boolean;
  disabled?: boolean;
  register?: UseFormRegister<RegisterFormProps>;
  registerOptions?: Record<string, unknown>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ValidationErrorMessageProps {
  ariaLabel?: string;
  message: string | undefined;
}

export type successToast = {
  message: string | ReactNode;
  config?: ToastConfig;
};

export type errorToast = {
  message: string | ReactNode;
  config?: ToastConfig;
};

export type customToast = {
  message: string | ReactNode;
  config?: ToastConfig;
};

export interface ToastConfig {
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
}

export interface CustomUserDataToastProps {
  data: {
    userData: RegisterFormProps;
  };
  ariaLabel?: string;
}
