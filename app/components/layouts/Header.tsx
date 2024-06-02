"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import phone from "@/assets/svgs/phone.svg";
import pen from "@/assets/svgs/pen.svg";
import user from "@/assets/svgs/user.svg";
import message from "@/assets/svgs/message.svg";
import search from "@/assets/svgs/search.svg";
import searchGreen from "@/assets/svgs/search-green.svg";
import navigation from "@/assets/svgs/navigation.svg";
import navigationGreen from "@/assets/svgs/navigation-green.svg";
import chevron from "@/assets/svgs/chevron-white2.svg";
import Sidebar from "@/app/components/Sidebar/Sidebar";

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
      <div className="w-full bg-[#fff] p-[10px_15px] sm:p-[10px_65px] z-[997]">
        <div className="container flex flex-wrap items-center justify-center lg:justify-between py-[10px] gap-[15px_30px]">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-5 xl:gap-7">
            <div className="flex items-center gap-[15px]">
              <Image src={phone} height={14} alt="" />
              <p className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px]">
                800-123-45-67
              </p>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image src={pen} height={14} alt="" />
              <p className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px]">
                brobit@example.com
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 md:gap-5 xl:gap-7">
            <div className="flex items-center gap-[15px]">
              <Image src={user} height={14} alt="" />
              <p className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px]">
                Log in / Sign Up
              </p>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image src={message} height={14} alt="" />
              <p className="text-[10px] xsss:text-xs text-[#4c4c4c] font-medium uppercase tracking-[2.4px]">
                Request a quote
              </p>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${
          scroll
            ? "fixed top-0 bg-[#fff] p-[0_15px] sm:p-[0_65px] shadow-[0_2px_15px_0_rgba(100,100,100,0.05)]"
            : "absolute top-[147px] xsr:top-[116px] xs:top-[85px] xsss:top-[87px] mds:top-[56px] bg-transparent p-[30px_15px] sm:p-[50px_65px]"
        } left-0 right-0 transition-all duration-500 z-[996]`}
      >
        <div className={`h-[60px] flex items-center`}>
          <div className="container flex justify-between">
            <a
              href="/"
              className={`h-[42px] p-[7px_12px] flex justify-center items-center border-[2px] border-solid ${
                scroll ? "border-[#218392] h-[42px]" : "border-[#fff]"
              }`}
            >
              <p
                className={`${
                  scroll ? "text-[#218392]" : "text-[#fff]"
                } text-2xl tracking-[0.5em]`}
              >
                <strong>BRO</strong>BIT
              </p>
            </a>
            <div className="flex items-center gap-[40px]">
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
