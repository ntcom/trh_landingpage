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
    date: "15/05/2024",
    time: "10:10:44",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: {
      type: "new",
      th: "Tạo mới",
    },
  },
  {
    stt: 2,
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
          className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <td className="w-full max-w-[6.98%] text-[#030229] text-xs text-center font-normal">
            {line.stt}
          </td>
          <td className="w-[110px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Link
              href={
                line.status.type === "transport"
                  ? `transport/${line.code}`
                  : `/delivery-service/${line.code}`
              }
              className="text-[#4285F4] hover:underline"
            >
              {line.code}
            </Link>
          </td>
          <td className="w-[172px] xl:w-full xl:max-w-[15%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Image
              src={calendar}
              alt=""
              className="block shrink-0 w-[12.6px]"
            />
            {line.date}
          </td>
          <td className="w-[220px] xl:w-full xl:max-w-[21%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.product}
          </td>
          <td className="w-[90px] xl:w-full xl:max-w-[8%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.quantity}
          </td>
          <td className="w-[150px] xl:w-full xl:max-w-[15%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.totalPrice}
          </td>
          <td className="w-[120px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.deposits}
          </td>
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
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="relative">
      <table className="block xl:table w-full overflow-x-scroll">
        <thead>
          <tr className="flex items-center py-5 pr-5">
            <th className="w-[74px] xl:w-full xl:max-w-[6.98%] th-table-require">
              STT
            </th>
            <th
              onClick={() => setSort("old")}
              className="w-[110px] xl:w-full xl:max-w-[10%] th-table-require"
            >
              Mã đơn hàng <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[172px] xl:w-full xl:max-w-[15%] th-table-require">
              Ngày đặt hàng <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[220px] xl:w-full xl:max-w-[21%] th-table-require">
              Sản phẩm <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[90px] xl:w-full xl:max-w-[8%] th-table-require">
              Số lượng <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[150px] xl:w-full xl:max-w-[15%] th-table-require">
              Tổng số tiền <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[120px] xl:w-full xl:max-w-[12%] th-table-require">
              Đã đặt cọc <Arrow sort={sort} name={"old"} />
            </th>
            <th className="w-[140px] xl:w-auto th-table-require">
              Trạng thái <Arrow sort={sort} name={"old"} />
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
