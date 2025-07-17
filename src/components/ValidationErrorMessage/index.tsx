import type { ValidationErrorMessageProps } from "../../libs/interfaces";

const ValidationErrorMessage = ({ message }: ValidationErrorMessageProps) => {
  if (!message) return null;
  return <small className="text-red-500">{message}</small>;
};

export default ValidationErrorMessage;
