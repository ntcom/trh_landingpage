// : /api/approval_request/get_room

import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "approval_request",
  getRoom: "/get_room",
  getOption: "/get_data",
  listRoom: "/list_room",
  create: "/create",
};

class MeetRoomService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getRoom(body: any) {
    return this.post({params:body}, endPoint.getRoom);
  }
  listRoom() {
    return this.post({}, endPoint.listRoom);
  }
  getOption() {
    return this.post({}, endPoint.getOption);
  }
  createRoom(body: any) {
    return this.post(body, endPoint.create);
  }
}

const meetRoomService = new MeetRoomService();

export default meetRoomService;
