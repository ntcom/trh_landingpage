import BaseService from "@/core/services/BaseService";

export const endpoint = {
  base: "helpdesk",
  getSupportReport: "/get_data",
  search: "/search_helpdesk",
  getListHelpdesk: "/get_list",
  detail: "/detail_data",
  rate: "/evaluate",
  getChildById: "/get_service_child",
  getDetailByChildId: "/get_detail_service",
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
  search(content:string) {
    return this.post({params:{content}}, endpoint.search);
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
  getChildById(id:string) {
    return this.post({params:{id}}, endpoint.getChildById);
  }
  getDetailByChildId(id:string) {
    return this.post({params:{id}}, endpoint.getDetailByChildId);
  }
}

const helpdeskService = new HelpdeskService();

export default helpdeskService;
