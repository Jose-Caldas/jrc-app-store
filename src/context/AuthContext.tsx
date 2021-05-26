import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../pages/api";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

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

  useEffect(() => {
    const { "appstore.token": token } = parseCookies();

    if (token) {
      api.get("/user").then((response) => {
        console.log(response.data);
      });
    }
  }, []);

  async function SignIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { _id, name, token, refreshToken } = response.data;

      setUser({
        _id,
        email,
        name,
      });

      Router.push("/customers");

      setCookie(undefined, "appstore.token", token, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });
      setCookie(undefined, "appstore.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });
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
