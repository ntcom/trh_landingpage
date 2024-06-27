"use client";
import authService, { ILogin } from "../services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";
import LocalStorage from "../utils/LocalStorage";
import { appConfig } from "../utils/appConfig";
import { useRouter } from "next/navigation";
import { ToasterToast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface IAuthContext {
  handleLogin: (body: ILogin) => Promise<void>;
  handleLogout: (body: ILogin) => Promise<void>;
  isAuthenticated: boolean;
  isInitial: boolean;
}
const AuthContext = createContext<IAuthContext>({
  handleLogin: async () => { },
  handleLogout: async () => { },
  isAuthenticated: false,
  isInitial: false,
});
// provider
function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isAuthenticated, setAuthenticated] = useState(() => {
    const hasToken = LocalStorage.get(appConfig.tokenName)
    console.log('hasToken:', hasToken)
    return hasToken ? true : false
  });
  const [isInitial, setIsInitial] = useState(false);
  const user = useState({});
  const { toast } = useToast()
  const router = useRouter();

  const handleLogin = async (params: ILogin) => {
    const showToastError = () => {
      toast({
        variant: "destructive",
        title: "Đăng nhập thất bại",
        description: "Vui lòng thử lại",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      })
    }
    try {
      const { result } = await authService.getToken(params);

      if (result.access_token) {
        setAuthenticated(true);
        LocalStorage.set(appConfig.tokenName, result.access_token);
        toast({
          variant: "default",
          title: "Đăng nhập thành công!",
          description: "Chào mừng bạn đến với Tranghuy Logistics",
        })
        router.push("/delivery-service");
        return
      }
      showToastError()
    } catch (error) {
      showToastError()
    }
  };
  const handleLogout = async (params: ILogin) => {
    try {
      setAuthenticated(false);
      LocalStorage.remove(appConfig.tokenName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsInitial(true)
  }, [])
  return (
    <AuthContext.Provider
      value={{ handleLogin, isAuthenticated, isInitial, handleLogout }}
    >
      {isInitial ? children : <></>}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
// use
export default function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
