import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "hr_employee",
  getData: "/res_country_state",
};

class CitysService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const citysService = new CitysService();

export default citysService;
