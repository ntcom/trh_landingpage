import Image from "next/image";
import icon1 from "@/assets/imgs/Television/icon-1-1.png";
import icon2 from "@/assets/imgs/Television/icon-2-1.png";
import icon3 from "@/assets/imgs/Television/icon-3-1.png";
import icon4 from "@/assets/imgs/Television/icon-4-1.png";
import icon5 from "@/assets/imgs/Television/icon-5-1.png";
import icon6 from "@/assets/imgs/Television/icon-6-1.png";
import tele from "@/assets/imgs/Television/img.jpg";

export default function Television() {
  return (
    <div className="w-full bg-[#fff] p-[150px_15px_145px]">
      <div className="container2 flex flex-col items-center">
        <div className="mx-auto">
          <p className="font-poppins text-xl sm:text-2xl text-[#4c4c4c] leading-6 tracking-[4.8px] text-center">
            HỆ SINH THÁI
          </p>
          <p className="font-poppins text-[40px] sm:text-[60px] text-[#4c4c4c] font-bold leading-[68px] tracking-[3px] text-center mt-2">
            CÔNG NGHỆ THÔNG TIN
          </p>
          <p className="text-lg sm:text-xl text-[#808080] font-light leading-[30px] text-center m-[18px_0_24px]">
            Chúng tôi tự động hoá quy trình làm việc bằng các bộ công cụ hàng đầu
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[60px] items-start mt-8">
          <ul className="flex flex-col gap-[25px]">
            <li className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-right hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Tài liệu
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  Cập nhật thông tin kiến thức tài liệu nhanh chóng
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
                  Số hoá
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  Điều khiển và giám sát hạ tầng IT một cách tự động, chất lương
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
                  Lưu trữ
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  Lưu trữ đầy đủ các thông tin, an toàn và bảo mật dữ liệu
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
            <li className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">
              <div>
                <a
                  href="/"
                  className="block text-[23px] text-[#4c4c4c] leading-[30px] font-bold tracking-[0.69px] mb-[14px] text-center lg:text-right hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Giao việc
                </a>
                <p className="text-base text-[#808080] leading-6 font-light  text-center lg:text-right">
                  Phân chia công việc một cách hiệu quả. Theo dõi tiến độ công việc
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

          <div className="max-w-[350px] hidden lg:flex self-center rounded overflow-hidden shadow-[0_6px_20px_6px_#eee]">
            <Image src={tele} alt="" className="w-full object-contain" />
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
                  Thực hiện
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Tương tác phù hợp với nhu cầu cá nhân của khách hàng
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
                  Đề xuất
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Dịch vụ tương thích với tất cả các thiết bị hiển thị
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
                  Phê duyệt
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Phân quyền và điều phối phê duyệt dựa trên vai trò và quy trình
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
                  Luân chuyển
                </a>
                <p className="text-base text-[#808080] leading-6 font-light text-center lg:text-left">
                  Hỗ trợ và giải quyết sự cố kịp thời, đảm bảo đúng tiến độ
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
