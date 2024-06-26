"use client";
import InputCustom from "@/app/components/InputCustom/InputCustom";
import React, { useState } from "react";
import camera from "@/assets/svgs/camera.svg";
import Image from "next/image";
import SelectCustoms from "@/app/components/SelectCustom/SelectCustom";
import Link from "next/link";
import currPass from "@/assets/svgs/current-pass.svg";
import newPass from "@/assets/svgs/new-pass.svg";
import channel from "@/assets/svgs/channel.svg";
import name from "@/assets/svgs/name.svg";
import email from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import nation from "@/assets/svgs/nation.svg";
import city from "@/assets/svgs/city.svg";
import location from "@/assets/svgs/location.svg";

const nationData = ["Vietnam", "Cuba", "Rusia", "Japan", "USA"];
const cityData = ["Hanoi", "Vinh", "Danang", "Dalat", "TP.HCM"];

export default function Profile() {
  const [iValue, setIValue] = useState("");
  const [paramOption, setParamOption] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex mt-[120px]">
      <div className="w-1/2 bg-[#fff] rounded-[10px] p-[50px_40px_120px]">
        <p className="font-poppins text-2xl text-[#4285F4] font-bold">
          Hồ sơ của tôi
        </p>
        <form onSubmit={handleSubmit} className="mt-[30px]">
          <label className="w-[134px] h-[134px] mx-auto bg-[#FAFAFB] rounded-[999px] flex justify-center items-center relative overflow-hidden">
            <input
              type="file"
              name=""
              id=""
              className="absolute w-full h-full cursor-pointer opacity-0"
            />
            <Image src={camera} width={28} height={28} alt="" />
          </label>

          <div className="flex flex-col gap-5 mt-8">
            <div>
              <label
                htmlFor=""
                className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
              >
                Mã
              </label>
              <InputCustom
                type={"text"}
                placeholder={"Mã"}
                defaultValue={99999}
                setInputValue={setIValue}
                icon={channel}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
              >
                Tên
              </label>
              <InputCustom
                type={"text"}
                placeholder={"Tên"}
                setInputValue={setIValue}
                icon={name}
              />
            </div>

            <div className="flex gap-[30px]">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
                >
                  Email
                </label>
                <InputCustom
                  type={"text"}
                  placeholder={"Email"}
                  setInputValue={setIValue}
                  icon={email}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
                >
                  Số điện thoại
                </label>
                <InputCustom
                  type={"text"}
                  placeholder={"Số điện thoại"}
                  setInputValue={setIValue}
                  icon={phone}
                />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-base text-[#030229] font-semibold mb-[15px]"
                >
                  Quốc gia
                </label>
                <SelectCustoms
                  options={nationData}
                  iValue={iValue}
                  setIValue={setIValue}
                  placeholder="Chọn quốc gia"
                  setPickOption={setParamOption}
                  icon={nation}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-base text-[#030229] font-semibold mb-[15px]"
                >
                  Tỉnh/ thành phố
                </label>
                <SelectCustoms
                  options={cityData}
                  iValue={iValue}
                  setIValue={setIValue}
                  placeholder="Tỉnh/thành phố"
                  setPickOption={setParamOption}
                  icon={city}
                />
              </div>
            </div>
            <InputCustom
              type={"text"}
              placeholder={"Địa chỉ"}
              setInputValue={setIValue}
              icon={location}
            />
          </div>

          <div className="w-full flex justify-center">
            <button className="w-full max-w-[300px] h-[52px] bg-[#4285F4] rounded-[10px] mt-[50px] font-poppins text-lg text-[#fff] font-bold">
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-[#fff] rounded-[10px] p-[50px_40px_120px]">
        <h2 className="font-poppins text-2xl text-[#4285F4] font-bold">
          Đổi mật khẩu
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center mt-10"
        >
          <div className="">
            <div className="flex flex-col gap-10 mt-[194px]">
              <InputCustom
                type={"text"}
                placeholder={"Mật khẩu hiện tại"}
                setInputValue={setIValue}
                icon={currPass}
              />
              <InputCustom
                type={"text"}
                placeholder={"Mật khẩu mới"}
                setInputValue={setIValue}
                icon={newPass}
              />
              <InputCustom
                type={"text"}
                placeholder={"Nhập lại mật khẩu"}
                setInputValue={setIValue}
                icon={newPass}
              />
            </div>
          </div>

          <Link
            href={"/login"}
            className="font-poppins mt-14 w-full max-w-[300px] mx-auto h-[50px] self-center rounded-[10px] bg-[#4285F4] text-lg text-[#fff] font-bold flex justify-center items-center"
          >
            Đổi mật khẩu
          </Link>
        </form>
      </div>
    </div>
  );
}
