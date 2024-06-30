import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "res_user",
  getData: "/change_password",
};

class ChangePassword extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  postData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const changePassword = new ChangePassword();

export default changePassword;
