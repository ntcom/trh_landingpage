"use client";
import Image from "next/image";
import React, { forwardRef, useState } from "react";

interface InputProps {
  type: string;
  label?: string | number;
  placeholder: string;
  icon: any;
  onChange: any;
  id?: string;
  error?: string;
  nameInput?: string;
  className?: string;
}

const InputCustom = forwardRef(function InputCustom(props: InputProps, _) {
  const [fileName, setFileName] = useState("");
  console.log(props.error);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    props?.onChange && props.onChange(value);
  };

  return (
    <div className="w-full">
      {props.type === "file" ? (
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
            defaultValue={props.label}
            className={`opacity-0 z-0 ${props.className}`}
            placeholder={props.placeholder}
            onChange={(e) => {
              const path = e.target.value.split("\\")[2];
              setFileName(path);
            }}
          />
        </div>
      ) : (
        <div className="relative w-full flex items-center">
          <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
            <Image
              src={props.icon}
              alt=""
              className="max-w-[16px] max-h-[16px]"
            />
          </div>
          <input
            id={props.id}
            type={props.type}
            defaultValue={props.label}
            className={`common-input ${props.className}`}
            name={props.nameInput}
            placeholder={props.placeholder}
            onChange={handleChange}
          />
        </div>
      )}
      {props.error && <p className="form-error">{props.error}</p>}
    </div>
  );
});

export default InputCustom;
