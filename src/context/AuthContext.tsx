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
  wasVerified: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  _id: string;
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const wasVerified = !!user;

  useEffect(() => {
    const { "appstore.token": token } = parseCookies();
    const { "appstore.verificationCode": verificationCode } = parseCookies();

    if (token && verificationCode) {
      api.get("/user").then((response) => {
        // const { name, email, token, wasVerified } = response.data;
        // console.log(response.data);
        return response.data["users"];
      });
    }
  }, []);

  async function SignIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      // console.log(response);

      const { _id, name, token, verificationCode } = response.data;
      // console.log(response.data);

      setUser({
        _id,
        email,
        name,
      });

      api.defaults.headers["Authorization"] = `${token} ${verificationCode}`;

      Router.push("/customers");

      setCookie(undefined, "appstore.verificationCode", verificationCode, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });

      setCookie(undefined, "appstore.token", token, {
        maxAge: 60 * 60 * 24 * 30, //30days
        path: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, wasVerified, user }}>
      {children}
    </AuthContext.Provider>
  );
}
