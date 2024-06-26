"use client";
import InputCustom from "@/app/components/InputCustom/InputCustom";
import React, { useEffect, useState } from "react";
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
import userService from "@/app/services/user.service";

const nationData = ["Vietnam", "Cuba", "Rusia", "Japan", "USA"];
const cityData = ["Hanoi", "Vinh", "Danang", "Dalat", "TP.HCM"];

export default function ClientProfile() {
  const [iValue, setIValue] = useState("");
  const [paramOption, setParamOption] = useState("");
  const [userData, setUserData] = useState<any>();

  const getUserInfo = async () => {
    const { result } = await userService.getData({});
    setUserData(result.employee_id[0]);
    console.log(">>>>>>>>", result.employee_id[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleChangePassword = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="ml-[218px] 2xl:ml-[268px] w-[calc(100%-218px)] 2xl:w-[calc(100%-268px)] flex mt-[60px]">
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
                Công ty
              </label>
              <InputCustom
                type={"text"}
                placeholder={"Công ty"}
                defaultValue={userData?.company.name}
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
                defaultValue={userData?.name}
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
                  defaultValue={userData?.email}
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
                  defaultValue={
                    userData?.work_phone ? userData.work_phone : null
                  }
                  setInputValue={setIValue}
                  icon={phone}
                />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
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
                  className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
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
            <div className="w-full">
              <label
                htmlFor=""
                className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
              >
                Địa chỉ
              </label>
              <InputCustom
                type={"text"}
                placeholder={"Địa chỉ"}
                defaultValue={userData?.address ? userData.address : null}
                setInputValue={setIValue}
                icon={location}
              />
            </div>
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
          onSubmit={handleChangePassword}
          className="w-full flex flex-col justify-center mt-10"
        >
          <div className="">
            <div className="flex flex-col gap-10 mt-[194px]">
              <InputCustom
                type={"text"}
                placeholder={"Mật khẩu hiện tại"}
                setInputValue={setIValue}
                icon={currPass}
                required={true}
              />
              <InputCustom
                type={"text"}
                placeholder={"Mật khẩu mới"}
                setInputValue={setIValue}
                icon={newPass}
                required={true}
              />
              <InputCustom
                type={"text"}
                placeholder={"Nhập lại mật khẩu"}
                setInputValue={setIValue}
                icon={newPass}
                required={true}
              />
            </div>
          </div>

          <button
            className="font-poppins mt-14 w-full max-w-[300px] mx-auto h-[50px] self-center rounded-[10px] bg-[#4285F4] text-lg text-[#fff] font-bold flex justify-center items-center"
          >
            Đổi mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
}
