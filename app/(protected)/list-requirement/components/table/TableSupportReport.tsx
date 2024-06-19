"use client";
import Image from "next/image";
import React, { useState } from "react";
import arrowDown from "@/assets/svgs/Portal/arrow-down.svg";
import calendar from "@/assets/svgs/Portal/calendar.svg";
import Link from "next/link";
import Loading from "@/core/components/Loading/Loading";

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
    stt: 2,
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
    stt: 3,
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
];

function TableSupportReport() {
  const [sort, setSort] = useState("new");

  const renderDataTable = () => {
    return dataTable.map((line) => {
      return (
        <tr
          key={line.stt}
          className="relative flex gap-1 items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <td className="w-[165px] justify-center td-table-require">
            {line.stt}
          </td>
          <td className="w-[165px] td-table-require">{line.code}</td>
          <td className="w-[165px] td-table-require">{line.content}</td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.startDate}
          </td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.endDate}
          </td>
          <td className="w-[175px] flex td-table-require">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.endDate}
          </td>
          <td className="w-[165px] flex td-table-require">{line.user_id}</td>
          <td
            className={`flex items-center justify-center shrink-0 w-[165px] h-[35px] ${
              line.status.type === "complete"
                ? "bg-[#3a974c1a]"
                : line.status.type === "transport"
                ? "bg-[#f293391a]"
                : line.status.type === "cancel"
                ? "bg-[#d11a2a1a]"
                : "bg-[#4285f41a]"
            } rounded-[22px]`}
          >
            <p
              className={`text-sm font-bold leading-[14px] ${
                line.status.type === "complete"
                  ? "text-[#3A974C]"
                  : line.status.type === "transport"
                  ? "text-[#F29339]"
                  : line.status.type === "cancel"
                  ? "text-[#D11A2A]"
                  : "text-[#4285F4]"
              }`}
            >
              {line.status.title}
            </p>
          </td>
          <td className="w-[165px] flex td-table-require">{line.review}</td>
          {/* <td className="w-[220px] td-table-require">{line.name}</td>
          <td className="w-[180px] td-table-require">{line.channel_source}</td>
          <td className="w-[180px] td-table-require">
            {line.service_child_id}
          </td>
          <td className="w-[180px] td-table-require">
            {line.service_child_id}
          </td>
          <td className="w-[180px] td-table-require">
            {line.service_detail_id}
          </td>
          <td className="w-[180px] td-table-require">
            {line.receiving_department_id}
          </td>
          <td className="w-[180px] td-table-require">{line.team_id}</td>
          <td className="w-[180px] td-table-require">{line.user_id}</td>
          <td
            className={`flex items-center justify-center shrink-0 w-[140px] h-[35px] ${
              line.status.type === "complete"
                ? "bg-[#3a974c1a]"
                : line.status.type === "transport"
                ? "bg-[#f293391a]"
                : line.status.type === "cancel"
                ? "bg-[#d11a2a1a]"
                : "bg-[#4285f41a]"
            } rounded-[22px]`}
          >
            <p
              className={`text-sm font-bold leading-[14px] ${
                line.status.type === "complete"
                  ? "text-[#3A974C]"
                  : line.status.type === "transport"
                  ? "text-[#F29339]"
                  : line.status.type === "cancel"
                  ? "text-[#D11A2A]"
                  : "text-[#4285F4]"
              }`}
            >
              {line.status.title}
            </p>
          </td> */}
        </tr>
      );
    });
  };
  return (
    <div className="relative overflow-hidden w-full">
      <table className="block w-full overflow-auto">
        <thead>
          <tr className="flex gap-1 items-center py-5 pr-5">
            <th className="w-[165px] text-[#030229] justify-center th-table-require">
              STT
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Mã yêu cầu <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Nội dung yêu cầu <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Ngày tạo <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Thời gian cam kết <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[175px] text-[#030229] th-table-require">
              Thời gian hoàn thành <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Người xử lý <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Trạng thái <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[165px] text-[#030229] th-table-require">
              Đánh giá <Arrow sort={sort} name={"old"} />
            </th>
            {/* <th className="w-[220px] th-table-require">
              Tên dịch vụ <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Kênh <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Loại dịch vụ <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Dịch vụ con <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Dịch vụ chi tiết <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Bộ phận tiếp nhận <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Đội ngũ hỗ trợ <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Người xử lý <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[180px] th-table-require">
              Trạng thái <Arrow sort={sort} name={"old"} />
            </th> */}
          </tr>
        </thead>

        <tbody>{renderDataTable()}</tbody>
      </table>
    </div>
  );
}

const Arrow = (props: any) => {
  return (
    <Image
      src={arrowDown}
      alt=""
      className={`block shrink-0 w-[7px] h-[6px] ${
        props.sort === props.name && "rotate-180"
      }`}
    />
  );
};

export default TableSupportReport;
