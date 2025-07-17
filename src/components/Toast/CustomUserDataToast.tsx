import type { ReactElement } from "react";
import type { CustomUserDataToastProps } from "../../libs/interfaces";

const CustomUserDataToast = ({ data, ariaLabel = "datos del usuario" }: CustomUserDataToastProps): ReactElement | null => {

  const formattedData = JSON.stringify(data?.userData, null, 2);
  if (!formattedData) return null;

  return (
    <div className="flex flex-col w-full gap-2 break-all">
      <h3 className="text-[#00bbec] text-md font-semibold">Datos del usuario</h3>
      <div className="p-4 bg-gray-50 rounded-md shadow-inner">
        <pre aria-label={ariaLabel} className="break-words whitespace-pre-wrap max-w-full overflow-auto">{formattedData}</pre>
      </div>
    </div>
  );
};

export default CustomUserDataToast;
