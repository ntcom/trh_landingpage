// /api/helpdesk_ticket/create

import BaseService from "@/core/services/BaseService";

export const endpoint = {
  base: "helpdesk_ticket",
  create: "/create",
};

type Endpoint = typeof endpoint;
class HelpdeskTicketService extends BaseService {
  public endpoint: Endpoint = endpoint;

  constructor() {
    super();
    this.baseEndPoint = endpoint.base;
  }
  createHelpdeskTicket(body: any) {
    return this.post(body, endpoint.create);
  }
}

const helpdeskTicketService = new HelpdeskTicketService();

export default helpdeskTicketService;
