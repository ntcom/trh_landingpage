"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicePage() {
  const breadcrumbs = [
    {
      title: "Home page",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];
  return (
    <div className="mb-20">
      <BannerCustom pageName="services" breadcrumbs={breadcrumbs} />
      <div className="container-app p-[150px_24px] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex">
            <div className="card-app p-[40px] min-h-[380px] flex flex-col flex-grow">
              <div className="flex justify-center">
                <Image
                  src="https://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/service-icon01.png"
                  alt="image"
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-[24px] font-bold text-center mt-8 mb-2 hover:text-[#0755d1]">
                Tạo yêu cầu mới
              </h2>
              <p className="font-light text-center text-[#6e6e6e] cursor-pointer">
                Với người dùng sử dụng email @tranghuy.com, các anh/chị đăng nhập bằng
                email và mật khẩu của mình để tạo phiếu yêu cầu hỗ trợ. Đối với
                các email khác, vui lòng tạo, kích hoạt tài khoản lần đầu để bắt
                đầu sử dụng.
              </p>
              <div className="flex justify-center mt-4 sefl-end flex-1">
                <Link
                  href="/create-requirement"
                  className="btn-common self-end btn-send"
                >
                  Tạo yêu cầu mới
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card-app p-[40px] min-h-[380px] flex flex-col flex-grow">
              <div className="flex justify-center">
                <Image
                  src="https://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/service-icon02.png"
                  alt="image"
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-[24px] font-bold text-center mt-8 mb-2 hover:text-[#0755d1]">
                Kiểm tra tiến độ
              </h2>
              <p className="font-light text-center text-[#6e6e6e] cursor-pointer">
                Hệ thống lưu lại lịch sử các lần giao tiếp của anh/chị với các
                Ban, Phòng, Bộ phận chức năng, vui lòng chuẩn bị sẵn email và số
                phiếu yêu cầu của anh/chị để kiểm tra tiến độ phối hợp xử lý sự
                việc.
              </p>
              <div className="flex justify-center mt-4 sefl-end flex-1">
                <Link
                  href="/checking-process"
                  className="btn-common self-end btn-refresh"
                >
                  Kiểm tra tiến độ
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card-app p-[40px] min-h-[380px] flex flex-col flex-grow">
              <div className="flex justify-center">
                <Image
                  src="https://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/service-icon03.png"
                  alt="image"
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-[24px] font-bold text-center mt-8 mb-2 hover:text-[#0755d1]">
                Các vấn đề tương tác
              </h2>
              <div className="font-light text-center text-[#6e6e6e] cursor-pointer">
                <p>- Báo hỗ trợ về CNTT (v2.0)</p>
                <p>- Đăng ký quảng cáo WIFI Marketing/Màn hình TV</p>
                <p>- Đăng ký tài khoản Polycom/Email/Thẻ Từ</p>
                <p>- Đặt lịch họp/Báo hỏng Tài sản/Thiết bị</p>
                <p className="font-semibold">* SẮP RA MẮT *</p>
                <p>- Báo nguy cơ về an ninh, PCCC</p>
                <p>
                  - Báo hỗ trợ nghiệp vụ HiStaff và giải đáp các vấn đề pháp
                  chế/nhân sự.
                </p>
              </div>
              <div className="flex justify-center mt-4 sefl-end flex-1">
                <Link
                  href="/create-requirement"
                  className="btn-common self-end btn-refresh"
                >
                  Báo cáo sự việc mọi lúc, mọi nơi
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card-app p-[40px] min-h-[380px] flex flex-col flex-grow">
              <div className="flex justify-center">
                <Image
                  src="https://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/service-icon05.png"
                  alt="image"
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-[24px] font-bold text-center mt-8 mb-2 hover:text-[#0755d1]">
                Đơn vị tiếp nhận
              </h2>
              <p className="font-light text-center text-[#6e6e6e] cursor-pointer">
                Tương ứng với các vấn đề mà anh/chị phản ánh/đề xuất/yêu cầu hỗ
                trợ, Hệ thống Support Ticket này sẽ chuyển nội dung tới các Ban,
                Phòng, Bộ phận tương ứng.
              </p>
              <p className="font-light text-center text-[#6e6e6e] cursor-pointer">
                Đối với các công việc cần xử lý gấp, vui lòng liên hệ qua điện
                thoại, tin nhắn sms/viber...Tuy nhiên, Hỗ trợ viên sẽ tạo phiếu
                bổ sung cho vấn đề/sự việc đã được hỗ trợ xong.
              </p>
              <div className="flex justify-center mt-4 sefl-end flex-1">
                <Link
                  href="/checking-process"
                  className="btn-common self-end btn-send"
                >
                  Việc không trôi, nắm bắt kịp thời
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
