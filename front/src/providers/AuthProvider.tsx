import { ReactNode, createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { RegisterData } from "../pages/Register/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  registerUser: (data: RegisterData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ContactNet:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);

      toast.success("Login efetuado!");

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("ContactNet:token", token);

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

  const logout = () => {
    localStorage.removeItem("ContactNet:token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
