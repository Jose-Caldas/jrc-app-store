import { createContext, useState } from "react";

export const LoginContext = createContext({});

export function LoginProvider({ children }) {
  const [profile, setProfile] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <LoginContext.Provider
      value={{ userEmail, setUserEmail, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
}
