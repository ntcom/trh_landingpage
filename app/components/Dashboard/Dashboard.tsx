import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowItemUp from "@/assets/svgs/Portal/arrow-item-up.svg";
import arrowItemDown from "@/assets/svgs/Portal/arrow-item-down.svg";
import bitmap from "@/assets/svgs/Portal/bitmap.svg";

const orderReport = [
  {
    id: 1,
    title: "Đơn giá",
    price: 35000,
    increase: 15,
    decrease: 3.5,
  },
  {
    id: 2,
    title: "Tổng tiền",
    price: 200000,
    decrease: 3.5,
  },
  {
    id: 3,
    title: "Đơn huỷ",
    cancel: 3,
    increase: 15,
  },
  {
    id: 4,
    title: "Đang vận chuyển",
    transport: 28,
    increase: 10,
  },
];

export default function Dashboard() {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

  return (
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
                <p className="text-[28px] text-[#04103B] font-bold my-2">
                  {item.price && formatter.format(item.price)} {item.cancel} {item.transport}
                </p>
              </div>
              <Image src={bitmap} alt="" className="w-[25px] h-full" />
            </div>
            <div className="flex justify-end items-center">
              {/* <div className="flex items-end gap-[6px]">
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
              </div> */}
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
  );
}
