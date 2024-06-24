import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import calendar from "@/assets/svgs/Portal/calendar.svg";
import arrowDown from "@/assets/svgs/Portal/arrow-down.svg";
import meetRoomService from "@/app/services/meet-room.service";

const dataTable = [
  {
    stt: 1,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00924",
    date: "15/05/2024",
    time: "10:10:44",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "new",
      title: "Tạo mới",
    },
  },
  {
    stt: 2,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00923",
    date: "15/05/2024",
    time: "10:09:34",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 3,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00911",
    date: "14/05/2024",
    time: "17:29:22",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 4,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00910",
    date: "14/05/2024",
    time: "17:26:33",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "cancel",
      title: "Huỷ",
    },
  },
  {
    stt: 5,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00902",
    date: "14/05/2024",
    time: "15:43:19",
    product: "AD019",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 6,
    user_id: "Nguyễn Văn Tú",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00894",
    date: "13/05/2024",
    time: "14:08:12",
    product: "TRACk1",
    quantity: 1,
    totalPrice: 3984000,
    deposits: 0,
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 7,
    user_id: "Nguyễn Văn Thìn",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00892",
    date: "13/05/2024",
    time: "14:00:34",
    product: "TRACK2",
    quantity: 1,
    totalPrice: 1593600,
    deposits: 8,
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 8,
    user_id: "Nguyễn Huy An",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00890",
    date: "13/05/2024",
    time: "13:58:24",
    product: "TRACK1",
    quantity: 1,
    totalPrice: 1593600,
    deposits: 8,
    status: {
      type: "new",
      title: "Tạo mới",
    },
  },
  {
    stt: 9,
    user_id: "Nguyễn Văn Hoàng",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00889",
    date: "13/05/2024",
    time: "13:55:37",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 10,
    user_id: "Nguyễn Văn A",
    content: "Nội dung",
    feedback: "Đánh giá",
    code: "S00888",
    date: "13/05/2024",
    time: "13:47:19",
    product: "TRACK0",
    quantity: 1,
    totalPrice: 1992000,
    deposits: 10,
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
];
function TableMeet2() {
  const [room, setRoom] = useState([])
  const getRoom = async () => {
    try {
      const res = await meetRoomService.getRoom({
        date_start: "2024-06-19 17:00:00"
      })
      console.log('res:', res)
      if (res?.result) {
        setRoom(res.result)
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    getRoom()
  }, [])
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"> STT</TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Mã yêu cầu <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Nội dung yêu cầu <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Ngày tạo <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Thời gian cam kết <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Thời gian hoàn thành <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Người xử lý  <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Trạng thái <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Đánh giá <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataTable.map((item, index) => {
            const status = item.status.type;
            return (
              <TableRow key={index} className={cn({
                "bg-[#f8f8f8]": index % 2 === 0
              })}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Image
                      src={calendar}
                      alt=""
                      className="block shrink-0 w-[12.6px]"
                    />
                    {item.time}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Image
                      src={calendar}
                      alt=""
                      className="block shrink-0 w-[12.6px]"
                    />
                    {item.time}
                  </div>
                </TableCell>
                <TableCell>{item.user_id}</TableCell>
                <TableCell>
                  <div
                    className={cn("bg-[#4285f41a] w-fit px-2 py-1 rounded-lg", {
                      "bg-[#3a974c1a]": status === "complete",
                      "bg-[#f293391a]": status === "transport",
                      "bg-[#d11a2a1a]": status === "cancel",
                    })}
                  >
                    <p
                      className={cn("text-[#4285F4] font-medium", {
                        "text-[#3A974C]": status === "complete",
                        "text-[#F29339]": status === "transport",
                        "text-[#D11A2A]": status === "cancel",
                      })}
                    >
                      {item.status.title}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{item.feedback}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableMeet2;
