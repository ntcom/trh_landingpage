import SvgMail from "@/assets/svgs/SvgMail";
import React from "react";

interface IOption {
  value: string | number;
  title: string;
}
interface IProps {
  option: IOption[];
  icon: (props: any) => React.JSX.Element;
}
function Select(props: IProps) {
  const Icon = props?.icon || SvgMail;
  return (
    <div className="relative w-full">
      <Icon
        className="absolute top-1/2 transform translate-y-[-50%]"
        fill="#218392"
        style={{ left: "25px" }}
      />
      <select
        className="input-app uppercase text-[12px]"
        style={{ color: "#747474", letterSpacing: "0.2em" }}
        {...props}
      >
        {props.option.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
