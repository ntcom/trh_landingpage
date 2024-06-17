import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "sale_order",
  getData: "/get_data",
};

class OrderService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getData(body: any) {
    return this.post(body, endPoint.getData)
  }
}

const orderService = new OrderService();

export default orderService;
