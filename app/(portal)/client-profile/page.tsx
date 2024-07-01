"use client";
import InputCustom from "@/app/components/InputCustom/InputCustom";
import React, { useEffect, useState } from "react";
import camera from "@/assets/svgs/camera.svg";
import Image from "next/image";
import SelectCustoms from "@/app/components/SelectCustom/SelectCustom";
import Link from "next/link";
import currPass from "@/assets/svgs/current-pass.svg";
import new_password from "@/assets/svgs/new-pass.svg";
import channel from "@/assets/svgs/channel.svg";
import name from "@/assets/svgs/name.svg";
import email from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import nation from "@/assets/svgs/nation.svg";
import city from "@/assets/svgs/city.svg";
import location from "@/assets/svgs/location.svg";
import userService from "@/app/services/user.service";
import { ComboboxDemo } from "@/components/ui/combobox";
import changePassword from "@/app/services/changePassword.service";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import changeInfo from "@/app/services/changeInfo.service";
import { useRouter } from "next/navigation";
import citysService from "@/app/services/citys.service";

const nationData = ["Vietnam", "Cuba", "Rusia", "Japan", "USA"];
const cityData = ["Hanoi", "Vinh", "Danang", "Dalat", "TP.HCM"];

export default function ClientProfile() {
  const [iValue, setIValue] = useState("");
  const [paramOption, setParamOption] = useState("");
  const [userData, setUserData] = useState<any>();
  const [verifyPass, setVerifyPass] = useState({
    currenPass: true,
    confirmPass: true,
  });
  const [countryData, setCountryData] = useState([
    {
      value: "vn",
      label: "Việt Nam",
    },
  ])
  const [listCity, setListCity] = useState()

  const { toast } = useToast();
  const router = useRouter();

  const getUserInfo = async () => {
    const { result } = await userService.getData({});
    setUserData(result.employee_id[0]);
    console.log("result: ", result);
  };

  const getCitys = async () => {
    const { result } = await citysService.getData({})
    console.log('citysService', result);
    setListCity(result)
  }

  const submitFormInfo = (e: any) => {
    e.preventDefault();
    console.log("form info: ", e);
    const vals = e.target;
    handleChangeInfo({
      image: vals[0].value ? vals[0].value : false,
      company_id: vals[1].value ? vals[1].value : false,
      name: vals[2].value,
      work_email: vals[3].value ? vals[3].value : false,
      mobile_phone: vals[4].value ? vals[4].value : false,
      private_country_id: vals[5].value ? vals[5].value : false,
      private_city: vals[6].value ? vals[6].value : false,
      private_street: vals[7].value ? vals[7].value : false,
    });
  };

  const handleChangeInfo = async (params: any) => {
    const { result } = await changeInfo.postData({
      params: params,
    });
    if (result.errors) {
      setVerifyPass({ ...verifyPass, currenPass: false });
      toast({
        variant: "destructive",
        title: "Đổi thông tin thất bại",
        description: "Vui lòng thử lại",
        action: (
          <ToastAction
            altText="Thử lại"
            onClick={() =>
              setVerifyPass({ currenPass: true, confirmPass: true })
            }
          >
            Thử lại
          </ToastAction>
        ),
      });
    } else {
      toast({
        variant: "success",
        title: "Đổi thông tin thành công!",
        description: "Thành công",
        action: (
          <ToastAction
            altText="Done"
            onClick={() =>
              setVerifyPass({ currenPass: true, confirmPass: true })
            }
          >
            Done
          </ToastAction>
        ),
      });
      setVerifyPass({ confirmPass: true, currenPass: true });
    }
  };

  const submitFormPassword = (e: any) => {
    e.preventDefault();
    const vals = e.target;
    if (vals[1].value === vals[2].value) {
      setVerifyPass({ ...verifyPass, confirmPass: true });
      handleChangePassword({
        old_password: vals[0].value,
        new_password: vals[1].value,
        confirm_password: vals[2].value,
      });
    } else {
      setVerifyPass({ ...verifyPass, confirmPass: false });
    }
  };

  const handleChangePassword = async (params: any) => {
    const { result } = await changePassword.postData({
      params: params,
    });
    if (result.errors) {
      setVerifyPass({ ...verifyPass, currenPass: false });
      toast({
        variant: "destructive",
        title: "Đổi mật khẩu thất bại",
        description: "Vui lòng thử lại",
        action: (
          <ToastAction
            altText="Thử lại"
            onClick={() =>
              setVerifyPass({ currenPass: true, confirmPass: true })
            }
          >
            Thử lại
          </ToastAction>
        ),
      });
    } else {
      toast({
        variant: "success",
        title: "Đổi mật khẩu thành công!",
        description: "Vui lòng đăng nhập lại",
        action: (
          <ToastAction
            altText="Đăng nhập"
            onClick={() => {
              setVerifyPass({ currenPass: true, confirmPass: true });
              localStorage.removeItem("TH_access_token");
              router.push("/login");
            }}
          >
            Đăng nhập
          </ToastAction>
        ),
      });
      setVerifyPass({ confirmPass: true, currenPass: true });
      setTimeout(() => {
        localStorage.removeItem("TH_access_token");
        router.push("/login");
      }, 5000);
    }
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
        <form onSubmit={submitFormInfo} className="mt-[30px]">
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
                isRequired={true}
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
                isRequired={true}
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
                  isRequired={true}
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
                  isRequired={true}
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
                {/* <SelectCustoms
                  options={nationData}
                  iValue={iValue}
                  setIValue={setIValue}
                  placeholder="Chọn quốc gia"
                  setPickOption={setParamOption}
                  icon={nation}
                /> */}
                <ComboboxDemo arrData={countryData} defaultValue={countryData[0].label}/>
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="font-poppins text-lg text-[#0755d1] font-medium block mb-3"
                >
                  Tỉnh/ thành phố
                </label>
                {/* <SelectCustoms
                  options={cityData}
                  iValue={iValue}
                  setIValue={setIValue}
                  placeholder="Tỉnh/thành phố"
                  setPickOption={setParamOption}
                  icon={city}
                /> */}
                <ComboboxDemo arrData={listCity}/>
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
            <button className="w-full max-w-[300px] h-[52px] bg-[#4285F4] rounded-[10px] mt-14 font-poppins text-lg text-[#fff] font-bold">
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
          onSubmit={submitFormPassword}
          className="w-full flex flex-col justify-center mt-10"
        >
          <div className="">
            <div className="flex flex-col gap-[60px] mt-[194px]">
              <div className="mb-[-36px]">
                <InputCustom
                  type={"text"}
                  placeholder={"Mật khẩu hiện tại"}
                  setInputValue={setIValue}
                  icon={currPass}
                  isRequired={true}
                />
                <p
                  className={`${
                    verifyPass.currenPass ? "opacity-0" : "opacity-100"
                  } mt-3 text-[#D11A2A] tracking-[0.3px]`}
                >
                  Mật khẩu không đúng
                </p>
              </div>
              <InputCustom
                type={"text"}
                placeholder={"Mật khẩu mới"}
                setInputValue={setIValue}
                icon={new_password}
                isRequired={true}
              />
              <div>
                <InputCustom
                  type={"text"}
                  placeholder={"Nhập lại mật khẩu"}
                  setInputValue={setIValue}
                  icon={new_password}
                  isRequired={true}
                />
                <p
                  className={`${
                    verifyPass.confirmPass ? "opacity-0" : "opacity-100"
                  } mt-3 text-[#D11A2A] tracking-[0.3px]`}
                >
                  Nhập lại mật khẩu không khớp
                </p>
              </div>
            </div>
          </div>

          <button className="font-poppins mt-5 w-full max-w-[300px] mx-auto h-[50px] self-center rounded-[10px] bg-[#4285F4] text-lg text-[#fff] font-bold flex justify-center items-center">
            Đổi mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
}
