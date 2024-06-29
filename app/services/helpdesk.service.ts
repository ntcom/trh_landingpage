import BaseService from "@/core/services/BaseService";

export const endpoint = {
  base: "helpdesk",
  getSupportReport: "/get_data",
  getListHelpdesk: "/get_list",
  detail: "/detail_data",
  rate: "/evaluate",
};

type Endpoint = typeof endpoint;
class HelpdeskService extends BaseService {
  public endpoint: Endpoint = endpoint;

  constructor() {
    super();
    this.baseEndPoint = endpoint.base;
  }
  getHelpDesk() {
    return this.post({}, endpoint.getSupportReport);
  }
  getDetail(body:any) {
    return this.post({params:body}, endpoint.detail);
  }
  createRate(body:any) {
    return this.post({params:body}, endpoint.rate);
  }
  getListHelpDesk() {
    return this.post({}, endpoint.getListHelpdesk);
  }
}

const helpdeskService = new HelpdeskService();

export default helpdeskService;
