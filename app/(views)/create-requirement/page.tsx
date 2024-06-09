"use client";
import React, { useState } from "react";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import send from "@/assets/svgs/send.svg";
import refresh from "@/assets/svgs/refresh.svg";
import cancel from "@/assets/svgs/cancel.svg";
import channel from "@/assets/svgs/channel.svg";
import attach from "@/assets/svgs/attach.svg";
import note from "@/assets/svgs/note.svg";
import SelectCustom from "@/app/components/SelectCustom/SelectCustom";
import typeService from "@/assets/svgs/typeof-service.svg";
import request from "@/assets/svgs/request.svg";
import location from "@/assets/svgs/location.svg";
import host from "@/assets/svgs/host.svg";
import quantity from "@/assets/svgs/quantity.svg";
import quantity2 from "@/assets/svgs/quantity2.svg";
import time from "@/assets/svgs/time.svg";
import childService from "@/assets/svgs/childService.svg";
import detailService from "@/assets/svgs/detailService.svg";
import receivingDepartment from "@/assets/svgs/receiving-department.svg";
import suportTeam from "@/assets/svgs/suportTeam.svg";
import suporter from "@/assets/svgs/suporter.svg";
import tagName from "@/assets/svgs/tag-name.svg";
import requestz from "@/assets/svgs/request.svg";
import InputCustom from "@/app/components/InputCustom/InputCustom";

const options = [
  { title: "CNTT / Đặt lịch họp", value: "datphonghop" },
  { title: "CNTT / Đặt văn phòng phẩm", value: "datvpp" },
  { title: "CNTT / Báo hỗ trợ dịch vụ CNTT", value: "dvcntt" },
];
const locations = [
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
  const [pickOption, setPickOption] = useState("");
  const [paramOption, setParamOption] = useState("");
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
      <div className="container-app p-[180px_24px_220px]">
        <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
          Tạo yêu cầu mới
        </h2>
        <div className="w-full max-w-[700px] mx-auto">
          <div className="w-full flex m-[50px_0_100px]">
            <SelectCustom
              options={options}
              iValue={iValue}
              setIValue={setIValue}
              icon={request}
              placeholder="Chọn một chủ đề"
              setPickOption={setPickOption}
            />
          </div>
        </div>
        <hr className="divide"></hr>
        <form action={""} className="mt-[50px] w-full max-w-[700px] mx-auto ">
          {pickOption === "datphonghop" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="flex">
                <SelectCustom
                  options={locations}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={location}
                  placeholder="Vị trí phòng họp"
                  setPickOption={setParamOption}
                />
              </div>
              <InputCustom
                type={"date"}
                placeholder={"Bắt đầu"}
                setInputValue={setIValue}
                icon={time}
              />
              <InputCustom
                type={"date"}
                placeholder={"Kết thúc"}
                setInputValue={setIValue}
                icon={time}
              />
              <InputCustom
                type={"number"}
                placeholder={"Người tham gia"}
                setInputValue={setIValue}
                icon={quantity}
              />
              <InputCustom
                type={"text"}
                placeholder={"Người chủ trì"}
                setInputValue={setIValue}
                icon={host}
              />
              <InputCustom
                type={"text"}
                placeholder={"Yêu cầu thêm"}
                setInputValue={setIValue}
                icon={requestz}
              />
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
              <InputCustom
                type={"file"}
                placeholder={"Đính kèm tài liệu, văn bản"}
                setInputValue={setIValue}
                icon={attach}
              />
            </div>
          ) : pickOption === "datvpp" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <InputCustom
                type={"text"}
                placeholder={"Tên sản phẩm"}
                setInputValue={setIValue}
                icon={tagName}
              />
              <InputCustom
                type={"number"}
                placeholder={"Số lượng"}
                setInputValue={setIValue}
                icon={quantity2}
              />
              <SelectCustom
                options={processingDepartment.typeOfService}
                iValue={iValue}
                setIValue={setIValue}
                icon={receivingDepartment}
                placeholder="Bộ phận tiếp nhận"
                setPickOption={setParamOption}
              />
              <SelectCustom
                options={processingDepartment.typeOfService}
                iValue={iValue}
                setIValue={setIValue}
                icon={suporter}
                placeholder="Người xử lý"
                setPickOption={setParamOption}
              />
              <InputCustom
                type={"file"}
                placeholder={"Đính kèm tài liệu, văn bản"}
                setInputValue={setIValue}
                icon={attach}
              />
            </div>
          ) : pickOption === "dvcntt" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="w-full flex items-center gap-6">
                <div className="w-full flex">
                  <SelectCustom
                    options={processingDepartment.channel}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={channel}
                    placeholder="Kênh"
                    setPickOption={setParamOption}
                  />
                </div>
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={typeService}
                  placeholder="Loại dịch vụ"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={childService}
                  placeholder="Dịch vụ con"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={detailService}
                  placeholder="Dịch vụ chi tiết"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={receivingDepartment}
                  placeholder="Bộ phận tiếp nhận"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={suportTeam}
                  placeholder="Đội ngũ hỗ trợ"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustom
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={suporter}
                  placeholder="Người xử lý"
                  setPickOption={setParamOption}
                />
              </div>
              <InputCustom
                type={"file"}
                placeholder={"Đính kèm tài liệu, văn bản"}
                setInputValue={setIValue}
                icon={attach}
              />
            </div>
          ) : (
            <div className="h-[100px]"></div>
          )}

          <div className="flex justify-center gap-4 mt-[50px]">
            <a
              href="/create-requirement/process"
              className="btn-common btn-send"
            >
              <Image src={send} alt="" />
              Gửi đi
            </a>
            <button className="btn-common btn-success btn-refresh">
              <Image src={refresh} alt="" />
              Làm mới
            </button>
            <a href="/" className="btn-common btn-danger btn-cancel">
              <Image src={cancel} alt="" />
              Hủy bỏ
            </a>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CreateRequirement;
