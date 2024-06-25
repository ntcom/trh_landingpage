import Image from "next/image";
import React, { useState } from "react";
import chevron from "@/assets/svgs/chevron-right.svg";

interface SelectPropsType {
  options: any;
  defaultValue?: string;
  placeholder: string;
  iValue?: string;
  setIValue: any;
  icon?: any;
  setPickOption?: any;
}

export default function SelectCustoms(props: SelectPropsType) {
  const [onSelect, setOnSelect] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      className={`relative w-full rounded-sm border ${
        onSelect
          ? "border-[rgba(7,85,209,.8)] shadow-[0_0_8px_2px_rgba(7,85,209,.2)]"
          : "border-[#4c4c4c1a]"
      }`}
    >
      <span
        onClick={() => {
          setOnSelect(!onSelect);
        }}
        className="absolute top-0 left-0 w-full h-full z-30 cursor-pointer bg-transparent"
      ></span>
      <input
        type="text"
        defaultValue={props.defaultValue}
        value={value}
        placeholder={`-- ${props.placeholder} --`}
        disabled
        className="common-input z-10 placeholder:text-[13px] placeholder:text-[#0755d1] placeholder:font-medium placeholder:tracking-0"
      />
      <div className="absolute left-[28px] max-w-[16px] max-h-[16px] top-1/2 -translate-y-1/2 z-20">
        <Image src={props.icon} alt="" />
      </div>
      <div
        className={`absolute right-5 max-w-[16px] max-h-[16px] z-20 top-1/2 -translate-y-1/2 ${
          onSelect ? "-rotate-90" : "rotate-90"
        } transition-all`}
      >
        <Image src={chevron} alt="" />
      </div>

      <div
        className={`absolute top-[108%] left-[-1px] w-[calc(100%+2px)] ${
          onSelect
            ? "max-h-[400px] border-[rgba(7,85,209,.8)]"
            : "max-h-0 border-transparent shadow-none overflow-hidden opacity-0"
        } bg-[#fff] overflow-auto rounded-sm transition-all duration-200 border z-50 shadow-lg hidden-scroll`}
      >
        {props.options.map((option: any, index: number) => {
          return (
            <data
              key={index}
              value={option.value}
              onClick={() => {
                props.setPickOption(option.value);
                setValue(option.title);
                props.setIValue(option.value);
                setOnSelect(false);
              }}
              className="block w-full p-[10px_30px] hover:bg-[#0755d1] transition-all hover:text-[#fff] text-sm text-[#1d2024] font-medium tracking-[1.2px] cursor-pointer"
            >
              {option.title ? option.title : option}
            </data>
          );
        })}
      </div>
    </div>
  );
}
