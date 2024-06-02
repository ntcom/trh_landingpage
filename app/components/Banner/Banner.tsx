import Image from "next/image";
import slide1 from "@/assets/imgs/slider/slide1.jpg";
import arrowSlide from "@/assets/imgs/slider/arrow-slide.png";

export default function Banner() {
  return (
    <div className="w-full h-[580px] md:h-[720px] xl:h-[1020px] relative">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image src={slide1} alt="" className="w-full h-full object-cover" />

        <div className="absolute mt-[50px] sm:mt-[80px] mds:mt-[150px] px-[25px]">
          <p className="text-[16px] md:text-[22px] mds:text-[28px] lg:text-[36px] xl:text-[40px] text-[#fff] font-light tracking-[2px] xsss:tracking-[4px] sm:tracking-[8px] mds:tracking-[10px] lg:tracking-[14px] xl:tracking-[18px] leading-10 text-center uppercase">
            Prepare for High Speed
          </p>
          <p className="text-[54px] xsss:text-[80px] sm:text-[100px] md:text-[150px] mds:text-[180px] lg:text-[200px] xl:text-[240px] text-[#fff] font-bold leading-[52px] xsss:leading-[80px] sm:leading-[100px] md:leading-[150px] mds:leading-[180px] lg:leading-[200px] xl:leading-[240px] text-center tracking-[0px] lg:tracking-[-4px] xl:tracking-[-10px] uppercase mb-[30px]">
            Internet
          </p>
          <button className="flex justify-center items-center w-[290px] md:w-[340px] h-[50px] md:h-[60px] mx-auto border-[2px] border-solid border-[#fff] rounded-[5px] p-[22px_30px] hover:bg-[#fff] [&>*]:hover:text-[#1f1f1f] transition-all">
            <p className="font-roboto text-xs text-[#fff] font-bold tracking-[4px] uppercase whitespace-nowrap">
              Check our Internet Plans
            </p>
          </button>
        </div>

        <button className="block absolute bottom-0 translate-y-[1px]">
            <Image src={arrowSlide} alt=""/>
        </button>
      </div>
    </div>
  )
}
