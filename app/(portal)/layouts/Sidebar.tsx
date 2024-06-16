import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/imgs/Portal/logo2.png";
import infoIcon from "@/assets/svgs/Portal/info.svg";
import infoIconActive from "@/assets/svgs/Portal/info-active.svg";
import contractIcon from "@/assets/svgs/Portal/contract.svg";
import contractIconActive from "@/assets/svgs/Portal/contract-active.svg";
import upgrade from "@/assets/svgs/Portal/upgrade.svg";
import ava from "@/assets/imgs/Portal/ava.png";
import logout from "@/assets/svgs/Portal/logout2.svg";

const navs = [
  {
    id: 1,
    name: "Đơn hàng",
    icon: contractIcon,
    iconActive: contractIconActive,
    link: "/delivery-service",
  },
  {
    id: 2,
    name: "Thông tin",
    icon: infoIcon,
    iconActive: infoIconActive,
    link: "/client-profile",
  },
  // {
  //   id: 3,
  //   name: "Ví",
  //   icon: walletIcon,
  //   iconActive: walletIconActive,
  //   link: "/wallet",
  //   children: [
  //     {
  //       id: 11,
  //       name: "Lịch sử giao dịch",
  //     },
  //     {
  //       id: 12,
  //       name: "Nạp tiền",
  //     },
  //     {
  //       id: 13,
  //       name: "Rút tiền",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Đơn hàng mua hộ",
  //   icon: getIcon,
  //   iconActive: getIconActive,
  //   link: "/order-service",
  // },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 bottom-0 shrink-0 w-[218px] 2xl:w-[268px] h-screen bg-[linear-gradient(270deg,#4285F4_-67.2%,#10439F_100%)] flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-[15px] p-[50px_20px_70px]">
        <Link
          href={"/delivery-service"}
          className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full p-[8px_20px] rounded-3xl bg-[#fff] flex justify-center"
        >
          <Image src={logo} alt="" className="w-[150px]" />
        </Link>
        {/* <Link to={"/"} className="text-[#4285F4] text-2xl font-bold">
          TRANGHUY
        </Link> */}
      </div>

      <nav className="w-full px-5 flex flex-col gap-3">
        {navs.map((nav) => {
          return (
            <Link
              href={nav.link}
              className="block py-[8px] rounded-[10px] hover:bg-[linear-gradient(90deg,rgba(66,133,244,.2)_0%,rgba(66,133,244,0.00)_30.98%)]"
              style={{
                backgroundColor: pathname === nav.link ? "#fff" : '',
              }}
              key={nav.id}
            >
              <div className="px-5 flex items-center gap-4">
                <Image
                  src={pathname === nav.link ? nav.iconActive : nav.icon}
                  alt=""
                  className="shrink-0 w-5 h-5"
                />
                <p
                  className={`text-base ${
                    pathname === nav.link
                      ? "text-[#4285F4] font-bold"
                      : "text-[#fff] font-semibold"
                  } whitespace-nowrap`}
                >
                  {nav.name}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-[166px] w-full max-w-[77.06%] h-[145px] mx-auto bg-[#fff] bgs-[#80abff1a] rounded-[20px] p-[15px] flex flex-col items-center justify-between">
        <div className="w-[50%]">
          <Image src={upgrade} alt="" />
        </div>
        <button className="w-full h-[33px] rounded-[10px] bg-[#FF8057] shadow-[0px_4px_4px_0px_rgba(31,31,31,0.25)] self-end">
          <p className="text-xs text-[#fff] font-semibold">Sàn vận tải</p>
        </button>
      </div>

      <div className="absolute bottom-10 flex justify-between gap-[22px] items-center">
        <div className="flex items-center gap-[10px]">
          <button className="shrink-0 block w-[45px] h-[45px] rounded-xl overflow-hidden">
            <Image src={ava} alt="" />
          </button>
          <div>
            <p className="text-sm text-[#fff] font-bold">Tony Nhiem</p>
            <p className="text-sm text-[#fff] texts-[#1f1f1f99] font-mediums">
              Free Account
            </p>
          </div>
        </div>
        <Link href={"/login"} className="shrink-0 flex">
          <Image src={logout} alt="" />
        </Link>
      </div>
    </aside>
  );
}
