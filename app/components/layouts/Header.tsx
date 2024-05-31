// import user from "@/public/phone.svg";

import Link from "next/link";
import { menu } from "../../utils/appConfig";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full">
      <header className=" bg-primary flex justify-between h-[40px]">
        <div className="container-app">
          <div className="flex justify-between items-center h-full">
            {/* <img src={user} alt="sad" /> */}
            <p className="font-semibold text-white text-sm">Welcome khách</p>
            <div>
              <ul className="flex gap-5">
                {menu.map((item, index) => {
                  return (
                    <li key={index} className="text-white text-sm">
                      <Link href={item.path}> {item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="container-app mb-6">
        <Image
          src="https://ticket.flc.vn/logo.php"
          alt="logo"
          width="270"
          height="135"
        />
      </div>
    </div>
  );
}
