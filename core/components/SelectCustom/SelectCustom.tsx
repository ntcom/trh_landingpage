import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";
import chevron from "@/assets/svgs/chevron-right.svg";

interface SelectPropsType {
  options: any;
  label?: string;
  placeholder: string;
  error: string;
  nameSelect: string;
  pathLabel: string;
  pathValue: string;
  icon?: any;
  onChange: any;
  value: any;
}

const SelectCustoms = forwardRef(function SelectCustoms(
  props: SelectPropsType,
  _
) {
  const { pathLabel, pathValue, onChange, value } = props;
  const [open, setOpen] = useState(false);
  const [localTitle, setLocalTitle] = useState("");

  const handleSetValue = (item: any) => {
    setLocalTitle(item[pathLabel]);
    setOpen(false);
    onChange && onChange(item[pathValue]);
  };

  useEffect(() => {
    console.log('value:', value)
    if (!value) {
      setLocalTitle('')
    }
  }, [value])

  return (
    <div className="w-full">
      <div
        className={`relative w-full rounded-sm border ${open
          ? "border-[rgba(7,85,209,.8)] shadow-[0_0_8px_2px_rgba(7,85,209,.2)]"
          : "border-[#4c4c4c1a]"
          }`}
      >
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="absolute top-0 left-0 w-full h-full z-30 cursor-pointer bg-transparent"
        ></span>
        <input
          type="text"
          name={props.nameSelect}
          value={localTitle}
          placeholder={`-- ${props.placeholder} --`}
          disabled
          className="common-input z-10 placeholder:text-[13px] placeholder:text-[#0755d1] placeholder:font-medium placeholder:tracking-0"
        />
        <div className="absolute left-[28px] max-w-[16px] max-h-[16px] top-1/2 -translate-y-1/2 z-20">
          <Image src={props.icon} alt="" />
        </div>
        <div
          className={`absolute right-5 max-w-[16px] max-h-[16px] z-20 top-1/2 -translate-y-1/2 ${open ? "-rotate-90" : "rotate-90"
            } transition-all`}
        >
          <Image src={chevron} alt="" />
        </div>

        <div
          className={`absolute top-[108%] left-[-1px] w-[calc(100%+2px)] ${open
            ? "max-h-[400px] border-[rgba(7,85,209,.8)]"
            : "max-h-0 border-transparent shadow-none overflow-hidden opacity-0"
            } bg-[#fff] overflow-auto rounded-sm transition-all duration-200 border z-50 shadow-lg hidden-scroll`}
        >
          {props.options.map((option: any) => {
            return (
              <data
                key={option[pathValue]}
                value={option[pathValue]}
                onClick={() => handleSetValue(option)}
                className="block w-full p-[10px_30px] hover:bg-[#0755d1] transition-all hover:text-[#fff] text-sm text-[#1d2024] font-medium tracking-[1.2px] cursor-pointer"
              >
                {option[pathLabel]}
              </data>
            );
          })}
        </div>
      </div>
      {props.error && <p className="form-error">{props.error}</p>}
    </div>
  );
});

export default SelectCustoms;
