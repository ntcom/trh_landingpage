"use client";
import BannerCustom from "@/app/components/BannerCustom";
import SvgMail from "@/assets/svgs/SvgMail";
import Input from "@/core/components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eyeIcon from "@/assets/svgs/eye.svg";
import SvgTicket from "@/assets/svgs/SvgTicket";
import SvgCheck from "@/assets/svgs/SvgCheck";

function CheckProcess() {
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
  return (
    <div>
      <div className="mb-20">
        <BannerCustom pageName="Create Requirement" breadcrumbs={breadcrumbs} />
        <div className="container-app px-6">
          <h2 className="bg-secondary heading px-3 py-1">Kiểm tra tiến độ</h2>
          <p className="text-xs pt-2 pb-8">
            Hãy cung cấp địa chỉ email và mã số của phiếu để xem trạng thái xử
            lý. Có thể anh/chị sẽ phải đăng nhập để xem nội dung phiếu.
          </p>
          {/* <h3 className="text-2xl">Thông tin liên lạc</h3> */}
          <hr className="divide"></hr>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card-app border border-[#ccc] p-6 rounded-md bg-[#F5F5F5]">
              <div className="flex  mb-6">
                <Input
                  id="email"
                  icon={SvgMail}
                  type="text"
                  className="input-app"
                  placeholder="E-mail"
                />
              </div>
              <div className="flex  mb-6">
                <Input
                  id="email"
                  icon={SvgTicket}
                  type="text"
                  className="input-app"
                  placeholder="Ticket"
                />
              </div>
              <button className="btn-common btn-app">
                <Image src={eyeIcon} alt="" />
                Xem phiếu
              </button>
            </div>
            <div className="card-app border border-[#ccc] p-6 rounded-md bg-[#F5F5F5]">
              <div className="">
                <SvgCheck className="inline-block mr-2" /> Anh/chị đã có tài
                khoản chưa?{" "}
                <Link className="text-primary hover:underline" href="/login">
                  Đăng nhập
                </Link>{" "}
                hoặc{" "}
                <Link className="text-primary hover:underline" href="/register">
                  đăng ký để tạo tài khoản{" "}
                </Link>
                để truy cập tất cả các phiếu yêu cầu.
              </div>
              <div className="mt-5">
                <SvgCheck className="inline-block mr-2" />
                Đây là lần đầu anh/chị truy cập hệ thống? hoặc anh/chị quên mã
                số phiếu đã tạo, hãy{" "}
                <Link
                  className="text-primary hover:underline"
                  href="/create-requirement"
                >
                  {" "}
                  mở phiếu yêu cầu (ticket) mới.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckProcess;
