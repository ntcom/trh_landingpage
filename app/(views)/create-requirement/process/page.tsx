"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import React, { useState } from "react";
import user1 from "@/assets/imgs/Teams/mem9.jpeg";
import EvaluateModal from "@/app/components/EvaluateModal/EvaluateModal";

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
        id: 101,
        avatar: "",
        username: "Lê Thị Minh",
        comment: "Giai đoạn đã thay đổi",
        status: "Đang thực hiện",
        time: "05/06/2024",
      },
      {
        id: 102,
        avatar: "",
        username: "Nguyễn Trần Nhiệm",
        comment: "Giai đoạn đã thay đổi",
        status: "Đang thực hiện",
        time: "05/06/2024",
      },
      {
        id: 103,
        avatar: "",
        username: "Administrator",
        comment: "",
        status: "Đã xử lý",
        time: "06/06/2024",
      },
    ],
  },
  {
    id: 2,
    tag: "Ghi chú",
    contents: `ádasds`,
  },
  {
    id: 3,
    tag: "Hoạt động",
    contents: `ádasda`,
  },
];

export default function Process() {
  const [tabActive, setTabActive] = useState(1);
  const [tabActive2, setTabActive2] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <BannerCustom />
      <EvaluateModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="container-app p-[180px_24px_220px]">
        <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
          Chờ xử lý
        </h2>
        <div className="mt-[30px]">
          <div>
            <p className="font-poppins text-[24px] text-[#0755d1] font-semibold text-center">
              Cấp máy cho nhân viên mới
            </p>
            <p className="font-poppins text-base text-[#1d2024] font-medium mt-3 text-center">
              Mã yêu cầu: <span className="text-[#0755d1]">YC090909</span>
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
                      20 phút
                    </span>
                  </li>
                  <li className="flex items-center">
                    <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                      Thời lượng:
                    </p>{" "}
                    <span className="text-[#0755d1]">00:00</span>
                  </li>
                  <li className="flex items-center">
                    <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                      Thời gian hoàn thành:
                    </p>{" "}
                    <span className="text-[#0755d1]">00:00</span>
                  </li>
                </ul>
                <button
                  onClick={() => setOpenModal(true)}
                  className="mt-16 btn-common btn-send !text-[15px]"
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
                            className={`${
                              tabActive2 === tab.id
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
                    {/* {questionsList2[tabActive2 - 1].contents.map((item) => {
                        return (
                            <div key={item.id}>

                            </div>
                        )
                    })} */}
                    <div>
                      <div className="w-full h-[1px] my-[10px] bg-[#ccc] relative flex items-center justify-center">
                        <p className="absolute text-sm text-[#777] font-medium px-2 bg-[#fff]">
                          05 tháng 06, 2024
                        </p>
                      </div>

                      <ul className="mt-6 flex flex-col gap-6">
                        <li className="flex gap-3">
                          <div className="w-10 h-10 rounded overflow-hidden">
                            <Image src={user1} alt="" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <p className="font-poppins text-[15px] text-[#1d2024] font-semibold">
                                Lê Thị Minh
                              </p>
                              <p className="font-poppins text-sm text-[#1d2024]">
                                -
                              </p>
                              <p className="font-poppins text-sm text-[#1d2024]">
                                1 ngày trước
                              </p>
                            </div>
                            <p className="font-poppins text-sm text-[#777]">
                              Giai đoạn đã thay đổi
                            </p>
                            <div>
                              <p className="font-poppins text-sm text-[#1e90ffbf]">
                                <span className="text-base font-bold leading-5">
                                  •&ensp;
                                </span>
                                Đang thực hiện{" "}
                                <span className="text-[#777] text-xs">
                                  (Giai đoạn)
                                </span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-10 h-10 rounded overflow-hidden">
                            <Image src={user1} alt="" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <p className="font-poppins text-[15px] text-[#1d2024] font-semibold">
                                Lê Thị Minh
                              </p>
                              <p className="font-poppins text-sm text-[#1d2024]">
                                -
                              </p>
                              <p className="font-poppins text-sm text-[#1d2024]">
                                1 ngày trước
                              </p>
                            </div>
                            <p className="font-poppins text-sm text-[#777]">
                              Giai đoạn đã thay đổi
                            </p>
                            <div>
                              <p className="font-poppins text-sm text-[#1e90ffbf]">
                                <span className="text-base font-bold leading-5">
                                  •&ensp;
                                </span>
                                Mới{" "}
                                <span className="text-[#777] text-xs">
                                  (Giai đoạn)
                                </span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
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
                        className={`${
                          tabActive === tab.id
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
                {tabActive === 3 ? (
                  <div>
                    <p>Tốt</p>
                  </div>
                ) : (
                  <pre className="font-poppins text-sm text-[#1d2024]">
                    {questionsList[tabActive - 1].content}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
