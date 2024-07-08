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

// const dataTable = [
//   {
//     stt: 1,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00924",
//     date: "15/05/2024",
//     time: "10:10:44",
//     product: "",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "new",
//       title: "Tạo mới",
//     },
//   },
//   {
//     stt: 2,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00923",
//     date: "15/05/2024",
//     time: "10:09:34",
//     product: "",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "transport",
//       title: "Đang vận chuyển",
//     },
//   },
//   {
//     stt: 3,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00911",
//     date: "14/05/2024",
//     time: "17:29:22",
//     product: "",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "complete",
//       title: "Hoàn thành",
//     },
//   },
//   {
//     stt: 4,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00910",
//     date: "14/05/2024",
//     time: "17:26:33",
//     product: "",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "cancel",
//       title: "Huỷ",
//     },
//   },
//   {
//     stt: 5,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00902",
//     date: "14/05/2024",
//     time: "15:43:19",
//     product: "AD019",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "transport",
//       title: "Đang vận chuyển",
//     },
//   },
//   {
//     stt: 6,
//     user_id: "Nguyễn Văn Tú",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00894",
//     date: "13/05/2024",
//     time: "14:08:12",
//     product: "TRACk1",
//     quantity: 1,
//     totalPrice: 3984000,
//     deposits: 0,
//     status: {
//       type: "complete",
//       title: "Hoàn thành",
//     },
//   },
//   {
//     stt: 7,
//     user_id: "Nguyễn Văn Thìn",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00892",
//     date: "13/05/2024",
//     time: "14:00:34",
//     product: "TRACK2",
//     quantity: 1,
//     totalPrice: 1593600,
//     deposits: 8,
//     status: {
//       type: "transport",
//       title: "Đang vận chuyển",
//     },
//   },
//   {
//     stt: 8,
//     user_id: "Nguyễn Huy An",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00890",
//     date: "13/05/2024",
//     time: "13:58:24",
//     product: "TRACK1",
//     quantity: 1,
//     totalPrice: 1593600,
//     deposits: 8,
//     status: {
//       type: "new",
//       title: "Tạo mới",
//     },
//   },
//   {
//     stt: 9,
//     user_id: "Nguyễn Văn Hoàng",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00889",
//     date: "13/05/2024",
//     time: "13:55:37",
//     product: "",
//     quantity: 0,
//     totalPrice: 0,
//     deposits: 0,
//     status: {
//       type: "complete",
//       title: "Hoàn thành",
//     },
//   },
//   {
//     stt: 10,
//     user_id: "Nguyễn Văn A",
//     content: "Nội dung",
//     feedback: "Đánh giá",
//     code: "S00888",
//     date: "13/05/2024",
//     time: "13:47:19",
//     product: "TRACK0",
//     quantity: 1,
//     totalPrice: 1992000,
//     deposits: 10,
//     status: {
//       type: "complete",
//       title: "Hoàn thành",
//     },
//   },
// ];
function TableMeet2() {
  const [room, setRoom] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState('')
  const getRoom = async () => {
    try {
      const res = await meetRoomService.listRoom()
      if (res?.result) {
        setRoom(res.result)
      }
    } catch (error) {
      console.log('error:', error)

    }
  }
  const searchRoom = async (search: string) => {
    try {
      const res = await meetRoomService.search(search);
      if (res?.result instanceof Array) {
        setRoom(res.result);
      }
    } catch (error) { }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchRoom(searchValue)
    }
  };

  const handleSearch = () => {
    searchRoom(searchValue)
  }
  useEffect(() => {
    getRoom()
  }, [])
  return (
    <div>
      <form className="flex items-center max-w-sm my-4">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input value={searchValue} onKeyDown={handleKeyDown} onChange={(e: any) => setSearchValue(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm phòng họp..." required />
        </div>
        <button onClick={handleSearch} type="button" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#0755d1] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#0755d1] dark:focus:ring-blue-800">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="mt-6 border-b border-solid border-[#eeeeee] !mb-0"></div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"> STT</TableHead>
            {/* <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Mã yêu cầu <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead> */}
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Nội dung yêu cầu <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Thời gian bắt đầu <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Thời gian kết thúc <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Danh mục  <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Vị trí phòng họp  <Image
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[8px]"
              />
            </div> </TableHead>
            <TableHead> <div className="flex gap-2 items-center cursor-pointer">
              Người chủ trì  <Image
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
          </TableRow>
        </TableHeader>
        <TableBody className="relative">
          {room.map((item, index) => {
            const status = item.request_status
            return (
              <TableRow key={index} className={cn({
                "bg-[#f8f8f8]": index % 2 === 0
              })}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                {/* <TableCell>{item.code}</TableCell> */}
                <TableCell>{item.name}</TableCell>
                <TableCell>          <div className="flex gap-2">
                  <Image
                    src={calendar}
                    alt=""
                    className="block shrink-0 w-[12.6px]"
                  />
                  {item.date_start}
                </div></TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Image
                      src={calendar}
                      alt=""
                      className="block shrink-0 w-[12.6px]"
                    />
                    {item.date_end}
                  </div>
                </TableCell>

                <TableCell>{item.category_id}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.request_owner_id}</TableCell>
                <TableCell>
                  <div
                    className={cn("bg-[#4285f41a] w-fit px-2 py-1 rounded-lg", {
                      "bg-[#3a974c1a]": status === "Đã duyệt",
                      "bg-[#f293391a]": status === "Cần nộp",
                      "bg-[#d11a2a1a]": status === "Từ chối",
                    })}
                  >
                    <p
                      className={cn("text-[#4285F4] font-medium", {
                        "text-[#3A974C]": status === "Đã duyệt",
                        "text-[#F29339]": status === "Cần nộp",
                        "text-[#D11A2A]": status === "Từ chối",
                      })}
                    >
                      {status}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
          {
            room.length === 0 && <div style={{ minHeight: "150px" }}><p className="empty-table-content">Không tìm thấy phòng họp</p></div>
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default TableMeet2;
