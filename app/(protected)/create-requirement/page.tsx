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
import meetRoomService from "@/app/services/meet-room.service";
import dayjs from "dayjs";
import { MultiSelect } from "@/core/components/MultipleSelect/MultipleSelect";
import { BellRing } from "lucide-react";
import ControllerMultiSelect from "@/core/components/Form/ControllerMultipleSelect";
const options = [
  { title: "CNTT / Đặt lịch họp", value: "MEET" },
  // { title: "CNTT / Đặt văn phòng phẩm", value: "ORDER_STATIONERY" },
  { title: "CNTT / Báo hỗ trợ dịch vụ CNTT", value: "SUPPORT_REPORT" },
];
const locations = [{ title: "Phòng họp tầng 4", value: "Phòng họp tầng 4" }];

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];
function CreateRequirement() {
  const [pickOption, setPickOption] = useState<
    "MEET" | "ORDER_STATIONERY" | "SUPPORT_REPORT" | "EMPTY"
  >("EMPTY");
  const [optionsMeet, setOptionsMeet] = useState({
    category: [],
    employee: [],
    request_more: [],
    user_approval: [],
  })
  const [theme, setTheme] = useState("");
  const [dateDisplay, setDateDisplay] = useState("");
  const [bookedMeet, setBookedMeet] = useState([]);
  const [helpdeskOption, setHelpdeskOption] = useState({
    channel: [],
    helpdesk_team_ids: [],
    hr_department_ids: [],
    service_child_ids: [],
    service_detail_ids: [],
    type_service_ids: [],
    user_ids: [],
  });

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
    watch
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(currentYup),
  });
  const startDate = watch('date_start')

  const onSubmit = async (value: any) => {
    try {
      const {
        content,
        location,
        date_start,
        date_end,
        participants_ids,
        employee_id,
        request_more_ids,
        ...restRequest
      } = value;

      if (pickOption === "SUPPORT_REPORT") {
        const newData = { ...restRequest, channel_source: "email" };
        await helpdeskTicketService.createHelpdeskTicket({
          params: {
            ...newData,
          },
        });
      } else if (pickOption === "MEET") {
        const date_start_computed = dayjs(date_start).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        console.log('date_start:', date_start)
        const date_end_computed = dayjs(date_end).format("YYYY-MM-DD HH:mm:ss");
        await meetRoomService.createRoom({
          params: {
            name: content,
            location,
            employee_id,
            category_id: 1,
            approver_ids: [1],
            participants_ids: [value.participants_ids],
            request_more_ids: [value.request_more_ids],
            date_start: date_start_computed,
            date_end: date_end_computed,
          },
        });
      }
    } catch (error) { }
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

  const getOptions = async () => {
    try {
      const { result } = await meetRoomService.getOption()
      if (result) {
        setOptionsMeet(result);
      }
    } catch (error) {

    }
  }
  const getData = async () => {
    try {
      const { result } = await helpdeskService.getHelpDesk();

      setHelpdeskOption(result);
    } catch (error) { }
  };
  const getRoom = async (startDate?: string) => {
    try {
      const currentDate = startDate ? dayjs(startDate).set("hours", 0).set("minutes", 0) : dayjs().set("hours", 0).set("minutes", 0)

      setDateDisplay(currentDate.format("DD-MM-YYYY"))
      const { result } = await meetRoomService.getRoom({
        date_start: currentDate.format("YYYY-MM-DD HH:mm:ss")
        // date_start: '2024-06-28 00:00:02'
      })
      if (result) {
        const toFormatTime = result.map((item: any) => {
          const formatStartTime = dayjs(item.date_start).format("HH:mm a")
          const formatEndTime = dayjs(item.date_start).format("HH:mm a")
          return {
            formatStartTime,
            formatEndTime
          }
        })
        setBookedMeet(toFormatTime)
      }
    } catch (error) {
      console.log('error:', error)

    }
  }

  useEffect(() => {
    startDate && getRoom(startDate)
  }, [startDate])

  useEffect(() => {
    getData();
    getRoom()
    getOptions()
  }, []);

  const handleChange = () => {

  }
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);
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
        <div className="flex justify-between gap-3 mt-[50px]">
          <div className="md:flex-1">
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-[400px] xl:w-[700px] justify-self-center"
          >
            {pickOption === "MEET" ? (
              <div className="flex flex-col gap-5 m-[24px_0_30px]">
                <div className="relative flex">
                  <ControllerInput
                    control={control}
                    name="content"
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
                    pathLabel="title"
                    pathValue="value"
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
                <ControllerMultiSelect
                  options={frameworksList}
                  defaultValue={selectedFrameworks}
                  placeholder="Người tham gia"
                  pathLabel="label"
                  pathValue="value"
                  name="participants_ids"
                  control={control}
                  animation={2}
                  maxCount={4}
                  icon={request}
                />
                {/* 
                <ControllerInput
                  control={control}
                  type={"number"}
                  placeholder={"Người tham gia"}
                  name="participants_ids"
                  icon={quantity}
                /> */}
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
          {
            pickOption === "MEET" ? <div className="flex-1 card-app h-full mt-6 overflow-auto">
              <div className="rounded-md border p-4">
                <div className=" flex items-center space-x-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Các cuộc họp
                    </p>
                    <p className="text-[13px] text-muted-foreground text-slate-600">
                      Ngày: {dateDisplay}
                    </p>
                  </div>
                </div>
                <div className="divide"></div>
                {
                  bookedMeet.map((item: any, index) => {
                    return (<div key={index} className="flex gap-2 mb-2 items-center">
                      <Image width={14} src={time} alt="" />
                      <p className="text-sm">{item.formatStartTime}</p>
                      <span>-</span>
                      <p className="text-sm">{item.formatEndTime}</p>
                    </div>)
                  })
                }

              </div>
            </div> : <div className="flex-1"></div>
          }

        </div>
      </div>
    </div>
  );
}

export default CreateRequirement;
