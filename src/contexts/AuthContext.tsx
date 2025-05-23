import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { postLogin } from "@services/user/login.post";
import { jwtDecode } from "jwt-decode";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  token: string;
  id: string;
}

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await postLogin(credentials);
      const { token } = response.data;

      const decodedToken = jwtDecode<{
        id: number;
        role: string;
        exp: number;
        iat: number;
      }>(token);
      const id = String(decodedToken.id);

      const userData: User = {
        email: credentials.email,
        token,
        id,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);

      router.push("/");
    } catch (err) {
      const axiosError = err as AxiosError;
      const message =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (axiosError.response?.data as any)?.message || "Erro ao fazer login";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useLogin must be used within an AuthProvider");
  }
  return context;
};
