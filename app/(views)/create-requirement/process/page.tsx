"use client";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import React, { useState } from "react";
import user1 from '@/assets/imgs/Teams/mem9.jpeg'

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
    content: `Rất tốt`,
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

  return (
    <div>
      <BannerCustom />

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
          <hr className="my-5" />
          <div className="flex">
            <div className="w-1/2">
              <p className="font-poppins text-xl text-[#1d2024] font-semibold">
                Kết quả xử lý
              </p>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center">
                  <p className="w-[200px] font-poppins text-base text-[#1d2024] font-medium">
                    Thời gian cam kết:
                  </p>
                  <span className="text-[#0755d1] font-semibold">20 phút</span>
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
                            } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] font-poppins text-xs font-medium leading-5 tracking-[2.4px] uppercase`}
                          >
                            {tab.tag}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="h-[300px] bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] overflow-auto">
                    {/* {questionsList2[tabActive2 - 1].contents.map((item) => {
                        return (
                            <div key={item.id}>

                            </div>
                        )
                    })} */}
                    <div>
                      <div className="w-full h-[1px] bg-[#ccc] relative flex items-center justify-center">
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
                            <p className="font-poppins text-sm text-[#777]">Giai đoạn đã thay đổi</p>
                            <div>
                              <p className="font-poppins text-sm text-[#0754d1c9]">
                                Đang thực hiện{" "}
                                <span className="text-[#777] text-xs">(Giai đoạn)</span>
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
                            <p className="font-poppins text-sm text-[#777]">Giai đoạn đã thay đổi</p>
                            <div>
                              <p className="font-poppins text-sm text-[#0754d1c9]">
                                Mới{" "}
                                <span className="text-[#777] text-xs">(Giai đoạn)</span>
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
                        } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] text-xs font-medium leading-5 tracking-[2.4px] uppercase`}
                      >
                        {tab.tag}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <pre className="font-poppins text-sm text-[#1d2024]">
                  {questionsList[tabActive - 1].content}
                </pre>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center gap-4 mt-[50px]">
            <a href="/create-requirement/process" className="btn-common btn-send">
              <Image src={send} alt="" />
              Gửi đi
            </a>
            <button className="btn-common btn-success btn-refresh">
              <Image src={refresh} alt="" />
              Làm mới
            </button>
            <button className="btn-common btn-danger btn-cancel">
              <Image src={cancel} alt="" />
              Hủy bỏ
            </button>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
