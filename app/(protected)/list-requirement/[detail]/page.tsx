"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import user1 from "@/assets/imgs/Teams/mem9.jpeg";
import EvaluateModal, {
  evaluateState,
} from "@/app/components/EvaluateModal/EvaluateModal";
import { usePathname } from "next/navigation";
import helpdeskService from "@/app/services/helpdesk.service";
import cardAva from "@/assets/imgs/Portal/card-ava.png";
import { cn } from "@/lib/utils";

const questionsList = [
  {
    id: 1,
    tag: "Mô tả",
    content: `Hi phòng CNTT!
  
  Máy tính của tôi bị lỗi WIN, nhờ anh/chị cài lại giúp
  
  Trân trọng`,
  },
  {
    id: 2,
    tag: "Giải pháp/Khắc phục",
    content: `WIN bị lỗi
  
      Giải pháp: cài lại win`,
  },
  {
    id: 3,
    tag: "Đánh giá của khách hàng",
    content: ``,
  },
];
const questionsList2 = [
  {
    id: 1,
    tag: "Gửi tin",
    contents: [
      {
        time: "08 tháng 06, 2024",
        comments: [
          {
            id: 101,
            avatar: "",
            username: "Lê Thị Minh",
            comment: "Giai đoạn đã thay đổi",
            status: "Đang thực hiện",
          },
          {
            id: 102,
            avatar: "",
            username: "Nguyễn Trần Nhiệm",
            comment: "Giai đoạn đã thay đổi",
            status: "Đang thực hiện",
          },
          {
            id: 103,
            avatar: "",
            username: "Administrator",
            comment: "",
            status: "Đã xử lý",
          },
        ],
      },
      {
        time: "06 tháng 06, 2024",
        comments: [
          {
            id: 201,
            avatar: "",
            username: "Lê Thị Minh",
            comment: "Giai đoạn đã thay đổi",
            status: "Đang thực hiện",
          },
          {
            id: 202,
            avatar: "",
            username: "Nguyễn Trần Nhiệm",
            comment: "Giai đoạn đã thay đổi",
            status: "Đang thực hiện",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    tag: "Ghi chú",
  },
  {
    id: 3,
    tag: "Hoạt động",
  },
];

export default function Process() {
  const pathname = usePathname();
  const code_ticket = pathname.split("/")[2];
  const [tabActive, setTabActive] = useState(1);
  const [tabActive2, setTabActive2] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [request, setRequest] = useState<any>({});
  const [rateInfo, setRateInfo] = useState<any>({});

  const getDataDetail = async () => {
    try {
      const { result } = await helpdeskService.getDetail({ code_ticket });
      if (result) {
        setRequest(result);
        const currentRate = evaluateState.find(
          (item) => item.id === result?.rate
        );
        setRateInfo(currentRate);
      }
    } catch (error) { }
  };
  useEffect(() => {
    getDataDetail();
  }, []);
  return (
    <div>
      <BannerCustom />
      <EvaluateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        code={code_ticket}
        refetch={getDataDetail}
      />
      <div className="container-app p-[180px_24px_220px]">
        <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
          {request?.status}
        </h2>
        <div className="mt-[30px]">
          <div>
            <p className="font-poppins text-[24px] text-[#0755d1] font-semibold text-center">
              {request?.name}
            </p>
            <p className="font-poppins text-base text-[#1d2024] font-medium mt-3 text-center">
              Mã yêu cầu:{" "}
              <span className="text-[#0755d1]">{request?.code_ticket}</span>
            </p>
          </div>
          <hr className="my-7" />
          <div className="flex gap-5 p-[30px_0_40px]">
            <div className="w-1/2 flex flex-col items-start">
              <div className="p-[15px_28px] bg-[#0755d1] rounded-[5px_5px_0_0]">
                <p className="font-poppins text-xs text-[#fff] font-semibold leading-5 tracking-[1px] uppercase">
                  Hoàn thành
                </p>
              </div>
              <div className="w-full flex-grow flex flex-col items-center p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <p className="font-poppins text-xl text-[#0755d1] font-semibold">
                  Kết quả xử lý
                </p>
                <ul className="flex flex-col gap-5 mt-10">
                  <li className="flex items-center">
                    <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                      Thời gian cam kết:
                    </p>
                    <span className="text-[#0755d1] font-semibold">
                      {request?.commitment_time} phút
                    </span>
                  </li>
                  <li className="flex items-center">
                    <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                      Thời lượng:
                    </p>{" "}
                    <span className="text-[#0755d1]"> {Math.round(request?.duration)}</span>
                  </li>
                  <li className="flex items-center">
                    <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                      Thời gian hoàn thành:
                    </p>{" "}
                    <span className="text-[#0755d1]">
                      {" "}
                      {Math.round(request?.date_done)}{" "}
                    </span>
                  </li>
                </ul>
                <button
                  onClick={() => setOpenModal(true)}
                  disabled={request?.customer_review}
                  className={cn("mt-16 btn-common btn-send !text-[15px]", {
                    "app-bg-disabled": request?.customer_review
                  })}
                >
                  Đánh giá
                </button>
              </div>
            </div>

            <div className="w-1/2">
              <div className="bg-[#fff]">
                <div className="">
                  <ul className="flex flex-col md:flex-row">
                    {questionsList2.map((tab) => {
                      return (
                        <li key={tab.id} className="">
                          <button
                            onClick={() => setTabActive2(tab.id)}
                            className={`${tabActive2 === tab.id
                              ? "bg-[#0755d1] text-[#fff] hover:opacity-90"
                              : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#0755d1]"
                              } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] font-poppins text-xs font-medium leading-5 tracking-[1px] uppercase`}
                          >
                            {tab.tag}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="h-[400px] bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] overflow-auto">
                    <ul className="mt-6 flex flex-col gap-6 mb-12">
                      {tabActive2 === 1 &&
                        request?.message_ids?.map((cmt: any, index: number) => {
                          return (
                            <div key={index}>
                              <div className="w-full h-[1px] my-[10px] bg-[#ccc] relative flex items-center justify-center">
                                <p className="absolute text-sm text-[#777] font-medium px-2 bg-[#fff]">
                                  {cmt?.date}
                                </p>
                              </div>

                              <li className="flex gap-3">
                                <div className="min-w-10 h-10 rounded overflow-hidden">
                                  <Image src={cmt?.image ? "data:image/svg+xml;base64," + cmt.image : cardAva}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="object-cover" />
                                </div>
                                <div>{cmt?.partner_id}</div>
                              </li>
                              <div className="text-slate-700 mt-3 text-sm">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: cmt.message,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[40px] w-full mx-auto">
          <div className="bg-[#fff]">
            <div className="">
              <ul className="flex flex-col md:flex-row">
                {questionsList.map((tab) => {
                  return (
                    <li key={tab.id} className="">
                      <button
                        onClick={() => setTabActive(tab.id)}
                        className={`${tabActive === tab.id
                          ? "bg-[#0755d1] text-[#fff] hover:opacity-90"
                          : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#0755d1]"
                          } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] font-poppins text-xs font-medium leading-5 tracking-[1px] uppercase`}
                      >
                        {tab.tag}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                {tabActive === 1 && (
                  <pre className="font-poppins text-sm text-[#1d2024]">
                    {request?.description}
                  </pre>
                )}
                {tabActive === 2 && (
                  <pre className="font-poppins text-sm text-[#1d2024]">
                    {request?.solution}
                  </pre>
                )}
                {tabActive === 3 && (
                  <div className="font-poppins text-sm text-[#1d2024] flex gap-2">
                    {/* <Image src={rateInfo?.icon} width={20} alt="" />
                    {request?.customer_review} */}
                    {
                      request?.customer_review && (<div className="bg-white p-6 rounded-lg shadow-lg w-full">
                        <div className="flex items-center">
                          <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 18.805A9.969 9.969 0 0112 16c2.386 0 4.574.835 6.293 2.24A8.953 8.953 0 0021 12c0-4.974-4.026-9-9-9S3 7.026 3 12a8.953 8.953 0 002.828 6.805z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <div className="ml-4">
                            <h2 className="text-lg font-semibold">{request?.employee_id?.name}</h2>
                            <div className="flex gap-2"> <Image src={rateInfo?.icon} width={20} alt="" /> <span>-</span>  <span className="text-gray-500 text-[12px]">{rateInfo?.value}</span></div>
                            <div className="flex items-center">

                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                          {request?.customer_review}
                        </p>
                        <p className="flex justify-end text-gray-500 text-[12px]">{request?.date_request}</p>
                      </div>)
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
