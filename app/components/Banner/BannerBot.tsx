import Image from "next/image";
import bg from "@/assets/imgs/background-gradient02.jpg";
import colBg1 from "@/assets/imgs/Banner2/column-bg-1.png";
import colBg2 from "@/assets/imgs/Banner2/column-bg-2.png";
import colBg3 from "@/assets/imgs/Banner2/column-bg-3.png";

export default function BannerBot() {
  return (
    <div
      style={{
        // background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
      }}
      className="banner-bot-bg"
    >
      <ul className="container2 p-[60px_15px_55px] mds:p-[150px_15px_140px] flex flex-col mds:flex-row items-center mds:items-start justify-between gap-[60px]">
        <li className="relative flex flex-col justify-center items-center">
          <span className="absolute h-full">
            <Image src={colBg1} alt="" className="h-full" />
          </span>
          <p className="text-xl xsss:text-2xl text-[#fff] font-bold leading-6 tracking-[4.8px] uppercase text-center">
            CONTACT US
          </p>
          <p className="text-sm xsss:text-base text-[#fff] font-light leading-6 text-center my-5">
            If you have some questions please drop us a line.
          </p>
          <p className="text-xs text-[#fff] font-light leading-6 tracking-[4.8px] uppercase text-center">
            DROP US A LINE
          </p>
        </li>
        <li className="relative flex flex-col justify-center items-center">
          <span className="absolute h-full">
            <Image src={colBg2} alt="" className="h-full" />
          </span>
          <p className="text-xl xsss:text-2xl text-[#fff] font-bold leading-6 tracking-[4.8px] uppercase text-center">
            CONTACT US
          </p>
          <p className="text-sm xsss:text-base text-[#fff] font-light leading-6 text-center my-5">
            If you have some questions please drop us a line.
          </p>
          <p className="text-xs text-[#fff] font-light leading-6 tracking-[4.8px] uppercase text-center">
            DROP US A LINE
          </p>
        </li>
        <li className="relative flex flex-col justify-center items-center">
          <span className="absolute h-full">
            <Image src={colBg3} alt="" className="h-full" />
          </span>
          <p className="text-xl xsss:text-2xl text-[#fff] font-bold leading-6 tracking-[4.8px] uppercase text-center">
            CONTACT US
          </p>
          <p className="text-sm xsss:text-base text-[#fff] font-light leading-6 text-center my-5">
            If you have some questions please drop us a line.
          </p>
          <p className="text-xs text-[#fff] font-light leading-6 tracking-[4.8px] uppercase text-center">
            DROP US A LINE
          </p>
        </li>
      </ul>
    </div>
  );
}
