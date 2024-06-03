import Image from "next/image";
import model from "@/assets/imgs/Intro/model2.png";
import signature from "@/assets/imgs/Intro/signature.png";

export default function Intro() {
  return (
    <div className="container2 flex items-center flex-col lg:flex-row p-[60px_15px] lg:p-[30px_15px]">
      <div className="lg:max-w-[50%] px-[15px] flex-grow">
        <Image src={model} alt="" className="w-full object-cover" />
      </div>
      <div className="lg:max-w-[50%] px-[15px] mt-[50px] lg:mt-0 flex-grow">
        <p className="text-xl sm:text-2xl text-[#4c4c4c] font-light leading-6 tracking-[0.72px] text-center md:text-left uppercase">
          IT Manager
        </p>
        <p className="font-poppins text-2xl sm:text-[40px] text-[#4c4c4c] font-bold leading-10 tracking-[1.2px] text-center md:text-left uppercase mt-2">
          Trần Nhiệm
        </p>
        {/* <p className="text-lg sm:text-[20px] text-[#4c4c4c] font-medium leading-[30px] italic mt-[45px] text-center md:text-left">
          To get started with SkyMax, please go over all of our plans to let our
          operators know which one works for you the best!
        </p> */}
        <p className="text-base text-[#808080] leading-6 font-light mt-[25px] text-justify">
          Sứ mệnh của chúng tôi là mang đến giai đoạn chuyển đổi số cho Trang
          Huy Logistic để thay đổi cách vận hành & quản trị doanh nghiệp. Với
          kinh nghiệm & năng lượng của tuổi trẻ chúng tôi tin sẽ chuyển đổi số
          thành công cho Trang Huy Logistic. Là người làm công nghệ tôi biết
          công việc toàn cầu hoá sẽ gặp rất nhiều khó khăn, trở ngại nhưng tôi
          lại có một niềm tin mãnh liệt về một tương lai tươi sáng dành cho
          TrangHuy Logistic. Dành cho những con người dám nghĩ dám làm, nói như
          ngôn ngữ của người làm công nghệ là “Cứ máu có lẽ là xong”. Vâng rồi
          sẽ xong ! Xong nhiệm vụ này rồi lại có nhiệm vụ khác lớn hơn, nhưng
          rồi tất cả cũng sẽ được hoàn thành...
        </p>
        <div className="w-full flex justify-end items-center sm:items-start flex-col-reverse sm:flex-row gap-5 mt-[50px]">
          {/* <a
            href="/services"
            className="w-[150px] h-[50px] bg-[#218392] border-[2px] border-solid border-[#218392] flex justify-center items-center hover:bg-[#fff] transition-all duration-300 [&>*]:hover:text-[#218392]"
          >
            <p className="text-xs text-[#fff] font-medium left-5 uppercase">
              Purchase
            </p>
          </a> */}
          <Image src={signature} alt="" />
          {/* <div>
            <p className="text-base text-[#4c4c4c] font-semibold text-center">Trần Nhiệm</p>
            <p className="text-base text-[#808080] mt-[5px] italic">IT Manager</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
