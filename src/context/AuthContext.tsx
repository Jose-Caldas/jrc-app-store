import { createContext, ReactNode, useState } from "react";
import { api } from "../pages/api";
import Router from "next/router";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  SignIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  email: string;
  _id: string;
  name: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  async function SignIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { _id, name } = response.data;

      setUser({
        _id,
        email,
        name,
      });
      Router.push("/customers");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
