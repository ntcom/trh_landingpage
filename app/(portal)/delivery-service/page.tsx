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

const dataTable = [
  {
    stt: 1,
    code: "S00924",
    product: "Vật tư",
    quantityCar: 1,
    quantity: 30,
    dvt: "Tấn",
    price: 1000000,
    totalPrice: 30000000,
    deposits: 0,
    status: {
      type: "new",
      title: "Tạo mới",
    },
  },
  {
    stt: 2,
    code: "S00925",
    product: "Vật tư",
    quantityCar: 1,
    quantity: 56,
    dvt: "Tấn",
    price: 1000000,
    totalPrice: 56000000,
    deposits: 0,
    status: null,
    children: [
      {
        code: "02/TRANGHUY/2024",
        departure: "Sân bay Tân Sơn Nhất, TP HCM",
        dateOfDepartment: "15/05/2024",
        destination: "Đông Anh, Hà Nội",
        theDayArrives: "19/05/2024",
        rangeOfVehicle: "Xe tải 13 tấn",
        licensePlate: "29G-12512",
        childStatus: {
          type: "transport",
          title: "Đang vận chuyển",
        },
      },
      {
        code: "01/TRANGHUY/2024",
        departure: "Sân bay Tân Sơn Nhất, TP HCM",
        dateOfDepartment: "15/05/2024",
        destination: "Đông Anh, Hà Nội",
        theDayArrives: "19/05/2024",
        rangeOfVehicle: "Xe tải 13 tấn",
        licensePlate: "29G-11245",
        childStatus: {
          type: "transport",
          title: "Đang vận chuyển",
        },
      },
    ],
  },
  {
    stt: 3,
    code: "S00911",
    product: "Miến dong",
    quantityCar: 1,
    quantity: 30,
    dvt: "Tấn",
    price: 1000000,
    totalPrice: 30000000,
    deposits: 0,
    status: {
      type: "complete",
      title: "Hoàn thành",
    },
  },
  {
    stt: 4,
    code: "S00999",
    product: "Vật tư",
    quantityCar: 1,
    quantity: 56,
    dvt: "Tấn",
    price: 1000000,
    totalPrice: 56000000,
    deposits: 0,
    status: null,
    children: [
      {
        code: "03/TRANGHUY/2024",
        departure: "Sân bay Tân Sơn Nhất, TP HCM",
        dateOfDepartment: "15/05/2024",
        destination: "Đông Anh, Hà Nội",
        theDayArrives: "19/05/2024",
        rangeOfVehicle: "Xe tải 13 tấn",
        licensePlate: "29G-12512",
        childStatus: {
          type: "transport",
          title: "Đang vận chuyển",
        },
      },
      {
        code: "05/TRANGHUY/2024",
        departure: "Sân bay Tân Sơn Nhất, TP HCM",
        dateOfDepartment: "15/05/2024",
        destination: "Đông Anh, Hà Nội",
        theDayArrives: "19/05/2024",
        rangeOfVehicle: "Xe tải 13 tấn",
        licensePlate: "29G-11245",
        childStatus: {
          type: "transport",
          title: "Đang vận chuyển",
        },
      },
    ],
  },
];

