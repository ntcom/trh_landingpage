import Image from "next/image";
import user from "@/assets/svgs/user.svg";
import mail from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import attach from "@/assets/svgs/attach.svg";
import note from "@/assets/svgs/note.svg";

export default function FormQuestion() {
  return (
    <div className="bg-[#fff]">
      <div className="container2 p-[150px_15px_140px]">
        <p className="text-2xl text-[#4c4c4c] font-bold leading-6 tracking-[0.72px]">
          Gửi câu hỏi
        </p>
        <form action="" className="flex flex-col gap-5 mt-[30px]">
          <div className="flex flex-col mds:flex-row gap-5">
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image src={user} alt="" className="max-w-[16px] max-h-[16px]"/>
              </div>
              <input
                type="text"
                className="common-input"
                placeholder="Họ và tên"
                required
              />
            </div>
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image src={mail} alt="" className="max-w-[16px] max-h-[16px]"/>
              </div>
              <input
                type="text"
                className="common-input"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mds:flex-row gap-5">
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image src={phone} alt="" className="max-w-[16px] max-h-[16px]" />
              </div>
              <input
                type="text"
                className="common-input"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image
                  src={attach}
                  alt=""
                  className="max-w-[16px] max-h-[16px] -rotate-[25deg]"
                />
              </div>
              <input
                type="text"
                className="common-input"
                placeholder="Đính kèm"
              />
            </div>
          </div>

          <div className="relative flex">
            <Image
              src={note}
              alt=""
              className="absolute top-5 left-[28px] max-w-[16px] max-h-[16px]"
            />
            <textarea
              name=""
              id=""
              className="common-textarea"
              placeholder="Nội dung câu hỏi"
              required
            ></textarea>
          </div>

          <div className="self-start bg-[#0755d1] flex justify-center items-center p-[2px] mt-6">
            <button className="font-poppins p-[15px] bg-transparent rounded text-xs text-[#fff] font-semibold leading-5 tracking-[2px] hover:bg-[#fff] hover:text-[#171b1f] transition-all uppercase">
              Gửi câu hỏi!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
