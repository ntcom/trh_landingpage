"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import bgLogin from "@/assets/imgs/bg-login.png";
import user from "@/assets/svgs/login/user-icon.svg";
import hEyeIcon from "@/assets/svgs/login/eye-close-icon.svg";
import eyeIcon from "@/assets/svgs/login/eye-icon.svg";
import chevronRight from "@/assets/svgs/login/chevron-right2.svg";
// import google from "@/assets/svgs/login/google.svg";
// import facebook from "@/assets/svgs/login/facebook.svg";
// import apple from "@/assets/svgs/login/apple.svg";
import vector1 from "@/assets/svgs/login/vector1.svg";
import vector2 from "@/assets/svgs/login/vector2.svg";
import vector3 from "@/assets/svgs/login/vector3.svg";
import vector4 from "@/assets/svgs/login/vector4.svg";
import vector5 from "@/assets/svgs/login/vector5.svg";
import vector6 from "@/assets/svgs/login/vector6.svg";
import useAuth from "@/app/providers/AuthProvider";

const Login = () => {
  const { isAuthenticated, handleLogin } = useAuth();
  const [eye, setEye] = useState(false);
  const [passVal, setPassVal] = useState("");
  const [username, setUsername] = useState("");

  console.log("🚀 ~ isAuthenticated:", isAuthenticated);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin({
      login: username,
      password: passVal,
    });
  };

  return (
    <div
      className="main-login h-screen p-8 flex flex-col justify-center items-center gap-11 relative overflow-hidden"
      style={{
        background: `no-repeat url(${bgLogin})`,
        // backgroundSize: "cover",
      }}
    >
      <div>
        {/* <h2 className="text-[#fff] text-[46px] md:text-[58px] 2xl:text-[68px] font-semibold leading-normal text-center">
      Đăng nhập
    </h2> */}
        {/* <p className="text-[#fff] text-xs md:text-sm 2xl:text-base font-normal text-center">
      Tạo tài khoản!{" "}
      <span>
        <a
          href="/register"
          className="border-b-[1px] border-solid border-[#fff] pb-[1px]"
        >
          Đăng ký!
        </a>
      </span>
    </p> */}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          background:
            "linear-gradient(116deg,rgba(255,255,255,0.44)-0.2%,rgba(255,255,255,0.00)122.69%)",
          // backdropFilter: "blur(2px)",
        }}
        className="w-full max-w-[340px] md:max-w-[420px] 2xl:max-w-[480px] p-[40px_24px_58px] md:p-[50px_32px] 2xl:p-[60px_44px_80px] rounded-xl flex flex-col items-start gap-5 md:gap-6 2xl:gap-8 z-[996]"
      >
        <div className="w-full flex flex-col gap-2 md:gap-3 2xl:gap-4">
          <label
            htmlFor="username"
            className="text-[#fff] text-sm md:text-lg 2xl:text-xl font-normal"
          >
            Tên đăng nhập
          </label>
          <div className="w-full relative flex items-center">
            <input
              type="text"
              className="w-full h-10 md:h-12 2xl:h-14 bg-[#fff] p-[10px_16px_10px_44px] md:p-[12px_24px_12px_54px] 2xl:p-[12px_24px_12px_64px] outline-none rounded-xl text-sm md:text-lg 2xl:text-xl font-normal placeholder:text-[#BABABA]"
              id="username"
              // placeholder="Your Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Image
              src={user}
              alt="username"
              className="absolute left-4 sx:left-5 w-4 md:w-5 2xl:w-7 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 md:gap-3 2xl:gap-4">
          <label
            htmlFor="password"
            className="text-[#fff] text-sm md:text-lg 2xl:text-xl font-normal"
          >
            Mật khẩu
          </label>
          <div className="w-full relative flex items-center">
            <input
              type={eye ? "text" : "password"}
              className={`w-full h-10 md:h-12 2xl:h-14 bg-[#fff] p-[10px_44px_10px_44px] md:p-[12px_52px_12px_54px] 2xl:p-[12px_60px_12px_64px] outline-none rounded-xl ${
                eye || passVal === ""
                  ? "text-sm md:text-lg 2xl:text-xl"
                  : "text-xl md:text-2xl 2xl:text-[38px] text-[#1f1f1f]"
              } font-normal placeholder:text-sm placeholder:md:text-lg placeholder:2xl:text-xl placeholder:leading-6 placeholder:text-[#BABABA]`}
              id="password"
              // placeholder="Your Password"
              required
              onChange={(e) => setPassVal(e.target.value)}
            />
            <div
              onClick={() => setEye(!eye)}
              className="absolute left-4 sx:left-5 w-4 md:w-5 2xl:w-7 cursor-pointer"
            >
              {eye ? (
                <Image src={hEyeIcon} alt="eye icon" />
              ) : (
                <Image src={eyeIcon} alt="eye icon" />
              )}
            </div>
            {/* <a href="/services"
          style={{
            background:
              "linear-gradient(224deg, rgba(210, 0, 98, 0.55) -56.57%, rgba(38, 102, 207, 0.95) 70.27%)",
          }}
          className="absolute right-0 h-full w-10 md:w-12 2xl:w-14 flex justify-center items-center rounded-[0_12px_12px_0]"
        >
          <Image src={chevronRight} alt="" className="w-2 lg:w-3 2xl:w-4" />
        </a> */}
          </div>
        </div>
        <button type="submit" className="btn-login">
          Đăng nhập
        </button>

        {/* <div className="w-full flex items-center gap-3 md:gap-5 lg:gap-6 2xl:gap-8">
      <p className="shrink-0 text-[#fff] text-xs sm:text-sm md:text-base font-normal">
        Or login with
      </p>
      <i className="w-full h-[1px] bg-[rgba(255,255,255,0.44)]"></i>
    </div>

    <ul className="flex items-center gap-2 xs:gap-3 md:gap-5 lg:gap-6 2xl:gap-8">
      <li className="inline-flex">
        <a href="https://google.com" className="inline-flex">
          <Image
            src={google}
            alt=""
            className="w-[25px] lg:w-[30px] 2xl:w-[37px]"
          />
        </a>
      </li>
      <li className="inline-flex">
        <a href="https://facebook.com">
          <Image
            src={facebook}
            alt=""
            className="w-[20px] lg:w-[25px] 2xl:w-[32px]"
          />
        </a>
      </li>
      <li className="inline-flex">
        <a href="https://apple.com">
          <Image
            src={apple}
            alt=""
            className="w-[20px] lg:w-[25px] 2xl:w-[32px]"
          />
        </a>
      </li>
    </ul> */}
      </form>
      <Image
        src={vector1}
        alt=""
        className="absolute max-w-[8%] top-[43%] left-0"
      />
      <Image
        src={vector2}
        alt=""
        className="absolute max-w-[5%] top-[13%] left-[24%]"
      />
      <Image
        src={vector3}
        alt=""
        className="absolute max-w-[6.6%] bottom-[12%] left-[27%]"
      />
      <Image
        src={vector4}
        alt=""
        className="absolute max-w-[8%] top-[25%] right-[22%]"
      />
      <Image
        src={vector5}
        alt=""
        className="absolute max-w-[8%] bottom-[24.8%] right-[28.8%]"
      />
      <Image
        src={vector6}
        alt=""
        className="absolute max-w-[7%] bottom-[-1.8%] right-[-1%]"
      />
    </div>
  );
};

export default Login;
