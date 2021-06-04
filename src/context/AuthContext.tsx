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

export interface Customer {
  user: User;
  token: string;
}

export interface User {
  email: string;
  _id: string;
  name: string;
}

export const AuthContext = createContext({} as AuthContextData);

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

      Router.push("/customers");

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

// const fn = (chave) => {
//   const obj = {
//     name: "Julio",
//     0: () => {},
//     ["authorization-header"]: false,
//   };
// };

// fn(0);

// const response = {
//   name: "GitHub",
//   short_name: "GitHub",
//   icons: [
//     {
//       sizes: "114x114",
//       src:

//     },
//     {
//       sizes: "120x120",
//       src: "https://github.githubassets.com/apple-touch-icon-120x120.png",
//     },
//   ],
//   prefer_related_applications: true,
//   related_applications: [
//     {
//       platform: "play",
//       url: "https://play.google.com/store/apps/details?id=com.github.android",
//       id: "com.github.android",
//     },
//   ],
// };

// response.icons.find((el) => !el.src );
