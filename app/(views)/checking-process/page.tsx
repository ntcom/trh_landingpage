"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import eyeIcon from "@/assets/svgs/eye.svg";
import SvgCheck from "@/assets/svgs/SvgCheck";
import email from "@/assets/svgs/email.svg";
import InputCustom from "@/app/components/InputCustom/InputCustom";

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
function CheckProcess() {
  const [iValue, setIValue] = useState("");

  return (
    <div>
      <div className="mb-20">
        <BannerCustom pageName="Create Requirement" breadcrumbs={breadcrumbs} />
        <div className="container-app px-6">
          <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
            Kiểm tra tiến độ
          </h2>
          <p className="text-base text-[#0755d1] font-medium text-center my-6">
            Hãy cung cấp địa chỉ Email và mã yêu cầu để xem trạng thái xử
            lý. Có thể anh/chị sẽ phải đăng nhập để xem tiến độ.
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
              <Link href={'/create-requirement/process'} className="btn-common btn-send m-[20px_auto_0]">
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
