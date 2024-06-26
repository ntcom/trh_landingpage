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
function TableMeet() {
  const [sort, setSort] = useState("new");
  const renderDataTable = () => {
    return dataTable.map((line) => {
      return (
        <tr
          key={line.stt}
          className="relative gap-1 flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <td className="w-[100px] text-[#030229] text-xs text-center font-normal">
            {line.stt}
          </td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.code}
          </td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.content}
          </td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.date}
          </td>{" "}
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.date}
          </td>
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.date}
          </td>
          {/* <td className="w-[165px] xl:w-full xl:max-w-[21%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.product}
          </td> */}
          <td className="w-[175px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.user_id}
          </td>
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
          <td className="w-[165px] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.feedback}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="relative">
      <table className="overflow-auto block w-full">
        <thead>
          <tr className="flex gap-1 items-center py-5 pr-5">
            <th className="w-[100px] text-[#030229] justify-center th-table-require">
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

export default TableMeet;
