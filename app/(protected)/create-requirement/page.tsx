"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import send from "@/assets/svgs/send.svg";
import refresh from "@/assets/svgs/refresh.svg";
import cancel from "@/assets/svgs/cancel.svg";
import attach from "@/assets/svgs/attach.svg";
import note from "@/assets/svgs/note.svg";
import SelectCustom from "@/app/components/SelectCustom/SelectCustom";
import typeService from "@/assets/svgs/typeof-service.svg";
import request from "@/assets/svgs/request.svg";
import location from "@/assets/svgs/location.svg";
import host from "@/assets/svgs/host.svg";
import time from "@/assets/svgs/time.svg";
import childService from "@/assets/svgs/childService.svg";
import detailService from "@/assets/svgs/detailService.svg";
import receivingDepartment from "@/assets/svgs/receiving-department.svg";
import suportTeam from "@/assets/svgs/suportTeam.svg";
import suporter from "@/assets/svgs/suporter.svg";
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
import ControllerDatePicker from "@/core/components/Form/ControllerDatePicker";
import helpdeskTicketService from "@/app/services/helpdesk-ticket.service";
import meetRoomService from "@/app/services/meet-room.service";
import dayjs from "dayjs";
import { BellRing } from "lucide-react";
import ControllerMultiSelect from "@/core/components/Form/ControllerMultipleSelect";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import InputFile from "@/core/components/InputFile/InputFile";
import ControllerFile from "@/core/components/Form/ControllerFile";
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
  });
  const { toast } = useToast();
  const [theme, setTheme] = useState("");
  const [dateDisplay, setDateDisplay] = useState("");
  const [bookedMeet, setBookedMeet] = useState([]);
  const [serviceChildOption, setServiceChildOption] = useState([]);
  const [serviceDetailOption, setServiceDetailOption] = useState([]);
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
    reset,
    watch,
    resetField,
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(currentYup),
  });
  const startDate = watch("date_start");
  const serviceType = watch("type_service_id");
  const serviceChild = watch("service_child_id");
  const [isLoading, setLoading] = useState(false);
  const category_id = useRef("");
  const onSubmit = async (value: any) => {
    console.log("🚀 ~ value:", value);
    try {
      setLoading(true);
      const {
        content,
        location,
        date_start,
        date_end,
        participants_ids,
        employee_id,
        request_more_ids,
        approver_ids,
        // category_id,
        ...restRequest
      } = value;
      // Case tạo dịch vụ
      if (pickOption === "SUPPORT_REPORT") {
        const newData = { ...restRequest, channel_source: "email" };
        const { result } = await helpdeskTicketService.createHelpdeskTicket({
          params: {
            ...newData,
          },
        });
        if (result?.requestID) {
          toast({
            title: "Thành công",
            description: "Thêm dịch vụ thành công",
            variant: "success",
            action: <ToastAction altText="Done">Done</ToastAction>,
          });
          reset();
          return;
        }
        toast({
          title: "Thất bại",
          variant: "destructive",
          description:
            result?.ValidationError ||
            "Thêm dịch vụ thất bại, vui lòng thử lại",
          action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
        });
      }
      // Case tạo phòng họp
      else if (pickOption === "MEET") {
        const date_start_computed = dayjs(date_start).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        const date_end_computed = dayjs(date_end).format("YYYY-MM-DD HH:mm:ss");
        const { result } = await meetRoomService.createRoom({
          params: {
            name: content,
            location,
            employee_id,
            category_id: category_id.current,
            approver_ids,
            participants_ids,
            request_more_ids,
            date_start: date_start_computed,
            date_end: date_end_computed,
          },
        });
        if (result?.requestID) {
          toast({
            title: "Thành công",
            description: "Thêm phòng họp thành công",
            variant: "success",
            action: <ToastAction altText="Done">Done</ToastAction>,
          });
          reset();
          return;
        }
        toast({
          title: "Thất bại",
          variant: "destructive",
          description:
            result?.ValidationError ||
            "Thêm phòng họp thất bại, vui lòng thử lại",
          action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        title: "Thêm thất bại",
        variant: "destructive",
        description: "Vui lòng thử lại",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
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
      const { result } = await meetRoomService.getOption();
      if (result) {
        setOptionsMeet(result);
        category_id.current =
          result.category.find((item: any) => item.type === "meeting_room")
            ?.id || "";
      }
    } catch (error) {}
  };
  const getData = async () => {
    try {
      const { result } = await helpdeskService.getHelpDesk();
      setHelpdeskOption(result);
    } catch (error) {}
  };

  const getRoom = async (startDate?: string) => {
    try {
      const currentDate = startDate
        ? dayjs(startDate).set("hours", 0).set("minutes", 0)
        : dayjs().set("hours", 0).set("minutes", 0);

      setDateDisplay(currentDate.format("DD-MM-YYYY"));
      const { result } = await meetRoomService.getRoom({
        date_start: currentDate.format("YYYY-MM-DD HH:mm:ss"),
        // date_start: '2024-06-28 00:00:02'
      });
      if (result) {
        const toFormatTime = result.map((item: any) => {
          const formatStartTime = dayjs(item.date_start).format("HH:mm a");
          const formatEndTime = dayjs(item.date_start).format("HH:mm a");
          return {
            formatStartTime,
            formatEndTime,
          };
        });
        setBookedMeet(toFormatTime);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSetPickOption = (value: any) => {
    setPickOption(value);
    reset();
  };

  useEffect(() => {
    startDate && getRoom(startDate);
  }, [startDate]);

  useEffect(() => {
    resetField("service_detail_id");
    setServiceDetailOption([]);
    resetField("service_child_id");
    setServiceChildOption([]);
    if (serviceType) {
      (async () => {
        try {
          const { result } = await helpdeskService.getChildById(serviceType);
          if (result) {
            setServiceChildOption(result);
            return;
          }
          setServiceChildOption([]);
        } catch (error) {
          setServiceChildOption([]);
        }
      })();
    }
  }, [serviceType, resetField]);

  useEffect(() => {
    resetField("service_detail_id");
    setServiceDetailOption([]);
    if (serviceChild) {
      (async () => {
        try {
          const { result } = await helpdeskService.getDetailByChildId(
            serviceChild
          );
          if (result) {
            setServiceDetailOption(result);
            return;
          }
          setServiceDetailOption([]);
        } catch (error) {
          setServiceDetailOption([]);
        }
      })();
    }
  }, [serviceChild, resetField]);

  useEffect(() => {
    getData();
    getRoom();
    getOptions();
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
              setIValue={setPickOption}
              icon={request}
              placeholder="Chọn một chủ đề"
              setPickOption={handleSetPickOption}
            />
          </div>
        </div>
        <hr className="divide"></hr>
        <div className="flex justify-between gap-3 mt-[50px]">
          <div className="md:flex-1"></div>
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
                <div className="w-full">
                  <ControllerMultiSelect
                    options={optionsMeet.employee}
                    defaultValue={[]}
                    placeholder="Người tham gia"
                    pathLabel="name"
                    pathValue="id"
                    name="participants_ids"
                    control={control}
                    animation={2}
                    maxCount={2}
                    icon={request}
                  />
                </div>
                {/* 
                <ControllerInput
                  control={control}
                  type={"number"}
                  placeholder={"Người tham gia"}
                  name="participants_ids"
                  icon={quantity}
                /> */}
                <div className="w-full">
                  <ControllerSelect
                    options={optionsMeet.employee}
                    control={control}
                    name="employee_id"
                    pathLabel="name"
                    pathValue="id"
                    icon={host}
                    placeholder="Người chủ trì"
                  />
                </div>
                <div className="w-full">
                  <ControllerMultiSelect
                    options={optionsMeet.request_more}
                    control={control}
                    name="request_more_ids"
                    pathLabel="name"
                    pathValue="id"
                    icon={requestz}
                    animation={2}
                    maxCount={2}
                    placeholder="Yêu cầu thêm"
                  />
                </div>
                {/* <div className="w-full">
                  <ControllerSelect
                    options={optionsMeet.category}
                    control={control}
                    name="category_id"
                    pathLabel="name"
                    pathValue="id"
                    icon={requestz}
                    placeholder="Danh mục"
                  />
                </div> */}
                <div className="w-full">
                  <ControllerMultiSelect
                    options={optionsMeet.user_approval}
                    control={control}
                    name="approver_ids"
                    pathLabel="name"
                    pathValue="id"
                    icon={requestz}
                    animation={2}
                    maxCount={2}
                    placeholder="Người phê duyệt"
                  />
                </div>
                <ControllerFile
                  multiple
                  control={control}
                  name="meet_file"
                  placeholder={"Đính kèm tài liệu, văn bản"}
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
                <div className="relative flex">
                  <ControllerInput
                    control={control}
                    name="description"
                    className="w-full"
                    placeholder="Mô tả nội dung yêu cầu"
                    icon={note}
                  />
                </div>
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
                    options={serviceChildOption}
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
                    options={serviceDetailOption}
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
                <ControllerFile
                  multiple
                  placeholder={"Đính kèm tài liệu, văn bản"}
                  icon={attach}
                  control={control}
                  name="support_file"
                />
              </div>
            ) : (
              <div className="h-[100px]"></div>
            )}

            <div
              id="button-requirement"
              className="flex justify-center gap-4 mt-[50px]"
            >
              <button
                disabled={isLoading}
                type="submit"
                className={cn("btn-common relative", {
                  "bg-gray-400": isLoading,
                  "btn-send": !isLoading,
                })}
              >
                <Image src={send} alt="" />
                Gửi đi
                {isLoading && (
                  <div
                    role="status"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                )}
              </button>
              <button
                disabled={isLoading}
                type="button"
                onClick={() => reset()}
                className="btn-common btn-success btn-refresh"
              >
                <Image src={refresh} alt="" />
                Làm mới
              </button>
              <a
                href={isLoading ? "#button-requirement" : "/"}
                className="btn-common btn-danger btn-cancel"
              >
                <Image src={cancel} alt="" />
                Hủy bỏ
              </a>
            </div>
          </form>
          {pickOption === "MEET" ? (
            <div className="flex-1 card-app h-full mt-6 overflow-auto">
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
                {bookedMeet.map((item: any, index) => {
                  return (
                    <div key={index} className="flex gap-2 mb-2 items-center">
                      <Image width={14} src={time} alt="" />
                      <p className="text-sm">{item.formatStartTime}</p>
                      <span>-</span>
                      <p className="text-sm">{item.formatEndTime}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateRequirement;
