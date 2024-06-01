"use client";
import SvgMail from "@/assets/svgs/SvgMail";
import SvgPalette from "@/assets/svgs/SvgPalette";
import SvgPhone from "@/assets/svgs/SvgPhone";
import SvgUser from "@/assets/svgs/SvgUser";
import Input from "@/core/components/Input";
import Select from "@/core/components/Select";
import React from "react";

function CreateRequirement() {
  const options = [
    { title: "-- Chọn một chủ đề --", value: 0 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
  ];
  return (
    <div>
      <div className="container-app">
        <h2 className="bg-secondary heading px-3 py-1">Tạo yêu cầu mới</h2>
        <p className="text-xs pt-2 pb-8">
          Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.
        </p>
        {/* <h3 className="text-2xl">Thông tin liên lạc</h3> */}
        <hr className="divide"></hr>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div>
              <button className="uppercase tracking-wide btn-app">
                User interface
              </button>
            </div>
            <div className="card-app h-[calc(100%-40px)] p-10">
              <p className="flex items-center gap-4 mb-4 text-lg cursor-pointer">
                <span className="text-red-600 text-2xl tracking-[0.2rem]">
                  +
                </span>
                Ex ration and consectetur laborum?
              </p>
              <p className="flex items-center gap-4 mb-4 text-lg cursor-pointer">
                <span className="text-red-600 text-2xl tracking-[0.2rem]">
                  +
                </span>
                Ex ration and consectetur laborum?
              </p>
              <p className="flex items-center gap-4 mb-4 text-lg cursor-pointer">
                <span className="text-red-600 text-2xl tracking-[0.2rem]">
                  +
                </span>
                Ex ration and consectetur laborum?
              </p>
              <p className="flex items-center gap-4 mb-4 text-lg cursor-pointer">
                <span className="text-red-600 text-2xl tracking-[0.2rem]">
                  +
                </span>
                Ex ration and consectetur laborum?
              </p>
            </div>
          </div>
          <form>
            <div className="flex  mb-4">
              <Input
                id="email"
                icon={SvgMail}
                type="text"
                className="input-app"
                placeholder="E-mail"
              />
            </div>
            {/* Họ tên */}
            <div className="flex  mb-4">
              <Input
                id="fullname"
                type="text"
                icon={SvgUser}
                className="input-app"
                placeholder="Họ tên"
              />
            </div>
            {/* Số điện thoại */}
            <div className="flex  mb-4">
              <div className="flex gap-6">
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app"
                  placeholder="Số điện thoại"
                />
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app"
                  placeholder="Số máy lẻ"
                />
              </div>
            </div>
            <hr className="divide"></hr>
            {/* Chủ đề */}
            <div className="flex  mb-4">
              <Select option={options} icon={SvgPalette} />
            </div>
            <div className="flex gap-2">
              <button className="btn-app">Gửi đi</button>
              <button className="btn-success">Làm mới</button>
              <button className="btn-danger">Hủy bỏ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRequirement;
