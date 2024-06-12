import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "auth",
  getToken: "token",
};

export interface ILogin {
  login: string;
  password: string;
}

class AuthService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getToken(params: ILogin) {
    return this.get(endPoint.getToken, {
      params: { db: "tranghuy_test_0306", ...params },
    });
  }
}

const authService = new AuthService();

export default authService;
