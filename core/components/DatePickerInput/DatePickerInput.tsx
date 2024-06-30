import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import time from "@/assets/svgs/time.svg";

function DatePickerInput(props: any) {
  const { onChange } = props;
  const [startDate, setStartDate] = useState(null);
  const handleChangeDate = (date: any) => {
    console.log("🚀 ~ date:", date);
    setStartDate(date);
    onChange && onChange(date);
  };

  return (
    <div className="w-full">
      <div className="relative w-full flex items-center">
        <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
          <Image src={time} alt="" className="max-w-[16px] max-h-[16px]" />
        </div>
        <DatePicker
          selected={startDate}
          onChange={handleChangeDate}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy  h:mm aa"
          className="common-input w-full"
          placeholderText={props.placeholder}
          showTimeInput
        />
      </div>
      {props.error && <p className="form-error">{props.error}</p>}
    </div>
  );
}

export default DatePickerInput;