export default function DeliveryService() {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterSelect, setFilterSelect] = useState("all");
  const [soft, setSoft] = useState("new");
  const [orderData, setOrderData] = useState([]);
  const [dropdowm, setDropdown] = useState(null);

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

  // const getOrderList = async () => {
  //   orderService.getData({}).then(({ result }) => {
  //     setOrderData(result.sale_order_ids);
  //     console.log(">>>>>>>>", result);
  //   });
  // };

  useEffect(() => {
    // getOrderList();
  }, []);

  // const renderDataTable = () => {
  //   return orderData.map((line: any, index) => {
  //     const lineKey = line.name.slice(1);
  //     const formatter = new Intl.NumberFormat("vi", {
  //       style: "currency",
  //       currency: "VND",
  //     });
  //     return (
  //       <tr
  //         key={lineKey}
  //         className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
  //       >
  //         <li className="w-full max-w-[6.98%] text-[#030229] text-xs text-center font-normal">
  //           {index + 1}
  //         </li>
  //         <li className="w-[110px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           <Link
  //             href={
  //               line.state === "transport"
  //                 ? `transport/${line.name}`
  //                 : `/delivery-service/${line.name}`
  //             }
  //             className="text-[#4285F4] hover:underline"
  //           >
  //             {line.name}
  //           </Link>
  //         </li>
  //         <li className="w-[172px] xl:w-full xl:max-w-[15%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           <Image
  //             src={calendar}
  //             alt=""
  //             className="block shrink-0 w-[12.6px]"
  //           />
  //           {line.date_order}
  //         </li>
  //         <li className="w-[220px] xl:w-full xl:max-w-[21%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           {line.line_ids[0].product_name}
  //         </li>
  //         <li className="w-[90px] xl:w-full xl:max-w-[8%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           {line.line_ids[0].product_uom_qty}
  //         </li>
  //         <li className="w-[150px] xl:w-full xl:max-w-[15%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           {formatter.format(line.line_ids[0].price_total)}
  //         </li>
  //         <li className="w-[120px] xl:w-full xl:max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
  //           {formatter.format(line.line_ids[0].advance_money)}
  //         </li>
  //         <li
  //           className={`flex items-center justify-center shrink-0 w-[140px] h-[35px] ${
  //             line.state === "sale"
  //               ? "bg-[#3a974c1a]"
  //               : line.state === "looking ncc"
  //               ? "bg-[#f293391a]"
  //               : line.state === "cancel"
  //               ? "bg-[#d11a2a1a]"
  //               : "bg-[#4285f41a]"
  //           } rounded-[22px]`}
  //         >
  //           <p
  //             className={`text-sm font-bold leading-[14px] ${
  //               line.state === "sale"
  //                 ? "text-[#3A974C]"
  //                 : line.state === "looking ncc"
  //                 ? "text-[#F29339]"
  //                 : line.state === "cancel"
  //                 ? "text-[#D11A2A]"
  //                 : "text-[#4285F4]"
  //             }`}
  //           >
  //             {line.state === "sale"
  //               ? "Đơn bán hàng"
  //               : line.state === "looking ncc"
  //               ? "Đang vận chuyển"
  //               : "Đã huỷ"}
  //           </p>
  //         </li>
  //       </tr>
  //     );
  //   });
  // };
  const renderDataTable = () => {
    return dataTable.map((line: any, index) => {
      const lineKey = line.code.slice(1);
      const formatter = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      });
      return (
        <div key={lineKey}>
          <ul
            className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
          >
            <li className="w-full max-w-[6%] text-[#030229] text-xs text-center font-normal">
              {index + 1}
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              <Link
                href={
                  line.state === "transport"
                    ? `transport/${line.code}`
                    : `/delivery-service/${line.code}`
                }
                className="text-[#4285F4] hover:underline"
              >
                {line.code}
              </Link>
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.quantityCar}
            </li>
            <li className="w-[198.9px] xl:w-full xl:max-w-[18%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.product}
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {formatter.format(line.price)}
            </li>
            <li className="w-[88.4px] xl:w-full xl:max-w-[8%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.quantity}
            </li>
            <li className="w-[66.3px] xl:w-full xl:max-w-[6%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.dvt}
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {formatter.format(line.totalPrice)}
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.deposits > 0 ? formatter.format(line.deposits) : ""}
            </li>
            {line.status !== null ? (
              <li
                className={`flex items-center justify-center shrink-0 w-[138px] h-[35px] ${
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
                  {line.status.type === "complete"
                    ? "Hoàn thành"
                    : line.status.type === "transport"
                    ? "Đang vận chuyển"
                    : line.status.type === "cancel"
                    ? "Đã huỷ"
                    : "Tạo mới"}
                </p>
              </li>
            ) : (
              <li
                onClick={() => dropdowm === line.code ? setDropdown(null) : setDropdown(line.code)}
                className={`flex items-center justify-center shrink-0 w-[138px] h-[35px] p-[6px_20px] border-[1px] border-solid border-[#0755d1] rounded-[22px]`}
              >
                {dropdowm === line.code ? <Image src={minusClose} alt="" className="w-full h-full" /> : <Image src={plusShow} alt="" className="w-full h-full" />}
              </li>
            )}
          </ul>
          {line?.children && (
            <div
              className={`w-full ${
                dropdowm === line.code ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              } pl-[66.3px] transition-all duration-300`}
            >
              <ul className="flex items-center py-5 px-4">
                <li className="w-[207.74px] xl:w-full xl:max-w-[20%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Mã đơn{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[155.8px] xl:w-full xl:max-w-[15%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Nơi đi{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Ngày đi{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[155.8px] xl:w-full xl:max-w-[15%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Nơi đến{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Ngày đến{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Loại xeT{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Biển số{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
                <li className="w-[138px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
                  Trạng thái{" "}
                  <Image
                    src={arrowDown}
                    alt=""
                    className={`block shrink-0 w-[7px] h-[6px] ${
                      soft === "old" && "rotate-180"
                    }`}
                  />
                </li>
              </ul>
              {line?.children.map((item: any) => {
                const itemKey = item.code.split('/')[0]
                return (
                  <ul
                    key={itemKey}
                    className={`relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] px-4`}
                  >
                    <li className="w-[207.74px] xl:w-full xl:max-w-[20%] flex items-center gap-[10px] text-[#030229] text-xs font-semibold whitespace-nowrap">
                      <Link
                        href={
                          line.state === "transport"
                            ? `transport/${line.code}`
                            : `/delivery-service/${line.code}`
                        }
                        className="text-[#4285F4] hover:underline"
                      >
                        {item.code}
                      </Link>
                    </li>
                    <li className="w-[155.8px] xl:w-full xl:max-w-[15%] pr-2 flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.departure}
                    </li>
                    <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.dateOfDepartment}
                    </li>
                    <li className="w-[155.8px] xl:w-full xl:max-w-[15%] pr-2 flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.destination}
                    </li>
                    <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.theDayArrives}
                    </li>
                    <li className="w-[103.8px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.rangeOfVehicle}
                    </li>
                    <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-[10px] text-[#030229] text-xs font-medium">
                      {item.licensePlate}
                    </li>
                    <li
                      className={`flex items-center justify-center shrink-0 w-[106px] h-[35px] ${
                        item.childStatus.type === "complete"
                          ? "bg-[#3a974c1a]"
                          : item.childStatus.type === "transport"
                          ? "bg-[#f293391a]"
                          : item.childStatus.type === "cancel"
                          ? "bg-[#d11a2a1a]"
                          : "bg-[#4285f41a]"
                      } rounded-[22px]`}
                    >
                      <p
                        className={`text-[10px] font-semibold leading-[14px] ${
                          item.childStatus.type === "complete"
                            ? "text-[#3A974C]"
                            : item.childStatus.type === "transport"
                            ? "text-[#F29339]"
                            : item.childStatus.type === "cancel"
                            ? "text-[#D11A2A]"
                            : "text-[#4285F4]"
                        }`}
                      >
                        {item.childStatus.type === "complete"
                          ? "Hoàn thành"
                          : item.childStatus.type === "transport"
                          ? "Đang vận chuyển"
                          : item.childStatus.type === "cancel"
                          ? "Đã huỷ"
                          : "Tạo mới"}
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
            <li className="w-full max-w-[6%] text-[#030229] text-xs font-medium">
              STT
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Mã đơn hàng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Số lượng xe{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[198.9px] xl:w-full xl:max-w-[18%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Mặt hàng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Đơn giá{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[88.4px] xl:w-full xl:max-w-[8%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Số lượng{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[66.3px] xl:w-full xl:max-w-[6%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              ĐVT{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Tổng tiền{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[110.5px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Đã đặt cọc{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
            <li className="w-[138px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-medium whitespace-nowrap">
              Trạng thái{" "}
              <Image
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </li>
          </ul>
        </div>

        {renderDataTable()}
      </div>
    </div>
  );
}
