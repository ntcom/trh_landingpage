import Image from "next/image";
import icon1 from "@/assets/imgs/Television/icon-1-1.png";
import icon2 from "@/assets/imgs/Television/icon-2-1.png";
import icon3 from "@/assets/imgs/Television/icon-3-1.png";
import icon4 from "@/assets/imgs/Television/icon-4-1.png";
import icon5 from "@/assets/imgs/Television/icon-5-1.png";
import icon6 from "@/assets/imgs/Television/icon-6-1.png";
import tele from "@/assets/imgs/Television/television.png";

export default function Television() {
  return (
    <div className="w-full bg-[#fff] p-[150px_15px_145px]">
      <div className="container2 flex flex-col items-center">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xl sm:text-2xl text-[#4c4c4c] font-light leading-6 tracking-[4.8px] text-center">
            4K RESOLUTION
          </p>
          <p className="text-[40px] sm:text-[60px] text-[#4c4c4c] font-bold leading-[66px] tracking-[12px] text-center">
            TELEVISION
          </p>
          <p className="text-lg sm:text-xl text-[#808080] font-light leading-[30px] text-center m-[18px_0_24px]">
            Watch your favorite channels on various types of devices: TVs,
            computers, smartphones and tablets
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          <ul className="flex flex-col gap-[25px]">
            <li className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-right hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Integration
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  IPTV is easily integrated with other IP-based services.
                </p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-right hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Quality
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  The quality and stable work is surely going to amaze you
                </p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-right hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Interaction
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  Consumer is able to interact with the service provider.
                </p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
          </ul>

          <div className="max-w-[350px] hidden lg:flex self-center">
            <Image
                  src={tele}
                  alt=""
                  className="w-full object-contain"
                />
          </div>

          <ul className="flex flex-col gap-[25px]">
            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon4}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-left hover:scale-105 hover:translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Guidance
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  It’s fully interactive to personal needs of customer.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon5}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-left hover:scale-105 hover:translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Compatibility
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Services is compatible with all display devices.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="shrink-0 w-[50px] h-[50px]">
                <Image
                  src={icon6}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-left hover:scale-105 hover:translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Streaming
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Consumer is able to interact with the service provider.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
