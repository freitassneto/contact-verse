import { ReactNode, createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { RegisterData } from "../pages/Register/validator";
import { UserData } from "../pages/Dashboard";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  registerUser: (data: RegisterData) => void;
  logout: () => void;
  user: UserData | null;
  editUser: (userEditedData: UserData) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem("@ContactVerse:token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setLoading(false);
    };
    validateUser();
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);

      toast.success("Login efetuado!");

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@ContactVerse:token", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("E-mail ou senha incorretos!");
    } finally {
      setLoading(false);
      <Navigate to="/dashboard" />;
    }
  };

  const registerUser = async (data: RegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Desculpe, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const editUser = async ( userEditedData: UserData) => {
    try {
      const response = await api.patch("/users", userEditedData);
      setUser(response.data);
      toast.success("Dados do usuário atualizados.");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@ContactVerse:token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, registerUser, logout, user, editUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
