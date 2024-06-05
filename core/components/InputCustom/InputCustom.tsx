import React from "react";
import Image from "next/image";

interface PropsType {
  value?: string | number;
  defaultValue?: string | number;
  setValue: any;
  placeholder: string;
  icon: any;
}

export default function InputCustom(props: PropsType) {
  return (
    <div className="w-full flex items-center relative">
      <input
        type="text"
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e: any) => props.setValue(e.target.value)}
        className="common-input"
      />
      <div className="flex justify-center max-w-[16px] max-h-[16px] absolute left-[28px]">
        <Image src={props.icon} alt="" />
      </div>
    </div>
  );
}
