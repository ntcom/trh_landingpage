"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import search from "@/assets/svgs/Portal/search.svg";
import arrowDown from "@/assets/svgs/Portal/arrow-down.svg";
import calendar from "@/assets/svgs/Portal/calendar.svg";
import plusShow from "@/assets/svgs/Portal/plus-border.svg";
import minusClose from "@/assets/svgs/Portal/minus-border.svg";
import GroupFuncKeys from "@/app/components/Portal/GroupFuncKeys/GroupFuncKeys";
import orderService from "@/app/services/orderService.service";
import Dashboard from "@/app/components/Dashboard/Dashboard";
import { useRouter } from "next/navigation";

export default function DeliveryService() {
  const [filterSelect, setFilterSelect] = useState("all");
  const [soft, setSoft] = useState("new");
  const [orderData, setOrderData] = useState([]);
  const [dropdowm, setDropdown] = useState(null);

  const router = useRouter();

  // const TOKEN = 'access_token_ba0e8c81183207cccd0d63c59e3afdb4292a109d'
  // const postData = {}
  // const postHeaders = {
  //   headers: {
  //     'Authorization': `${TOKEN}`,
  //     'Content-Type': 'application/json',
  // }
  // }

  // const getListPortal = async () => {
  //   const {data} = await axios.post(
  //     "https://test.tranghuy.com/api/sale_order/get_data", postData, postHeaders);
  //     setOrderData(data.result);
  //   console.log('>>>>', data.result);
  // };

  const getOrderList = async () => {
    const { result } = await orderService.getData({});
    setOrderData(result.sale_order_ids);
    // console.log("========>", result.sale_order_ids);
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const renderDataTable = () => {
    return orderData.map((line: any, index) => {
      const lineKey = line.name.slice(1);
      const formatter = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      });
      return (
        <div key={lineKey}>
          <ul
            onClick={() =>{
              // dropdowm === line.name
              // ? setDropdown(null)
              // : setDropdown(line.name)
              line.state === "transport"
                    ? router.push(`transport/${line.name}`)
                    : router.push(`/delivery-service/${line.name}`)
            }
            }
            className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
          >
            <li className="w-full max-w-[6%] text-[#030229] text-xs text-center font-normal">
              {index + 1}
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              <Link
                href={
                  line.state === "transport"
                    ? `transport/${line.name}`
                    : `/delivery-service/${line.name}`
                }
                className="text-[#4285F4] hover:underline"
              >
                {line.name}
              </Link>
            </li>
            <li className="w-[285.5px] xl:w-full xl:max-w-[25%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.date_order}
            </li>
            <li className="w-[114.2px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.qty_car}
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {formatter.format(line.amount_total)}
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line?.deposits ? line.deposits : 0}
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {formatter.format(
                line.amount_total - line?.deposits ? line.deposits : 0
              )}
            </li>
            <li
              className={`flex items-center justify-center flex-grow shrink-0 w-[100px] h-[35px] text-sm text-[#4285F4] font-medium hover:underline`}
            >
              <Link
                href={
                  line.state === "transport"
                    ? `transport/${line.name}`
                    : `/delivery-service/${line.name}`
                }
                onClick={(e) => e.stopPropagation()}
              >
                Chi tiết
              </Link>
            </li>
          </ul>
          {line?.line_ids && (
            <div
              className={`w-full ${
                dropdowm === line.name
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              } pl-[66.3px] transition-all duration-300`}
            >
              <ul className="flex items-center py-5 px-4">
                <li className="w-[159.4px] xl:w-full xl:max-w-[15%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Mã đơn
                </li>
                <li className="w-[212.6px] xl:w-full xl:max-w-[20%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Nơi đi
                </li>
                <li className="w-[180.7px] xl:w-full xl:max-w-[17%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Ngày đi
                </li>
                <li className="w-[212.6px] xl:w-full xl:max-w-[20%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Nơi đến
                </li>
                <li className="w-[85px] xl:w-full xl:max-w-[8%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Loại xe
                </li>
                <li className="w-[85px] xl:w-full xl:max-w-[8%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Biển số
                </li>
                <li className="w-[127.5px] xl:w-full xl:max-w-[12%] shrink-0 flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Trạng thái
                </li>
              </ul>
              {line.line_ids.map((item: any) => {
                const itemKey = item.name.split("/")[0];
                return (
                  <ul
                    key={itemKey}
                    className={`relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] px-4`}
                  >
                    <li className="w-[159.4px] xl:w-full xl:max-w-[15%] flex items-center gap-[10px] text-[#4285F4] text-xs font-semibold whitespace-nowrap">
                      {item.name}
                    </li>
                    <li className="w-[212.6px] xl:w-full xl:max-w-[20%] pr-2 flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.address_start}
                    </li>
                    <li className="w-[180.7px] xl:w-full xl:max-w-[17%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.date_start}
                    </li>
                    <li className="w-[212.6px] xl:w-full xl:max-w-[20%] pr-2 flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.address_end}
                    </li>
                    <li className="w-[85px] xl:w-full xl:max-w-[8%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.type_car}
                    </li>
                    <li className="w-[85px] xl:w-full xl:max-w-[8%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.license_plate}
                    </li>
                    <li
                      className={`w-[127.5px] xl:w-full xl:max-w-[12%] h-[35px] shrink-0 flex items-center justify-center ${
                        item.state === "completed"
                          ? "bg-[#3a974c1a]"
                          : item.state === "shipping"
                          ? "bg-[#f293391a]"
                          : item.state === "picking"
                          ? "bg-[#d11a2a1a]"
                          : item.state === "draft" && "bg-[#4285f41a]"
                      } rounded-[22px]`}
                    >
                      <p
                        className={`text-[10px] font-semibold leading-[14px] ${
                          item.state === "completed"
                            ? "text-[#3A974C]"
                            : item.state === "shipping"
                            ? "text-[#F29339]"
                            : item.state === "picking"
                            ? "text-[#D11A2A]"
                            : item.state === "draft" && "text-[#4285F4]"
                        }`}
                      >
                        {item.state === "completed"
                          ? "Hoàn thành"
                          : item.state === "shipping"
                          ? "Đang vận chuyển"
                          : item.state === "picking"
                          ? "Đang lấy hàng"
                          : item.state === "draft" && "Tạo mới"}
                      </p>
                    </li>
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="ml-[218px] 2xl:ml-[268px] w-[calc(100%-218px)] 2xl:w-[calc(100%-268px)] p-[30px] bg-[#fafafb]">
      <h2 className="text-2xl text-[#4285F4] font-bold">Đơn hàng</h2>

      <Dashboard />

      <div className="w-full flex justify-between mt-6">
        <GroupFuncKeys
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

          <button className="shink-0 w-full max-w-[150px] h-10 p-[4px_20px] flex items-center justify-center gap-[10px] bg-[#4285F4] rounded-[10px]">
            <div className="shrink-0 w-3 h-3 right-[23px]">
              <Image src={search} alt="" />
            </div>
            <p className="text-[#fff] text-sm font-semibold leading-[18px]">
              Tìm kiếm
            </p>
          </button>
        </div>
      </div>

      <div className="block xl:table w-full mt-6 overflow-x-scroll">
        <div>
          <ul className="flex items-center py-5 pr-5">
            <li className="w-full max-w-[6%] text-[#030229] text-xs font-medium text-center">
              STT
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Mã đơn{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[285.5px] xl:w-full xl:max-w-[25%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Ngày đặt hàng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[114.2px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Số lượng xe{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Tổng tiền{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Đã đặt cọc{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[137.04px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Còn lại{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[100px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap"></li>
          </ul>
        </div>

        {renderDataTable()}
      </div>
    </div>
  );
}
