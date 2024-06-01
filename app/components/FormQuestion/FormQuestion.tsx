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
          Ask Any Question
        </p>
        <form action="" className="flex flex-col gap-5 mt-[30px]">
          <div className="flex flex-col mds:flex-row gap-5">
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image src={user} alt="" className="max-w-[16px] max-h-[16px]"/>
              </div>
              <input
                type="text"
                className="question-input"
                placeholder="Full name"
                required
              />
            </div>
            <div className="relative w-full flex items-center">
              <div className="absolute left-[28px] w-[16px] flex justify-center">
                <Image src={mail} alt="" className="max-w-[16px] max-h-[16px]"/>
              </div>
              <input
                type="text"
                className="question-input"
                placeholder="E-mail"
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
                className="question-input"
                placeholder="Phone number"
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
                className="question-input"
                placeholder="Your topic"
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
              className="question-textarea"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <div className="self-start bg-[#218392] flex justify-center items-center p-[2px] mt-6">
            <button className="p-[18px_15px] bg-transparent rounded text-xs text-[#fff] font-medium leading-5 tracking-[2.4px] hover:bg-[#fff] hover:text-[#171b1f] transition-all">
              Ask a question
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
