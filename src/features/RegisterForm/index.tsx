import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ValidationErrorMessage from "../../components/ValidationErrorMessage";
import type {
  RegisterFormProps,
  SubmitRegisterForm,
} from "../../libs/interfaces";

const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("El correo electrónico debe ser válido")
    .required("El correo electrónico es obligatorio "),
  password: yup
    .string()
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .min(8, "Debe contener al menos 8 caracteres")
    .matches(/\d/, "Debe contener al menos un número")
    .matches(/[@$!%*?&_\-#]/, "Al menos un carácter especial (@$!%*?&_-#)")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas deben coincidir")
    .required("La confirmación de la contraseña es obligatoria"),
});

const RegisterForm = ({ onSubmit }: SubmitRegisterForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submitHandler = (data: RegisterFormProps): void => {
    onSubmit(data);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const containerClasses =
    "p-12 pt-8 bg-white shadow-md min-w-[450px] min-h-[400px] rounded-3xl";
  const formClasses = "flex flex-col gap-4";
  const headerClasses = "text-4xl font-bold mb-4 text-center text-[#00bbec]";
  const inputContainerClasses = "flex flex-col gap-1";

  return (
    <div className={containerClasses}>
      <h2 className={headerClasses}>Registro</h2>
      <form className={formClasses} onSubmit={handleSubmit(submitHandler)}>
        <div className={inputContainerClasses}>
          <label htmlFor="name" className="">
            Nombre
          </label>
          <Input
            type="text"
            name="name"
            placeHolder="Enter your name"
            register={register}
            registerOptions={{
              required: true,
            }}
          />
          <ValidationErrorMessage
            message={errors.name ? errors.name.message : ""}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="email" className="">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeHolder="Enter your email"
            register={register}
            registerOptions={{
              required: true,
            }}
          />
          <ValidationErrorMessage
            message={errors.email ? errors.email.message : ""}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="password" className="">
            Contrase&ntilde;a
          </label>
          <Input
            type="password"
            name="password"
            placeHolder="Enter your email"
            register={register}
            registerOptions={{
              required: true,
            }}
          />
          <ValidationErrorMessage
            message={errors.password ? errors.password.message : ""}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="confirmPassword" className="">
            Confirmar contrase&ntilde;a
          </label>
          <Input
            type="password"
            name="confirmPassword"
            placeHolder="Confirm your password"
            register={register}
            registerOptions={{
              required: true,
            }}
          />
          <ValidationErrorMessage
            message={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
          />
        </div>
        <div className="flex flex-col gap-12">
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Registrar
          </Button>
          {/* <Button
            classes="bg-transparent outline-2 outline-offset-2 outline-solid outline-[#0099c7] !text-[#0099c7] hover:!bg-[#f4f4f4] "
            label="Ver listado"
            onClick={onShowUserList}
            // disabled={Object.keys(errors).length > 0}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
