import { useState } from "react";
import EyeOutlineIcon from "../../assets/icons/components/EyeOutlineIcon";
import EyeOffOutlineIcon from "../../assets/icons/components/EyeOffOutlineIcon";
import type { InputProps } from "../../libs/interfaces";

const Input = ({
  ariaLabel = "input",
  type,
  name,
  classes,
  placeHolder,
  disabled = false,
  registerOptions = {},
  register,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputClasses = `${classes} w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00bbec] bg-gray-50 `;

  return (
    <div className="relative">
      {!register ? (
        <input
          aria-label={ariaLabel}

          name="name"
          disabled={disabled}
          onChange={onChange}
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type || "text"
          }
          className={inputClasses}
          placeholder={placeHolder}
        />
      ) : (<input
        aria-label={ariaLabel}
        type={
          type === "password"
            ? showPassword
              ? "text"
              : "password"
            : type || "text"
        }
        className={inputClasses}
        placeholder={placeHolder}
        {...register(name, registerOptions)}
      />)}
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          {showPassword ? <EyeOffOutlineIcon /> : <EyeOutlineIcon />}
        </button>
      )}
    </div>
  );
};

export default Input;
