import Image from "next/image";
import model from "@/assets/imgs/Intro/model1.png";
import signature from "@/assets/imgs/Intro/signature.png";

export default function Intro() {
  return (
    <div className="container2 flex items-center flex-col lg:flex-row p-[60px_15px] lg:p-[30px_15px_0]">
      <div className="lg:max-w-[50%] px-[15px] flex-grow">
        <Image src={model} alt="" className="w-full object-cover"/>
      </div>
      <div className="lg:max-w-[50%] px-[15px] mt-[50px] lg:mt-[-50px] flex-grow">
        <p className="text-xl sm:text-2xl text-[#4c4c4c] font-light leading-6 tracking-[0.72px] text-center md:text-left uppercase">
          WE ARE
        </p>
        <p className="text-2xl sm:text-[40px] text-[#4c4c4c] font-bold leading-10 tracking-[1.2px] text-center md:text-left">
          #1 internet service provider company in Country
        </p>
        <p className="text-lg sm:text-[20px] text-[#4c4c4c] font-medium leading-[30px] italic mt-[45px] text-center md:text-left">
          To get started with SkyMax, please go over all of our plans to let our
          operators know which one works for you the best!
        </p>
        <p className="text-base text-[#808080] leading-6 font-light mt-[25px] text-justify">
          We guarantee high-quality customer support service with high-speed
          satellite connection all over the world. Enjoy great family nights and
          loud friends parties at your place! SkyMax provides excellent
          entertainment., consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
        <div className="w-full flex justify-between items-center sm:items-start flex-col-reverse sm:flex-row gap-5 mt-[50px]">
          <a
            href="/services"
            className="w-[150px] h-[50px] bg-[#218392] border-[2px] border-solid border-[#218392] flex justify-center items-center hover:bg-[#fff] transition-all duration-300 [&>*]:hover:text-[#218392]"
          >
            <p className="text-xs text-[#fff] font-medium left-5 uppercase">
              Purchase
            </p>
          </a>
          <Image src={signature} alt=""/>
        </div>
      </div>
    </div>
  )
}
