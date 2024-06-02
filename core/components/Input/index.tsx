import SvgMail from "@/assets/svgs/SvgMail";
import React from "react";

function Input(props: any) {
  const Icon = props?.icon || SvgMail;
  return (
    <div className="relative w-full">
      <Icon
        className="absolute top-1/2 transform translate-y-[-50%]"
        fill="#218392"
        style={{ left: "25px" }}
      />
      <input className="input-app" {...props}></input>
    </div>
  );
}

export default Input;
