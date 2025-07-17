import { toast } from "react-toastify";
import type { ToastConfig } from "../libs/interfaces";
import type { ReactElement } from "react";

const useToast = () => {
  const defaultConfig: ToastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const success = (message: string, config: object = {}) => {
    toast.success(message, { ...defaultConfig, ...config });
  };

  const error = (message: string, config: object = {}) => {
    toast.error(message, { ...defaultConfig, ...config });
  };

  const custom = (message: string | ReactElement, config: object = {}) => {
    toast(message, { ...defaultConfig, ...config });
  };

  return {
    success,
    error,
    custom,
  };
};

export default useToast;
