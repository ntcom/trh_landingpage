import Image from "next/image";
import slide1 from "@/assets/imgs/slider/slide1-new.jpg";
import arrowSlide from "@/assets/imgs/slider/arrow-slide.png";

export default function Banner() {
  return (
    <div className="w-full h-[580px] md:h-[720px] xl:h-[1020px] relative">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image src={slide1} alt="" className="w-full h-full object-cover" />

        <div className="absolute px-[25px]">
          {/* <p className="text-[16px] md:text-[22px] mds:text-[28px] lg:text-[36px] xl:text-[40px] text-[#fff] font-light tracking-[2px] xsss:tracking-[4px] sm:tracking-[8px] mds:tracking-[10px] lg:tracking-[14px] xl:tracking-[18px] leading-10 text-center uppercase">
            Prepare for High Speed
          </p> */}
          <p className="font-poppins text-[32px] xsss:text-[36px] sm:text-[45px] md:text-[54px] lg:text-[60px] text-[#fff] font-bold leading-[42px] xsss:leading-[52px] sm:leading-[62px] md:leading-[72px] lg:leading-[82px] text-center uppercase mb-[30px]">
            QUẢN TRỊ DỊCH VỤ CÔNG NGHỆ THÔNG TIN
          </p>
          {/* <button className="flex justify-center items-center w-[290px] md:w-[340px] h-[50px] md:h-[60px] mx-auto border-[2px] border-solid border-[#fff] rounded-[5px] p-[22px_30px] hover:bg-[#fff] [&>*]:hover:text-[#1f1f1f] transition-all">
            <p className="font-roboto text-xs text-[#fff] font-bold tracking-[4px] uppercase whitespace-nowrap">
              Check our Internet Plans
            </p>
          </button> */}
        </div>

        <button className="block absolute bottom-0 translate-y-[1px]">
          <Image src={arrowSlide} alt="" />
        </button>
      </div>
    </div>
  );
}
