import type { ValidationErrorMessageProps } from "../../libs/interfaces";

const ValidationErrorMessage = ({ message, ariaLabel = "mensaje de error" }: ValidationErrorMessageProps) => {
  if (!message) return null;
  return <small className="text-red-500" aria-label={ariaLabel}>{message}</small>;
};

export default ValidationErrorMessage;
