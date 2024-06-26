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
import arrowDown from "@/assets/svgs/Portal/arrow-down.svg";
import helpdeskService from "@/app/services/helpdesk.service";
import Link from "next/link";
import { Eye } from "lucide-react";
const dataTable = [
  {
    stt: 1,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 4,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "cancel",
      title: "Hủy",
    },
  },
  {
    stt: 8,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 4,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 5,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 6,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 7,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 11,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "transport",
      title: "Đang vận chuyển",
    },
  },
  {
    stt: 12,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 14,
    code: "S00924",
    name: "Yêu cầu thay Case",
    startDate: "11/12/2024",
    content: "Nội dung yêu cầu",
    endDate: "06/03/2025",
    channel_source: "Kênh",
    type_service_id: "Loại dịch vụ",
    service_child_id: "Dịch vụ con",
    service_detail_id: "Dịch vụ chi tiết",
    receiving_department_id: "Phòng CNTT",
    team_id: "Team CNTT",
    user_id: "Nguyễn Văn An",
    review: "Đánh giá",
    status: {
      type: "cancel",
      title: "Hủy",
    },
  },
];
function TableSupportReport2() {
  const [helpDesk, setHelpDesk] = useState<any[]>([]);

  const getHelpDesk = async () => {
    try {
      const res = await helpdeskService.getListHelpDesk();
      if (res.result) {
        setHelpDesk(res.result);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getHelpDesk();
  }, []);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"> STT</TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Tên dịch vụ
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Mã yêu cầu
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Loại dịch vụ
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Dịch vụ con
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Dịch vụ chi tiết
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Bộ phận tiếp nhận
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Đội ngũ hỗ trợ
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            {/* <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Trạng thái
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead> */}
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Người xử lý
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Trạng thái
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center cursor-pointer">
                Hành động
                <Image
                  src={arrowDown}
                  alt=""
                  className="block shrink-0 w-[8px]"
                />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {helpDesk.map((item, index) => {
            const status = item.status;
            return (
              <TableRow
                key={index}
                className={cn({
                  "bg-[#f8f8f8]": index % 2 === 0,
                })}
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.code_ticket}</TableCell>
                <TableCell>{item.type_service_id.name}</TableCell>
                <TableCell>{item.service_child_id.name}</TableCell>
                <TableCell>{item.service_detail_id.name}</TableCell>
                <TableCell>{item.receiving_department_id.name}</TableCell>
                <TableCell>{item.team_id.name}</TableCell>
                <TableCell>
                  <div
                    className={cn("bg-[#4285f41a] w-fit px-2 py-1 rounded-lg", {
                      "bg-[#FFF9C4]": status === "Mới",
                      "bg-[#3a974c1a]": status === "Hoàn thành",
                      "bg-[#f293391a]": status === "Đang xử lý",
                      "bg-[#d11a2a1a]": status === "Hủy",
                    })}
                  >
                    <p
                      className={cn("text-[#4285F4] font-medium", {
                        "text-[#333333]": status === "Mới",
                        "text-[#3A974C]": status === "Hoàn thành",
                        "text-[#0e5a97]": status === "Đã xử lý",
                        "text-[#F29339]": status === "Đang xử lý",
                        "text-[#D11A2A]": status === "Hủy",
                      })}
                    >
                      {status}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{item.user_id.name}</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Link href={"/list-requirement/" + item.code_ticket}>
                      <Eye className="text-sm text-[#727272]" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableSupportReport2;
