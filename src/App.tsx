import useToast from "./hooks/useToast";
import type { RegisterFormProps } from "./libs/interfaces";
import "./styles/App.css";
import RegisterForm from "./features/RegisterForm";
import CustomUserDataToast from "./components/Toast/CustomUserDataToast.tsx";

function App() {
  const { success, custom } = useToast();

  const onSubmit = async (data: RegisterFormProps) => {
    success("Registration successful!");

    custom(<CustomUserDataToast data={{ userData: data }} />, {
      data: {
        userData: data,
      },
      closeOnClick: false,
      position: "top-left",
      className: '!max-w-[500px] !w-full',
    });
  };

  return (
    <main className="gap-4">
      <RegisterForm onSubmit={onSubmit} />
    </main>
  );
}

export default App;
