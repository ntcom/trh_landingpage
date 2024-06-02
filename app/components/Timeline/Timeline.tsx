"use client";

import { useState } from "react";
import Image from "next/image";
import bg from "@/assets/imgs/Timeline/timeline_bg.jpg";
import chevron from "@/assets/svgs/chevron-white.svg";

const timelineData = [
  {
    id: 1,
    value:
      "Get ready for more potential, more opportunity and more of everything you expect from internet provider",
    year: "2012",
  },
  {
    id: 2,
    value:
      "Started working at the entrepreneuring company and passed all way from Junior Manager to Senior",
    year: "2015",
  },
  {
    id: 3,
    value: "My partners and I founded entrepreneuring company.",
    year: "2018",
  },
  {
    id: 4,
    value: "We got a leading position in the Internet advertising market.",
    year: "2020",
  },
  {
    id: 5,
    value: "I joined Power Home Remodeling as an innovator marketer.",
    year: "2024",
  },
];

export default function Timeline() {
  const [nodeActive, setNodeActive] = useState(1);

  return (
    <div
      className="timeline-bg h-[609px] flex justify-center items-center"
    //   style={{ background: `no-repeat url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="w-full px-[30px]">
        <div>
          <p className="text-xl sm:text-2xl text-[#fff] font-light leading-5 sm:leading-6 tracking-[4.8px] text-center">
            Our
          </p>
          <p className="text-[40px] sm:text-[60px] text-[#fff] font-bold leading-[46px] sm:leading-[66px] tracking-[12px] text-center uppercase">
            Timeline
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 sm:mt-10">
            <button
              onClick={() => {
                if (nodeActive > 1) {
                  setNodeActive(nodeActive - 1);
                }
              }}
              className="p-2"
            >
              <Image src={chevron} width={11} alt="" className="rotate-180"/>
            </button>
            <div className="w-full max-w-[700px] h-[60px] flex justify-center relative">
              {timelineData.map((item) => {
                return (
                  <p
                    key={item.id}
                    className={`absolute top-0 w-full h-full text-sm xsss:text-base sm:text-xl text-[#fff] font-extralight leading-[30px] text-center ${
                      nodeActive === item.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-3"
                    } transition-all duration-700`}
                  >
                    {item.value}
                  </p>
                );
              })}
            </div>
            <button
              onClick={() => {
                if (nodeActive < timelineData.length) {
                  setNodeActive(nodeActive + 1);
                }
              }}
              className="p-2"
            >
              <Image src={chevron} width={11} alt=""/>
            </button>
          </div>
        </div>

        <div
          id="current-x"
          className="relative shrink-0 w-6 mx-auto mt-[135px] sm:mt-[105px]"
        >
          <div
            id="move-slide"
            className={`absolute w-[96vw] transition-all duration-[450ms] ${
              nodeActive === 1
                ? "translate-x-[0]"
                : nodeActive === 2
                ? "translate-x-[calc(-25%+6px)]"
                : nodeActive === 3
                ? "translate-x-[calc(-50%+12px)]"
                : nodeActive === 4
                ? "translate-x-[calc(-75%+18px)]"
                : nodeActive === 5 && "translate-x-[calc(-100%+24px)]"
            }`}
          >
            <ul className="relative w-full flex items-center justify-between">
              {timelineData.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setNodeActive(item.id);
                    }}
                    key={item.id}
                    className={`w-6 h-6 bg-[rgb(255,255,255,.5)] rounded-[100px] z-20 flex justify-center items-center cursor-pointer`}
                  >
                    <span className="absolute top-[-35px] text-xs text-[#fff] font-medium leading-6 tracking-[2.4px] text-center">
                      {item.year}
                    </span>
                    <span className="w-[18px] h-[18px] bg-[#218392] rounded-[100px] z-20 flex justify-center items-center">
                      {nodeActive !== item.id && nodeActive <= item.id && (
                        <div className="w-[12px] h-[12px] bg-[rgb(255,255,255,.5)] rounded-[100px] flex justify-center items-center">
                          <span className="w-[6px] h-[6px] bg-[#218392] rounded-[100px]"></span>
                        </div>
                      )}
                    </span>
                  </li>
                );
              })}
              <div
                className="absolute w-[99%] left-[4px] h-[4px] bg-[rgb(255,255,255,.1)] z-10"
                color="#6c757d"
              ></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
