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
  getProducts: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export interface Customer {
  user: User;
  token: string;
}

export interface User {
  email: string;
  _id: string;
  name: string;
}

export type ProductProps = {
  _id?: string;
  name: string;
  price: number;
  total?: number;
};

export const AuthContext = createContext({} as AuthContextData);

export async function getProducts(): Promise<ProductProps[]> {
  const response = await api.get("/product");

  return response.data.products;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const wasVerified = !!user;

  async function SignIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<Customer>("/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      setUser({
        _id: user._id,
        email: user.email,
        name: user.name,
      });

      api.defaults.headers["Authorization"] = `${token}`;

      Router.push("/dashboard");

      setCookie(undefined, "appstore.token", token, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });
    } catch (error) {
      Router.push("/login_error");
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, user, getProducts }}>
      {children}
    </AuthContext.Provider>
  );
}
