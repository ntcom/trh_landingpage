"use client";
import React from "react";
import Image from "next/image";
import phone from "@/assets/svgs/phone.svg";
import pen from "@/assets/svgs/pen.svg";
import user from "@/assets/svgs/user.svg";
import message from "@/assets/svgs/message.svg";
import logo from "@/assets/imgs/logo-footer.png";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return pathname !== '/login' && pathname !== '/delivery-service' && pathname !== '/client-profile' &&  (
    <footer>
      {/* <div className="bg-[#171b1f]">
        <div className="container2 p-[55px_15px] flex flex-col lgs:flex-row items-center lgs:items-start gap-8 justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 mds:gap-8">
            <div className="flex items-center gap-[9px]">
              <Image src={phone} height={14} alt=""/>
              <p className="text-xs text-[#fff] font-medium uppercase tracking-[2.4px] whitespace-nowrap">
                800-123-45-67
              </p>
            </div>
            <div className="flex items-center gap-[9px]">
              <Image src={pen} height={14} alt=""/>
              <p className="text-xs text-[#fff] font-medium uppercase tracking-[2.4px] whitespace-nowrap">
                brobit@example.com
              </p>
            </div>
          </div>

          <div className="shrink-0 cursor-pointer hover:opacity-60 transition-all duration-200">
            <Image src={logo} alt=""/>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mds:gap-8">
            <div className="flex items-center gap-[9px]">
              <Image src={user} height={14} alt=""/>
              <p className="text-xs text-[#fff] font-medium uppercase tracking-[2.4px] whitespace-nowrap">
                Log in / Sign Up
              </p>
            </div>
            <div className="flex items-center gap-[9px]">
              <Image src={message} height={14} alt=""/>
              <p className="text-xs text-[#fff] font-medium uppercase tracking-[2.4px] whitespace-nowrap">
                Request a quote
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#1d2024]">
        <div className="container2 p-[35px_15px]">
          {/* <ul className="flex flex-wrap items-center justify-center gap-[10px] mb-[57px]">
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">Home</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">About</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">Internet</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">IPTV</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">VOIP</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">Blog</a>
            </li>
            <li className="shrink-0 px-5">
              <a href="/" className="text-xs text-[#fff] font-medium leading-6 tracking-[6px] uppercase">Contacts</a>
            </li>
          </ul> */}

          <div className="px-[15px]">
            <p className="text-base text-[#fff] font-medium leading-6 tracking-[6.4px] text-center uppercase">© COPYRIGHT 2024 TRANGHUY</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
