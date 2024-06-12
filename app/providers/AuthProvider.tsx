"use client";
import authService, { ILogin } from "../services/auth.service";
import { createContext, useContext, useState } from "react";
import LocalStorage from "../utils/LocalStorage";
import { appConfig } from "../utils/appConfig";

interface IAuthContext {
  handleLogin: (body: ILogin) => Promise<void>;
  handleLogout: (body: ILogin) => Promise<void>;
  isAuthenticated: boolean;
  isInitial: boolean;
}
const AuthContext = createContext<IAuthContext>({
  handleLogin: async () => {},
  handleLogout: async () => {},
  isAuthenticated: false,
  isInitial: false,
});
// provider
function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isInitial, setIsInitial] = useState(false);
  const user = useState({});

  const handleLogin = async (params: ILogin) => {
    try {
      const res = await authService.getToken(params);
      console.log(res);
      // setAuthenticated(true)
      LocalStorage.set(appConfig.tokenName, "");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async (params: ILogin) => {
    try {
      // setAuthenticated(false)
      LocalStorage.remove(appConfig.tokenName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ handleLogin, isAuthenticated, isInitial, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
// use
export default function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
