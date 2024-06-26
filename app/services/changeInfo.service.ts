import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "hr_employee",
  getData: "/update",
};

class ChangeInfo extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  postData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const changeInfo = new ChangeInfo();

export default changeInfo;
