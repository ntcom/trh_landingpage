"use client";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";

interface InputProps {
  type: string;
  label?: string | number;
  placeholder: string;
  value?: string;
  icon: any;
  onChange: any;
  id?: string;
  error?: string;
  nameInput?: string;
  className?: string;
  multiple?: boolean;
}
const InputFile = forwardRef(function InputCustom(props: InputProps, _) {
  const {
    icon,
    className,
    type,
    label,
    placeholder,
    value,
    onChange,
    nameInput,
    ...rest
  } = props;
  const [selectedFiles, setSelectedFiles] = useState<any>([]);

  const handleFileChange = (event: any) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prev: any) => {
      onChange && onChange([...files, ...prev]);
      return [...files, ...prev];
    });
  };
  useEffect(() => {
    if (!value || value.length === 0) {
      setSelectedFiles([]);
    }
  }, [value]);

  return (
    <>
      <div className="relative w-full flex items-center common-input-select h-auto common-input-default ">
        <div className="absolute shrink-0 left-[28px] w-[16px] flex justify-center">
          <Image
            src={icon}
            width={16}
            height={16}
            className="max-w-[16px] max-h-[16px]"
            alt=""
          />
        </div>
        <label
          htmlFor={nameInput}
          className="w-full top-0 left-0 h-auto cursor-pointer pl-[20px] "
        >
          {selectedFiles.length > 0 ? (
            selectedFiles.map((item: any, index: number) => {
              return (
                <p
                  key={index}
                  className="font-poppins text-sm text-[#1d2024] tracking-[1.2px] mb-2"
                >
                  {item.name}
                </p>
              );
            })
          ) : (
            <p className="font-poppins text-xs text-[#0755d1] font-medium leading-[18px] tracking-[2.4px] uppercase">
              Đính kèm tài liệu, văn bản
            </p>
          )}
        </label>
        <input
          id={nameInput}
          type={"file"}
          defaultValue={label}
          className={`opacity-0 hidden z-0 ${className}`}
          placeholder={placeholder}
          onChange={handleFileChange}
          name={nameInput}
          {...rest}
        />
      </div>
      {props.error && <p className="form-error">{props.error}</p>}
    </>
  );
});

export default InputFile;
