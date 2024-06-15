"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import search from "@/assets/svgs/Portal/search.svg";
import arrowDown from "@/assets/svgs/Portal/arrow-down.svg";
import calendar from "@/assets/svgs/Portal/calendar.svg";
import arrowItemUp from "@/assets/svgs/Portal/arrow-item-up.svg";
import arrowItemDown from "@/assets/svgs/Portal/arrow-item-down.svg";
import bitmap from "@/assets/svgs/Portal/bitmap.svg";
import GroupFuncKeys from "@/app/components/Portal/GroupFuncKeys/GroupFuncKeys";


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
      title: "Tạo mới",
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

const orderReport = [
  {
    id: 1,
    title: "Đơn giá",
    data: "$35k",
    increase: 15,
    decrease: 3.5,
  },
  {
    id: 2,
    title: "Tổng tiền",
    data: "$2,435k",
    decrease: 3.5,
  },
  {
    id: 3,
    title: "Đơn huỷ",
    data: 3,
    increase: 15,
  },
  {
    id: 4,
    title: "Đang vận chuyển",
    data: 28,
    increase: 10,
  },
];

export default function DeliveryService() {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterSelect, setFilterSelect] = useState("all");
  const [soft, setSoft] = useState("new");

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
            <Image src={calendar} alt="" className="block shrink-0 w-[12.6px]" />
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
    <div>
      <h2 className="text-2xl text-[#4285F4] font-bold">Đơn hàng</h2>

      <div className="mt-8 flex justify-between gap-[30px]">
        {orderReport.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full max-w-[22.4%] bg-[#fff] p-[25px] border-[1px] border-solid border-[#4285f44d] rounded-[20px] drop-shadow-[0px_4px_8px_rgba(31,31,31,0.10)]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#4285F4] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[32px] text-[#04103B] font-bold">
                    {item.data}
                  </p>
                </div>
                <Image src={bitmap} alt="" className="w-5 h-full" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-end gap-[6px]">
                  {item.increase ? (
                    <Image src={arrowItemUp} alt="" />
                  ) : (
                    <Image src={arrowItemDown} alt="" />
                  )}
                  <p
                    className={`text-sm ${
                      item.increase ? "text-[#6AD2A0]" : "text-[#EA8F95]"
                    } font-bold leading-4`}
                  >
                    {item.increase
                      ? "+" + item.increase + "%"
                      : "-" + item.decrease + "%"}
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="text-xs text-[#4285F4] font-semibold underline"
                >
                  Xem báo cáo
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-between mt-6">
        <GroupFuncKeys
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}
          soft={soft}
          setSoft={setSoft}
        />

        <div className="flex gap-3">
          <div className="shrink-0 relative inline-flex items-center">
            <input
              type="text"
              className="shrink-0 w-[260px] h-10 p-[12px_16px] rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] outline-none"
              placeholder="Search"
            />
          </div>

          <button
            className="shink-0 w-full max-w-[150px] h-10 p-[4px_20px] flex items-center justify-center gap-[10px] bg-[#4285F4] rounded-[10px]"
          >
            <div className="shrink-0 w-3 h-3 right-[23px]">
              <Image src={search} alt="" />
            </div>
            <p className="text-[#fff] text-sm font-semibold leading-[18px]">
              Tìm kiếm
            </p>
          </button>
        </div>
      </div>

      <table className="block xl:table w-full mt-6 overflow-x-scroll">
        <thead>
          <tr className="flex items-center py-5 pr-5">
            <th className="w-[74px] xl:w-full xl:max-w-[6.98%] text-[#030229] text-xs font-normal">
              STT
            </th>
            <th className="w-[110px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Mã đơn hàng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[172px] xl:w-full xl:max-w-[15%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Ngày đặt hàng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[220px] xl:w-full xl:max-w-[21%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Sản phẩm{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[90px] xl:w-full xl:max-w-[8%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Số lượng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[150px] xl:w-full xl:max-w-[15%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Tổng số tiền{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[120px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Đã đặt cọc{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[140px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Trạng thái{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
          </tr>
        </thead>

        <tbody>{renderDataTable()}</tbody>
      </table>
    </div>
  );
}
