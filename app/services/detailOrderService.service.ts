import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "sale_order",
  getData: "/detail_data",
};

class DetailOrderService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const detailOrderService = new DetailOrderService();

export default detailOrderService;
