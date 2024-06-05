"use client";
import React, { useState } from "react";
import BannerCustom from "@/app/components/BannerCustom";
// import SvgMail from "@/assets/svgs/SvgMail";
import SvgPalette from "@/assets/svgs/SvgPalette";
// import SvgPhone from "@/assets/svgs/SvgPhone";
// import SvgUser from "@/assets/svgs/SvgUser";
// import Input from "@/core/components/Input";
import Select from "@/core/components/Select";
import Image from "next/image";
// import plus from "@/assets/svgs/plus.svg";
// import minus from "@/assets/svgs/minus.svg";
import send from "@/assets/svgs/send.svg";
import refresh from "@/assets/svgs/refresh.svg";
import cancel from "@/assets/svgs/cancel.svg";

import user from "@/assets/svgs/user.svg";
// import mail from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import attach from "@/assets/svgs/attach.svg";
import note from "@/assets/svgs/note.svg";
import SelectCustoms from "@/app/components/SelectCustoms/SelectCustoms";
import typeService from "@/assets/svgs/typeof-service.svg";

const options = [
  { title: "-- Chọn một chủ đề --", value: 0 },
  { title: "VPTĐ / Báo tiếp nhận nhân sự mới", value: 1 },
  { title: "VPTĐ / Đặt lịch họp", value: 'datphong' },
  { title: "VPTĐ / Đặt phòng Residence 265", value: 3 },
  { title: "VPTĐ / Yêu cầu về form Báo Cáo Tuần", value: 4 },
  { title: "Ban thanh tra / Đề nghị xem lại Camera", value: 5 },
  { title: "VPTĐ / Báo hỗ trợ liên quan đến Tài Sản", value: 6 },
  { title: "CNTT./ Báo hỗ trợ dịch vụ CNTT", value: 'dvcntt' },
  { title: "CNTT./ Yêu cầu về Tài Khoản người dùng", value: 8 },
  { title: "CNTT./ Yêu cầu kết nối hệ thông, ứng đội", value: 9 },
  { title: "CNTT./ Đăng ký mượn thiết bị CNTT", value: 10 },
  { title: "CNTT./ Đăng quảng cáo WIFI Marketing", value: 11 },
  { title: "CNTT./ Đăng ký tài khoản Polycom", value: 12 },
  { title: "CNTT./ Đăng ký tạo Dự án trên Hệ thống", value: 13 },
  { title: "CNTT./ Yêu cầu về Thể CBNV", value: 14 },
  { title: "Ban Nhân sự / Báo các sự việc bất thường", value: 15 },
  { title: "Ban Thanh tra / Báo các sự việc bất thường", value: 16 },
  { title: "BQL Toà nhà / Đăng quảng cáo tại Toà nhà 265", value: 17 },
  { title: "BQL / Báo hỏng hóc cơ sở vật chất", value: 18 },
  { title: "Đóng góp ý kiến cải thiện", value: 19 },
];
const questionsList = [
  {
    id: 1,
    tag: "User Interface",
    questions: [
      {
        id: 101,
        title: "Ex ratione and consectetur laborum suscipit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.mi.",
      },
      {
        id: 102,
        title: "Molestiae suscipit Exercitation si or laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam.",
      },
      {
        id: 103,
        title: "Veniam magna for ut or adipisci veritatis dicta?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat.",
      },
      {
        id: 104,
        title: "Culpa aspernatur nisi adipisicing yet laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
    ],
  },
  {
    id: 2,
    tag: "Payment Method",
    questions: [
      {
        id: 201,
        title: "Ex ratione and consectetur laborum suscipit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.iae, yet consequatur. Quisque ligula massa.",
      },
      {
        id: 202,
        title: "Molestiae suscipit ipsum non eos so autem dolores?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat, luctus a mi.",
      },
      {
        id: 203,
        title: "Veniam magna for ut or adipisci veritatis?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat.",
      },
    ],
  },
];
const locations = [
  { title: "-- Lựa chọn --", value: "" },
  { title: "Trung tâm hội nghị Quốc gia", value: "tthnqg" },
  { title: "Phòng họp 1", value: "ph1" },
  { title: "Phòng họp 2", value: "ph2" },
];

const processingDepartment = {
  channel: [
    {
      title: "Kênh 1",
      value: "kenh1",
    },
    {
      title: "Kênh 2",
      value: "kenh2",
    },
    {
      title: "Kênh 3",
      value: "kenh3",
    },
  ],
  typeOfService: [
    {
      title: "Sửa chữa thiết bị",
      value: "suachuathietbi",
    },
    {
      title: "Cài đặt phần mềm",
      value: "caidatphanmem",
    },
    {
      title: "Cấp thiết bị",
      value: "capthietbi",
    },
  ],
  childService: [
    {
      title: "Sửa chữa laptop",
      value: "sualaptop",
    },
    {
      title: "Sửa máy in",
      value: "suamayin",
    },
    {
      title: "Cấp màn hình rời",
      value: "capmanhinh",
    },
  ],
  detailService: [
    {
      title: "Sửa chữa laptop",
      value: "sualaptop",
    },
    {
      title: "Sửa máy in",
      value: "suamayin",
    },
    {
      title: "Cấp màn hình rời",
      value: "capmanhinh",
    },
  ],
  receivingDepartment: [
    {
      title: "Bộ phận hạ tầng",
      value: "infrastructure",
    },
    {
      title: "Bộ phận lập trình",
      value: "development",
    },
  ],
  supportTeam: [
    {
      title: "Team helpdesk",
      value: "helpdesk",
    },
    {
      title: "Team Frontend",
      value: "frontend",
    },
    {
      title: "Team Backend",
      value: "backend",
    },
  ],
  handler: [
    {
      title: "Đức Hoằng",
      value: "handler1",
    },
    {
      title: "Văn Thắng",
      value: "handler2",
    },
    {
      title: "Nguyễn Quân",
      value: "handler3",
    },
  ],
};

function CreateRequirement() {
  const [tabActive, setTabActive] = useState(1);
  const [quesActive, setQuesActive] = useState(
    questionsList[0].questions[0].id
  );
  const [pickOption, setPickOption] = useState("");
  const [locationOption, setLocationOption] = useState("");
  const breadcrumbs = [
    {
      title: "Home page",
      path: "/",
    },
    {
      title: "Create requirement",
      path: "/create-requirement",
    },
  ];

  const [iValue, setIValue] = useState("");

  return (
    <div className="mb-20">
      <BannerCustom pageName="Create Requirement" breadcrumbs={breadcrumbs} />
      <div className="container-app p-[120px_24px]">
        <h2 className="bg-secondary heading px-3 py-1">Tạo yêu cầu mới</h2>
        <div className="w-1/3 flex m-[30px_0_20px]">
          <SelectCustoms
            options={options}
            iValue={iValue}
            setIValue={setIValue}
            icon={attach}
            placeholder="Chọn một chủ đề"
            setPickOption={setPickOption}
          />
        </div>
        {/* <h3 className="text-2xl">Thông tin liên lạc</h3> */}
        <hr className="divide"></hr>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
        {/* <div className="bg-[#fff]">
            <div className="">
              <ul className="flex flex-col md:flex-row">
                {questionsList.map((tab) => {
                  return (
                    <li key={tab.id} className="">
                      <button
                        onClick={() => setTabActive(tab.id)}
                        className={`${
                          tabActive === tab.id
                            ? "bg-[#218392] text-[#fff] hover:opacity-90"
                            : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#218392]"
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
          </div> */}
        <form className="mt-[50px]">
          {/* <div className="flex  mb-4">
              <Input
                id="email"
                icon={SvgMail}
                type="text"
                className="input-app"
                placeholder="E-mail"
              />
            </div> */}
          {/* Họ tên */}
          {/* <div className="flex  mb-4">
              <Input
                id="fullname"
                type="text"
                icon={SvgUser}
                className="input-app"
                placeholder="Họ tên"
              />
            </div> */}
          {/* Số điện thoại */}
          {/* <div className="flex mb-4">
              <div className="flex w-full gap-6">
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app flex-1"
                  placeholder="Số điện thoại"
                />
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app"
                  placeholder="Số máy lẻ"
                />
              </div>
            </div>
            <hr className="divide"></hr> */}
          {/* Chủ đề */}
          {/* <div className="flex mb-4">
              <Select option={options} icon={SvgPalette} setPickOption={setPickOption}/>
            </div> */}

          {pickOption === "datphong" && (
            <form action="" className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="flex items-center gap-6">
                <p className="font-poppins text-lg text-[#4c4c4c] font-medium whitespace-nowrap">
                  Địa điểm tổ chức <span className="text-[#E72929]">*</span>
                </p>
                <div className="flex">
                  <Select
                    option={locations}
                    icon={SvgPalette}
                    setPickOption={setLocationOption}
                  />
                </div>
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={user}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Người chủ trì"
                  required
                />
              </div>
              <div className="flex flex-col mds:flex-row gap-5">
                <div className="relative w-full flex items-center">
                  <div className="absolute left-[28px] w-[16px] flex justify-center">
                    <Image
                      src={phone}
                      alt=""
                      className="max-w-[16px] max-h-[16px]"
                    />
                  </div>
                  <input
                    type="text"
                    className="common-input"
                    placeholder="Số người tham gia"
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
                    placeholder="Thời gian"
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
                  placeholder="Nội dung cuộc họp"
                  required
                ></textarea>
              </div>
              <div className="flex items-center gap-6">
                <p className="font-poppins text-lg text-[#4c4c4c] font-medium whitespace-nowrap">
                  Đề nghị hỗ trợ
                </p>
                <div className="flex">
                  <Select
                    option={locations}
                    icon={SvgPalette}
                    setPickOption={setLocationOption}
                  />
                </div>
              </div>
            </form>
          )}

          {pickOption === "dvcntt" && (
            <form action="" className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="w-full flex items-center gap-6">
                <div className="w-[calc(50%-12px)] flex">
                  <SelectCustoms
                    options={processingDepartment.channel}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={attach}
                    placeholder="Kênh"
                    setPickOption={setPickOption}
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-6">
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-6">
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-6">
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
                <div className="w-1/2 flex">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setPickOption}
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="font-poppins text-lg text-[#4c4c4c] font-medium whitespace-nowrap">
                  Đề nghị hỗ trợ
                </p>
                <div className="flex">
                  <Select
                    option={locations}
                    icon={SvgPalette}
                    setPickOption={setLocationOption}
                  />
                </div>
              </div>
            </form>
          )}

          <div className="flex justify-center gap-2">
            <button className="btn-common btn-app">
              <Image src={send} alt="" />
              Gửi đi
            </button>
            <button className="btn-common btn-success btn-refresh">
              <Image src={refresh} alt="" />
              Làm mới
            </button>
            <button className="btn-common btn-danger btn-cancel">
              <Image src={cancel} alt="" />
              Hủy bỏ
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CreateRequirement;
