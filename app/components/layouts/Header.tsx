"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import phone from "@/assets/svgs/phone.svg";
import pen from "@/assets/svgs/pen.svg";
import user from "@/assets/svgs/user.svg";
import search from "@/assets/svgs/search.svg";
import searchGreen from "@/assets/svgs/search-green.svg";
import navigation from "@/assets/svgs/navigation.svg";
import navigationGreen from "@/assets/svgs/navigation-green.svg";
import chevron from "@/assets/svgs/chevron-white2.svg";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import logo from "@/assets/imgs/logo.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [onSearch, setOnsearch] = useState(false);

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    window.onscroll = () => {
      if (window.scrollY >= 56) {
        setScroll(true);
        setOnsearch(false);
      } else {
        setScroll(false);
      }
    };
    // }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full bg-[#fff] p-[10px_15px] md:p-[10px_65px] z-[997]">
        <div className="container flex flex-wrap items-center justify-between py-[10px] gap-[15px_30px]">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-7">
            <div className="flex items-center gap-[15px]">
              <Image src={phone} height={14} alt="" />
              <div className="flex items-center gap-2">
                <a
                  href="tel:+84934525315"
                  className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px] whitespace-normal"
                >
                  0934-525-315
                </a>
                <p className="text-[10px] xsss:text-xs text-[#4c4c4c]">/</p>
                <a
                  href="tel:+84903269299"
                  className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px] whitespace-normal"
                >
                  0903-269-299
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image src={pen} height={14} alt="" />
              <p className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px] whitespace-normal">
                cskh@tranghuylogistics.com
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-end gap-4 md:gap-5 xl:gap-7">
            <Image src={user} height={14} alt="" />
            <div className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px]">
              <a href="/signin">Log in</a> / <a href="/signup">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${
          scroll
            ? "fixed top-0 bg-[#fff] p-[0_15px] sm:p-[0_65px] shadow-[0_2px_15px_0_rgba(100,100,100,0.05)]"
            : "header-on-scroll absolute bg-transparent p-[30px_15px] sm:p-[50px_65px]"
        } left-0 right-0 transition-all duration-500 z-[996]`}
      >
        <div className={`h-[60px] flex items-center`}>
          <div className="container flex justify-between">
            <a
              href="/"
              className={`${
                scroll ? "w-[100px] h-[42px]" : "w-[150px] h-[60px]"
              }`}
            >
              {/* <p
                className={`${
                  scroll ? "text-[#218392]" : "text-[#fff]"
                } text-2xl tracking-[0.5em]`}
              >
                <strong>BRO</strong>BIT
              </p> */}
              <Image src={logo} alt="" className={`w-full h-full`} />
            </a>
            <div className="flex items-center gap-[40px]">
              <nav className="hidden md:flex items-center gap-[30px]">
                <a
                  href="/helpdesk"
                  className={`py-[15px] text-xs ${
                    scroll
                      ? "text-[#4c4c4c] hover:text-[#218392]"
                      : "text-[#fff] hover:text-[#ffffffb3]"
                  } font-medium tracking-[2.8px] leading-[14px] uppercase transition-all`}
                >
                  IT Helpdesk
                </a>
                <a
                  href="https://capa-group.netlify.app/login"
                  className={`py-[15px] text-xs ${
                    scroll
                      ? "text-[#4c4c4c] hover:text-[#218392]"
                      : "text-[#fff] hover:text-[#ffffffb3]"
                  } font-medium tracking-[2.8px] leading-[14px] uppercase transition-all`}
                >
                  Khách hàng
                </a>
              </nav>

              <div className="flex items-center gap-9">
                <div className="relative flex items-center">
                  <input
                    placeholder="seach"
                    type="text"
                    className={`${
                      onSearch ? "w-[280px] opacity-100" : "w-0 opacity-0"
                    } overflow-hidden h-[35px] p-[8px_40px_8px_15px] bg-transparent rounded-sm outline-none text-sm border ${
                      scroll ? "text-[#218392] border-[#218392]" : "text-[#fff]"
                    } transition-all duration-300`}
                  />
                  <button
                    onClick={() => {
                      if (onSearch) {
                        setOnsearch(false);
                      } else {
                        setOnsearch(true);
                      }
                    }}
                    className="absolute right-4"
                  >
                    {scroll ? (
                      <Image
                        src={searchGreen}
                        width={14}
                        className="hidden md:block"
                        alt=""
                      />
                    ) : (
                      <Image
                        src={search}
                        width={14}
                        className="hidden md:block"
                        alt=""
                      />
                    )}
                  </button>
                </div>
                <button onClick={() => setSideBar(true)}>
                  {scroll ? (
                    <Image src={navigationGreen} width={20} alt="" />
                  ) : (
                    <Image src={navigation} width={20} alt="" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />

      {scroll && !sideBar && (
        <a
          href="#"
          className="flex justify-center items-center w-[60px] h-[60px] fixed bottom-0 right-0 bg-[#218392] opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 z-[998]"
        >
          <Image src={chevron} alt="" className="-rotate-90" />
        </a>
      )}
    </div>
  );
}
