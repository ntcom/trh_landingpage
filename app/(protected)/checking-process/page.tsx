"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import eyeIcon from "@/assets/svgs/eye.svg";
import SvgCheck from "@/assets/svgs/SvgCheck";
import email from "@/assets/svgs/email.svg";
import InputCustom from "@/app/components/InputCustom/InputCustom";
import bitmap from "@/assets/svgs/bitmap.svg"
import arrowItemUp from "@/assets/svgs/arrow-item-up.svg"
import arrowItemDown from "@/assets/svgs/arrow-item-down.svg"

const breadcrumbs = [
  {
    title: "Home page",
    path: "/",
  },
  {
    title: "Checking process",
    path: "/checking-process",
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

function CheckProcess() {
  const [iValue, setIValue] = useState("");

  return (
    <div>
      <div className="mb-20">
        <BannerCustom pageName="Create Requirement" breadcrumbs={breadcrumbs} />
        <div className="container-app px-6">
          <div className="m-[32px_0_50px] flex justify-between gap-[30px]">
            {orderReport.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full max-w-[22.4%] bg-[#fff] p-[25px] border-[1px] border-solid border-[#4285f44d] rounded-[20px] drop-shadow-[0px_4px_8px_rgba(31,31,31,0.10)]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-[#0755d1] font-semibold">
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
                      className="text-xs text-[#0755d1] font-semibold underline"
                    >
                      Xem báo cáo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
            Kiểm tra tiến độ
          </h2>
          <p className="text-base text-[#0755d1] font-medium text-center my-6">
            Hãy cung cấp địa chỉ Email và mã yêu cầu để xem trạng thái xử lý. Có
            thể anh/chị sẽ phải đăng nhập để xem tiến độ.
          </p>
          <hr className="my-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#fff] p-8 rounded shadow-[0_0_10px_0_rgba(0,0,0,0.1)] flex flex-col items-start gap-5">
              <InputCustom
                type={"text"}
                placeholder={"E-mail"}
                setInputValue={setIValue}
                icon={email}
              />
              <InputCustom
                type={"text"}
                placeholder={"Mã yêu cầu"}
                setInputValue={setIValue}
                icon={email}
              />
              <Link
                href={"/create-requirement/process"}
                className="btn-common btn-send m-[20px_auto_0]"
              >
                <Image src={eyeIcon} alt="" />
                Kiểm tra
              </Link>
            </div>
            <div className="p-8 rounded bg-[#fff] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2">
                <SvgCheck className="shrink-0 inline-block mr-2" />
                <p className="text-base text-[#1d2024] font-medium">
                  Anh/chị đã có tài khoản chưa?{" "}
                  <span>
                    <Link
                      className="text-primary hover:underline"
                      href="/login"
                    >
                      Đăng nhập
                    </Link>{" "}
                    hoặc{" "}
                    <span>
                      <Link
                        className="text-primary hover:underline"
                        href="/register"
                      >
                        đăng ký để tạo tài khoản{" "}
                      </Link>
                    </span>
                    để truy cập tất cả các mã yêu cầu.
                  </span>
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <SvgCheck className="shrink-0 inline-block mr-2" />
                <p className="text-base text-[#1d2024] font-medium">
                  Đây là lần đầu anh/chị truy cập hệ thống? hoặc anh/chị quên mã
                  yêu cầu đã tạo, hãy{" "}
                  <span>
                    <Link
                      className="text-primary hover:underline"
                      href="/create-requirement"
                    >
                      tạo yêu cầu mới.
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckProcess;
