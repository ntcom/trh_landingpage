import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "hr_employee",
  getData: "/get_data",
};

class UserService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const userService = new UserService();

export default userService;
