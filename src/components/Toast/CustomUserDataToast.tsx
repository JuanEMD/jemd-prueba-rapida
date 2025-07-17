import type { ReactElement } from "react";
import type { CustomUserDataToastProps } from "../../libs/interfaces";

const CustomUserDataToast = ({ data }: CustomUserDataToastProps): ReactElement => {
  const contentContainerClasses =
    "flex-1 p-4 bg-gray-50 rounded-md shadow-inner ";

  return (
    <div className="flex flex-col w-full gap-2">
      <h3 className="text-zinc-800 text-sm font-semibold">Datos del usuario</h3>
      <div className={contentContainerClasses}>
        {data?.userData && <span>{JSON.stringify(data?.userData)}</span>}
      </div>
    </div>
  );
};

export default CustomUserDataToast;
