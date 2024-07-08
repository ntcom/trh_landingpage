import Image from "next/image";
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"
import time from "@/assets/svgs/time.svg";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const CustomInput: React.FC<any> = ({ date, placeholder, onClick, refValueDate, isOpen }) => {
  refValueDate.current = date
  const currentDate = date ? dayjs(date).format('DD/MM/YYYY h:mm a') : `-- ${placeholder} --`;
  return (
    <p className={cn("common-input-select w-full flex items-center cursor-pointer text-[13px]", {
      'input-focus': isOpen,
      'common-input-default ': !isOpen,
      'uppercase font-medium text-[#0755d1]': !date,
      'text-[#1d2024]': date,
    })} onClick={onClick} >
      {currentDate}
    </p>
  );
};

const MemoizedCustomInput = React.memo(CustomInput, (prevProps, nextProps) => {
  return prevProps.date === nextProps.date
});

function DatePickerInput(props: any) {
  const { onChange, placeholder, value, ...rest } = props;

  const refValueDate = useRef()

  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleDateChange = useCallback((date: any) => {
    setSelectedDate(date);
  }, []);

  const handleClickOutside = useCallback(() => {
    setSelectedDate(date)
    setIsOpen(false);
  }, [date]);

  const handleInputClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    setIsOpen(false);
    setDate(refValueDate.current)
    onChange && onChange(refValueDate.current)
  }, [onChange, selectedDate]);

  const calendarContainer = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return ({ children }: any) => ( // Định nghĩa lại calendarContainer
      <div className="bg-blue-50 z-[1000]">
        {children}
        <div style={{ textAlign: 'center', marginTop: '10px' }} className="h-10">
          <div className="custom-wrapper-date p-2 h-[340px]">
            <p className="divide"></p>
            <button onClick={handleConfirm} style={{ height: "26px", width: "60px", padding: '10px', background: '#216ba5', color: 'white', border: 'none', borderRadius: '3px' }}>
              ok
            </button>
          </div>
        </div>
      </div>
    );
  }, [date]);

  useEffect(() => {
    if (!value) {
      setSelectedDate(value)
    }
  }, [value])
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center">
        <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
          <Image src={time} alt="" className="max-w-[16px] max-h-[16px]" />
        </div>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeInput
          timeCaption="Time:"
          dateFormat="dd/MM/yyyy h:mm aa"
          placeholderText="Chọn ngày và giờ"
          open={isOpen}
          onClickOutside={handleClickOutside}
          onInputClick={handleInputClick}
          customInput={<MemoizedCustomInput date={selectedDate} placeholder="Chọn ngày và giờ" onClick={handleInputClick} refValueDate={refValueDate} isOpen={isOpen} />}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
            <div className="flex justify-between mb-2 pt-1 px-2 h-2">
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
          calendarContainer={calendarContainer}
          {...rest}
        />

      </div>
      {props.error && <p className="form-error">{props.error}</p>}
    </div>
  );
}

export default DatePickerInput;
