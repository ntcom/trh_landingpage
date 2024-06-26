"use client";
import Image from "next/image";
import React, { useState } from "react";

interface InputProps {
  type: string;
  defaultValue?: string | number;
  placeholder: string;
  inputValue?: string | number;
  setInputValue: any;
  icon: any;
  id?: string;
  isRequired?: boolean
}

export default function InputCustom(props: InputProps) {
  const [fileName, setFileName] = useState("");

  return props.type === "file" ? (
    <div className="relative w-full flex items-center common-input">
      <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
        <Image
          src={props.icon}
          width={16}
          height={16}
          className="max-w-[16px] max-h-[16px]"
          alt=""
        />
      </div>
      <label
        htmlFor="input-file"
        className="w-full absolute top-0 left-0 h-full cursor-pointer flex items-center pl-[60px] z-10"
      >
        {fileName ? (
          <p className="font-poppins text-sm text-[#1d2024] tracking-[1.2px]">
            {fileName}
          </p>
        ) : (
          <p className="font-poppins text-xs text-[#0755d1] font-medium leading-[18px] tracking-[2.4px] uppercase">
            Đính kèm tài liệu, văn bản
          </p>
        )}
      </label>
      <input
        id="input-file"
        type={props.type}
        className="opacity-0 z-0"
        placeholder={props.placeholder}
        onChange={(e) => {
          const path = e.target.value.split('\\')[2];
          setFileName(path);
        }}
      />
    </div>
  ) : (
    <div className="relative w-full flex items-center">
      <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
        <Image src={props.icon} alt="" className="max-w-[16px] max-h-[16px]" />
      </div>
      <input
        id={props.id}
        type={props.type}
        defaultValue={props.defaultValue}
        className="common-input"
        placeholder={props.placeholder}
        onChange={(e) => props.setInputValue(e.target.value)}
        required={props.isRequired}
      />
    </div>
  );
}
