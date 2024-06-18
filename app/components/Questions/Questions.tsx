"use client";
import { useState } from "react";
import Image from "next/image";
import plus from "@/assets/svgs/plus.svg";
import minus from "@/assets/svgs/minus.svg";

const questionsList = [
  {
    id: 1,
    tag: "Câu hỏi thường gặp",
    questions: [
      {
        id: 101,
        title:
          "1. Phần mềm CRM là gì?",
        content:
          "Phần mềm CRM (Phần mềm quản trị khách hàng) là công cụ giúp doanh nghiệp lưu trữ và quản lý toàn bộ thông tin khách hàng; xây dựng các quy trình bán hàng bài bản & quản lý đội ngũ bán hàng",
      },
      {
        id: 102,
        title:
          "2. Việc ứng dụng CRM giúp ích gì cho doanh nghiệp?",
        content:
          "CRM giúp doanh nghiệp quản trị mối quan hệ khách hàng toàn diện, thấu hiểu khách hàng 360, tối ưu các quy trình bán hàng, quản lý đội ngũ sale. Nâng cao năng suất làm việc của đội ngũ, báo cáo phân tích hiệu quả kinh doanh để ra quyết định chính xác.",
      },
      {
        id: 103,
        title:
          "3. Dữ liệu khách hàng lưu trữ trên MISA AMIS CRM có đảm bảo tính bảo mật dữ liệu không?",
        content:
          "MISA AMIS CRM áp dụng tiêu chuẩn An ninh thông tin ISO 27000 và đã được các tổ chức có thẩm quyền đánh giá và cấp chứng chỉ của tổ chức quốc tế ISO. Đảm bảo thông tin của khách hàng và nội bộ công ty ở mức cao nhất trước các nguy cơ như bị phá hủy vì bất cứ lý do nào.",
      },
      {
        id: 104,
        title:
          "4. Khả năng kết nối của MISA AMIS CRM như nào?",
        content:
          "Khả năng kết nối API với nhiều hệ thống: Voice IP, Email Marketing: Mailchimp, Zetamail…",
      },
      {
        id: 105,
        title: "5. Phần mềm MISA AMIS CRM quản lý nhân viên kinh doanh đi thị trường bằng cách nào?",
        content:
          "Nhân viên kinh doanh dễ dàng lên lịch trình đi tuyến tối ưu tiết kiệm thời gian, nhà quản lý dễ dàng theo dõi tình hình công việc của cấp dưới. Tính năng quản lý đi tuyến có cả trên phiên bản website và mobile. Nhà quản lý sẽ nắm bắt được danh sách nhân viên với các trạng thái: đang hoạt động, vắng mặt, không hoạt động. Nhà quản lý dễ dàng theo dõi được vị trí chính xác của nhân viên trên bản đồ.",
      },
      {
        id: 106,
        title:
          "6. Giá phần mềm MISA AMIS CRM bao nhiêu?",
        content:`Giải pháp MISA AMIS CRM tính giá theo số lượng user sử dụng
Gói Standard: 80.000 đ /user/tháng
Gói Professtional: 100.000 đ/1 user/tháng
Gói Enterprise: 120.000 đ/1 user/tháng`,
      },
    ],
  },
  // {
  //   id: 2,
  //   tag: "Payment Method",
  //   questions: [
  //     {
  //       id: 201,
  //       title:
  //         "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 202,
  //       title:
  //         "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 203,
  //       title:
  //         "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 204,
  //       title:
  //         "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 205,
  //       title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 206,
  //       title:
  //         "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 207,
  //       title: "Anim magna. Amet ex. Laborum et. Sit amet dia carpem et?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 208,
  //       title:
  //         "Exercitation labore qui lorem and natus. Aliquid. Mollit rem dolorem so suscipit?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   tag: "System Solutions",
  //   questions: [
  //     {
  //       id: 301,
  //       title:
  //         "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 302,
  //       title:
  //         "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 303,
  //       title:
  //         "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 304,
  //       title:
  //         "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 305,
  //       title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 306,
  //       title:
  //         "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 307,
  //       title: "Anim magna. Amet ex. Laborum et. Sit amet dia carpem et?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   tag: "Technical Support",
  //   questions: [
  //     {
  //       id: 401,
  //       title:
  //         "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 402,
  //       title:
  //         "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 403,
  //       title:
  //         "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 404,
  //       title:
  //         "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 405,
  //       title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //     {
  //       id: 406,
  //       title:
  //         "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
  //       content:
  //         "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
  //     },
  //   ],
  // },
];

export default function Questions() {
  const [tabActive, setTabActive] = useState(1);
  const [quesActive, setQuesActive] = useState(
    questionsList[0].questions[0].id
  );

  return (
    <div className="bg-[#fff]">
      <div className="container2 p-[150px_15px]">
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
        <ul className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
          {questionsList[tabActive - 1].questions.map((ques) => {
            return (
              <li key={ques.id} className="mb-4">
                <button
                  onClick={() => {
                    if (quesActive === ques.id) {
                      setQuesActive(0);
                    } else {
                      setQuesActive(ques.id);
                    }
                  }}
                  className="flex gap-2 cursor-pointer py-[5px]"
                >
                  <div className="shrink-0 w-4 h-4 md:w-5 md:h-5 pt-1 md:pt-0">
                    {quesActive !== ques.id ? (
                      <Image src={plus} alt="" />
                    ) : (
                      <Image src={minus} alt="" />
                    )}
                  </div>
                  <p className="text-sm lg:text-base text-[#4c4c4c] font-medium tracking-[0.72px] text-left">
                    {ques.title}
                  </p>
                </button>
                <div
                  className={`${
                    quesActive === ques.id
                      ? "max-h-[150px] md:max-h-[72px] opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  } p-[0_28px] transition-all duration-300`}
                >
                  <p className="text-sm lg:text-base text-[#808080] font-light">
                    {ques.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
