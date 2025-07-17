import useToast from "./hooks/useToast";
import "./styles/App.css";
import RegisterForm from "./features/RegisterForm";
import type { RegisterFormProps } from "./libs/interfaces";
import CustomUserDataToast from "./components/Toast/CustomUserDataToast.tsx";

function App() {
  const { success, custom } = useToast();

  const onSubmit = async (data: RegisterFormProps) => {
    success("Registration successful!");

    custom(<CustomUserDataToast data={{ userData: data }} />, {
      data: {
        userData: data,
      },
      // autoClose: false,
      closeOnClick: false,
      position: "top-center",
    });
  };

  return (
    <main className="gap-4">
      <RegisterForm onSubmit={onSubmit} />
    </main>
  );
}

export default App;
