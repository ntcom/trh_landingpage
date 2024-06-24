// : /api/approval_request/get_room

import BaseService from "@/core/services/BaseService";

const endPoint = {
  base: "approval_request",
  getRoom: "/get_room",
};


class MeetRoomService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }

  getRoom(body: any){
    return this.post(body,endPoint.getRoom)
  }

}

const meetRoomService = new MeetRoomService();

export default meetRoomService;
