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
  isEmployee: boolean;
  isInitial: boolean;
}
const AuthContext = createContext<IAuthContext>({
  handleLogin: async () => {},
  handleLogout: async () => {},
  isAuthenticated: false,
  isEmployee: false,
  isInitial: false,
});
// provider
function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    const hasToken = LocalStorage.get(appConfig.tokenName);
    return hasToken ? true : false;
  });
  const employeeNameLS = "TH_is_employee";
  const [isEmployee, setEmployee] = useState(() => {
    const hasEmployee = LocalStorage.get(employeeNameLS);
    return hasEmployee === "true" ? true : false;
  });
  const [isInitial, setIsInitial] = useState(false);
  const user = useState({});
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (params: ILogin) => {
    const showToastError = () => {
      toast({
        variant: "destructive",
        title: "Đăng nhập thất bại",
        description: "Vui lòng thử lại",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      });
    };
    try {
      const { result } = await authService.getToken(params);
      const hasEmployee = Boolean(result.employee_id);
      if (result.access_token) {
        setAuthenticated(true);
        LocalStorage.set(appConfig.tokenName, result.access_token);
        LocalStorage.set(employeeNameLS, hasEmployee ? "true" : "false");
        setEmployee(hasEmployee);
        toast({
          variant: "success",
          title: "Đăng nhập thành công!",
          description: "Chào mừng bạn đến với Tranghuy Logistics",
          action: <ToastAction altText="Done">Done</ToastAction>,
        });
        router.push(hasEmployee ? "/services" : "/delivery-service");
        return;
      }
      showToastError();
    } catch (error) {
      showToastError();
    }
  };

  const handleLogout = async (params: ILogin) => {
    try {
      setAuthenticated(false);
      LocalStorage.remove(appConfig.tokenName);
      LocalStorage.remove(employeeNameLS);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsInitial(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        isAuthenticated,
        isInitial,
        isEmployee,
        handleLogout,
      }}
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
