import { createContext, ReactNode } from "react";
import { api } from "../pages/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  SignIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function SignIn({ email, password }: SignInCredentials) {
    const response = await api.post("/login", {
      email,
      password,
    });
    console.log(response.data);
  }

  return (
    <AuthContext.Provider value={{ SignIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
