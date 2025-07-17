import type { ButtonProps } from "../../libs/interfaces";

const Button = ({
  children = "Button",
  onClick = () => { },
  disabled = false,
  isLoading = false,
  classes,
  type = "button",
  ariaLabel = "button",
}: ButtonProps) => {
  const buttonClasses = `px-4 py-2 bg-[#00bbec] text-white rounded-xl hover:bg-[#0099c7] transition-colors duration-200 cursor-pointer ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""} ${classes}`;

  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
