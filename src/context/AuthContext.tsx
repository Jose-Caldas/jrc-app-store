import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  getProducts: () => Promise<Product[]>;
  setUser: Dispatch<SetStateAction<User>>;
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

export interface Root {
  products: Product[];
}

export interface Product {
  isActive: boolean;
  _id: string;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export const APP_TOKEN = "appstore.token";

export const AuthContext = createContext({} as AuthContextData);

export async function getProducts(): Promise<Product[]> {
  const response = await api.get<Root>("/product");

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

      setCookie(undefined, APP_TOKEN, token, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });
    } catch (error) {
      Router.push("/login_error");
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, user, getProducts, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
