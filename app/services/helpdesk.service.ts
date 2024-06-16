import BaseService from "@/core/services/BaseService";

export const endpoint = {
  base: "helpdesk",
  getSupportReport: "/get_data",
};

type Endpoint = typeof endpoint;
class HelpdeskService extends BaseService {
  public endpoint: Endpoint = endpoint;

  constructor() {
    super();
    this.baseEndPoint = endpoint.base;
  }
}

const helpdeskService = new HelpdeskService();

export default helpdeskService;
