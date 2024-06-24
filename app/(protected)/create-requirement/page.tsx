"use client";
import React, { useEffect, useMemo, useState } from "react";
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
import ControllerSelect from "@/core/components/Form/ControllerSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  yupEmpty,
  yupMeet,
  yupOrder,
  yupSuportReport,
} from "./utils/validator";
import ControllerInput from "@/core/components/Form/ControllerInput";
import helpdeskService from "@/app/services/helpdesk.service";
import DatePickerInput from "@/core/components/DatePickerInput/DatePickerInput";
import ControllerDatePicker from "@/core/components/Form/ControllerDatePicker";
import helpdeskTicketService from "@/app/services/helpdesk-ticket.service";

const options = [
  { title: "CNTT / Đặt lịch họp", value: "MEET" },
  // { title: "CNTT / Đặt văn phòng phẩm", value: "ORDER_STATIONERY" },
  { title: "CNTT / Báo hỗ trợ dịch vụ CNTT", value: "SUPPORT_REPORT" },
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
  const [pickOption, setPickOption] = useState<
    "MEET" | "ORDER_STATIONERY" | "SUPPORT_REPORT" | "EMPTY"
  >("EMPTY");

  const currentYup = useMemo(() => {
    if (pickOption === "ORDER_STATIONERY") {
      return yupOrder;
    } else if (pickOption === "SUPPORT_REPORT") {
      return yupSuportReport;
    } else if (pickOption === "MEET") {
      return yupMeet;
    }
    return yupEmpty;
  }, [pickOption]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(currentYup),
  });
  console.log("🚀 ~ errors:", errors);
  const onSubmit = async (value: any) => {
    try {
      console.log(value);
      if (pickOption === "SUPPORT_REPORT") {
        const newData = { ...value, channel_source: "" };
        await helpdeskTicketService.createHelpdeskTicket(newData);
      }
    } catch (error) {}
  };
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

  const [theme, setTheme] = useState("");
  const [helpdeskOption, setHelpdeskOption] = useState({
    channel: [],
    helpdesk_team_ids: [],
    hr_department_ids: [],
    service_child_ids: [],
    service_detail_ids: [],
    type_service_ids: [],
    user_ids: [],
  });
  const getData = async () => {
    try {
      const { result } = await helpdeskService.getHelpDesk();
      
      setHelpdeskOption(result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

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
              iValue={pickOption}
              setIValue={setPickOption}
              icon={request}
              placeholder="Chọn một chủ đề"
              setPickOption={setPickOption}
            />
          </div>
        </div>
        <hr className="divide"></hr>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[50px] w-full max-w-[700px] mx-auto "
        >
          {pickOption === "MEET" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="relative flex">
                <ControllerInput
                  control={control}
                  name="name"
                  className="w-full"
                  placeholder="Nội dung cuộc họp"
                  icon={note}
                />
              </div>
              <div className="flex">
                <ControllerSelect
                  options={locations}
                  icon={location}
                  control={control}
                  name="location"
                  pathLabel="name"
                  pathValue="id"
                  placeholder="Vị trí phòng họp"
                />
              </div>

              <ControllerDatePicker
                placeholder={"Thời gian bắt đầu"}
                control={control}
                name="date_start"
              />

              <ControllerDatePicker
                placeholder={"Thời gian kết thúc"}
                control={control}
                name="date_end"
              />

              <ControllerInput
                control={control}
                type={"number"}
                placeholder={"Người tham gia"}
                name="participants_ids"
                icon={quantity}
              />
              <ControllerInput
                control={control}
                name="employee_id"
                placeholder={"Người chủ trì"}
                icon={host}
              />
              <ControllerInput
                control={control}
                name="request_more_ids"
                placeholder={"Yêu cầu thêm"}
                setInputValue={setTheme}
                icon={requestz}
              />
              <InputCustom
                type={"file"}
                placeholder={"Đính kèm tài liệu, văn bản"}
                setInputValue={setTheme}
                icon={attach}
              />
            </div>
          ) : //  : pickOption === "ORDER_STATIONERY" ? (
          //   <div className="flex flex-col gap-5 m-[30px_0_30px]">
          //     <InputCustom
          //       type={"text"}
          //       placeholder={"Tên sản phẩm"}
          //       setInputValue={setTheme}
          //       icon={tagName}
          //     />
          //     <InputCustom
          //       type={"number"}
          //       placeholder={"Số lượng"}
          //       setInputValue={setTheme}
          //       icon={quantity2}
          //     />
          //     <SelectCustom
          //       options={processingDepartment.typeOfService}
          //       setIValue={setTheme}
          //       icon={receivingDepartment}
          //       placeholder="Bộ phận tiếp nhận"
          //     />
          //     <SelectCustom
          //       options={processingDepartment.typeOfService}
          //       setIValue={setTheme}
          //       icon={suporter}
          //       placeholder="Người xử lý"
          //     />
          //     <InputCustom
          //       type={"file"}
          //       placeholder={"Đính kèm tài liệu, văn bản"}
          //       setInputValue={setTheme}
          //       icon={attach}
          //     />
          //   </div>
          // )
          pickOption === "SUPPORT_REPORT" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <ControllerInput
                control={control}
                name="name"
                placeholder="Tên dịch vụ"
                icon={time}
              />

              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.type_service_ids}
                  control={control}
                  name="type_service_id"
                  pathLabel="name"
                  pathValue="id"
                  icon={typeService}
                  placeholder="Loại dịch vụ"
                />
              </div>
              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.service_child_ids}
                  control={control}
                  pathLabel="name"
                  pathValue="id"
                  name="service_child_id"
                  icon={childService}
                  placeholder="Dịch vụ con"
                />
              </div>
              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.service_detail_ids}
                  name="service_detail_id"
                  pathLabel="name"
                  pathValue="id"
                  control={control}
                  icon={detailService}
                  placeholder="Dịch vụ chi tiết"
                />
              </div>
              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.hr_department_ids}
                  icon={receivingDepartment}
                  control={control}
                  name="receiving_department_id"
                  pathLabel="name"
                  pathValue="id"
                  placeholder="Bộ phận tiếp nhận"
                />
              </div>
              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.helpdesk_team_ids}
                  icon={suportTeam}
                  name="team_id"
                  pathLabel="name"
                  pathValue="id"
                  control={control}
                  placeholder="Đội ngũ hỗ trợ"
                />
              </div>
              <div className="w-full">
                <ControllerSelect
                  options={helpdeskOption.user_ids}
                  icon={suporter}
                  control={control}
                  name="user_id"
                  pathLabel="name"
                  pathValue="id"
                  placeholder="Người xử lý"
                />
              </div>
              <InputCustom
                type={"file"}
                placeholder={"Đính kèm tài liệu, văn bản"}
                setInputValue={setTheme}
                icon={attach}
              />
            </div>
          ) : (
            <div className="h-[100px]"></div>
          )}

          <div className="flex justify-center gap-4 mt-[50px]">
            <button type="submit" className="btn-common btn-send">
              <Image src={send} alt="" />
              Gửi đi
            </button>
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
