"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import groupIcon from "@/assets/svgs/Portal/group.svg";
import filterIcon from "@/assets/svgs/Portal/filter.svg";
import arrowDownUp from "@/assets/svgs/Portal/arrow-down-up.svg";
import tick from "@/assets/svgs/Portal/tick.svg";

interface GroupFuncKeysTypes {
  filterSelect: string;
  setFilterSelect: any;
  soft: string;
  setSoft: any;
  group?: string;
  setGroup?: any;
}

export default function GroupFuncKeys(props: GroupFuncKeysTypes) {
  const [openFilter, setOpenFilter] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);

  const pathname = usePathname();

  return <div className="shrink-0 bg-[#fff] p-[6px_18px] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] flex gap-4 relative">
  {pathname === "/wallet" ? (
    <button
      onClick={() => {
        if (openGroup) {
          setOpenGroup(false);
        } else {
          setOpenGroup(true);
        }
      }}
      className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
    >
      <Image src={groupIcon} alt="" />
    </button>
  ) : (
    <button
      onClick={() => {
        if (openFilter) {
          setOpenFilter(false);
        } else {
          setOpenFilter(true);
        }
      }}
      className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
    >
      <Image src={filterIcon} alt="" />
    </button>
  )}

  <button
    onClick={() => {
      if (props.soft === "new") {
        props.setSoft("old");
      } else {
        props.setSoft("new");
      }
      setOpenFilter(false);
      setOpenGroup(false)
    }}
    className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
  >
    <Image src={arrowDownUp} alt="" />
  </button>

  <div
    className={`absolute top-[112%] left-0 z-[998] overflow-hidden ${
      openFilter
        ? "w-[150px] max-h-[160px] opacity-100 p-[12px_12px]"
        : "w-0 max-h-0 opacity-0"
    } bg-[#fff] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] transition-all`}
  >
    <button
      onClick={() => {
        if (props.filterSelect !== "sale") {
          props.setFilterSelect("sale");
        } else {
          props.setFilterSelect("all");
        }
        setTimeout(() => {
          setOpenFilter(false);
        }, 150);
      }}
      className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
    >
      Sale{" "}
      {props.filterSelect === "sale" && <Image src={tick} alt="" className="w-4" />}
    </button>
    <button
      onClick={() => {
        if (props.filterSelect !== "draft") {
          props.setFilterSelect("draft");
        } else {
          props.setFilterSelect("all");
        }
        setTimeout(() => {
          setOpenFilter(false);
        }, 150);
      }}
      className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
    >
      Draft{" "}
      {props.filterSelect === "draft" && (
        <Image src={tick} alt="" className="w-3" />
      )}
    </button>
  </div>

  <div
    className={`absolute top-[112%] left-0 z-[998] overflow-hidden ${
      openGroup
        ? "w-[180px] max-h-[160px] opacity-100 p-[12px_12px]"
        : "w-0 max-h-0 opacity-0"
    } bg-[#fff] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] transition-all`}
  >
    <button
      onClick={() => {
        if (props.group !== "not-use") {
          props.setGroup("not-use");
        } else {
          props.setGroup("");
        }
        setTimeout(() => {
          setOpenGroup(false);
        }, 150);
      }}
      className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
    >
      Không dùng{" "}
      {props.group === "not-use" && <Image src={tick} alt="" className="w-4" />}
    </button>
    <button
      onClick={() => {
        if (props.group !== "phase") {
          props.setGroup("phase");
        } else {
          props.setGroup("");
        }
        setTimeout(() => {
          setOpenGroup(false);
        }, 150);
      }}
      className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
    >
      Giai đoạn{" "}
      {props.group === "phase" && <Image src={tick} alt="" className="w-3" />}
    </button>
  </div>
</div>;
}
