import Image from "next/image";
import React, { useState } from "react";
import comment from "@/assets/svgs/comment.svg";
import veryGood from "@/assets/svgs/verry-good.svg";
import good from "@/assets/svgs/good.svg";
import normal from "@/assets/svgs/normal.svg";
import bad from "@/assets/svgs/bad.svg";
import helpdeskTicketService from "@/app/services/helpdesk-ticket.service";
import helpdeskService from "@/app/services/helpdesk.service";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export const evaluateState = [
  {
    id: "1",
    icon: bad,
    value: "Tệ",
  },
  {
    id: "2",
    icon: normal,
    value: "Bình thường",
  },
  {
    id: "3",
    icon: good,
    value: "Tốt",
  },
  {
    id: "4",
    icon: veryGood,
    value: "Tuyệt vời",
  },
];

export default function EvaluateModal({
  openModal,
  setOpenModal,
  code,
  refetch,
}: any) {
  const [evaluate, setEvaluate] = useState("4");
  const [value, setValue] = useState("");
  const { toast } = useToast();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!value) return;

    try {
      const { result } = await helpdeskService.createRate({
        code_ticket: code,
        rate: evaluate,
        evaluate: value,
      });
      console.log("result:", result);
      if (result) {
        toast({
          title: "Thành công",
          description: result?.message || "Đánh giá thành công",
          variant: "success",
          action: <ToastAction altText="Done">Done</ToastAction>,
        });
        refetch();
        return;
      }
      toast({
        title: "Đánh giá thất bại",
        variant: "destructive",
        description: result?.message || "Vui lòng thử lại",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      });
    } catch (error) {
      toast({
        title: "Đánh giá thất bại",
        variant: "destructive",
        description: "Vui lòng thử lại",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      });
    } finally {
      setValue("");
      setEvaluate("4");
      setOpenModal(false);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${
        openModal
          ? "opacity-100 z-[999]"
          : "w-0 h-0 opacity-0 z-[-1x] overflow-hidden"
      } bg-[rgba(170,170,170,.4)] flex justify-center items-center transition-all duration-200`}
    >
      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-[#fff] rounded-2xl p-[0_0_40px] overflow-hidden"
      >
        <p className="p-4 bg-[#0755d1] font-poppins text-xl text-[#fff] text-center font-semibold">
          Đánh giá về dịch vụ của chúng tôi
        </p>

        <div className="px-8 mt-8">
          <div className="relative flex">
            <Image
              src={comment}
              alt=""
              className="absolute top-5 left-[24px] max-w-[16px] max-h-[16px]"
            />
            <textarea
              name=""
              id=""
              rows={3}
              className="common-textarea"
              placeholder="Nội dung đánh giá"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            ></textarea>
          </div>

          <ul className="mt-10 flex justify-center gap-7">
            {evaluateState.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setEvaluate(item.id)}
                  className={`${
                    evaluate === item.id ? "emoij emoij-active" : "emoij"
                  }`}
                >
                  <Image src={item.icon} alt="" />
                  <span className="absolute top-[125%] text-sm text-[#fdca47] font-medium whitespace-nowrap">
                    {evaluate === item.id && item.value}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-4 justify-center mt-14">
            <button className="btn-common btn-send" type="submit">
              Gửi đánh giá
            </button>
            <button
              onClick={() => {
                setOpenModal(false);
                setValue("");
                setEvaluate("4");
              }}
              className="btn-common btn-cancel"
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
