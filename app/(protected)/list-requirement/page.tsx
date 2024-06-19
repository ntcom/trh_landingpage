"use client";
import React, { useState } from "react";
import cn from "@/core/utils/cn";
import TableMeet from "./components/table/TableMeet";
import TableOrderStationery from "./components/table/TableOrderStationery";
import TableSupportReport from "./components/table/TableSupportReport";
import "./components/table/styles.css";

const tables = [
  {
    id: 1,
    tag: "Đặt lịch họp",
  },
  // {
  //   id: 2,
  //   tag: "Đặt văn phòng phẩm",
  // },
  {
    id: 3,
    tag: "Báo hỗ trợ dịch vụ CNTT",
  },
];

function ListRequirement() {
  const [tabActive, setTabActive] = useState(1);

  return (
    // <div className="mt-20 container-app p-[150px_24px] mb-16">
    <div className="p-4 mt-20 mb-8">
      <ul className="flex flex-col md:flex-row">
        {tables.map((tab) => {
          const currentTab = tabActive === tab.id;
          return (
            <li key={tab.id} className="">
              <button
                onClick={() => setTabActive(tab.id)}
                className={cn(
                  " w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] text-xs font-medium leading-5 tracking-[2.4px] uppercase",
                  {
                    "bg-[#0755d1] text-[#fff] hover:opacity-90": currentTab,
                    "bg-[#f7f6fb] text-[#d5550f] hover:text-[#0755d1]":
                      !currentTab,
                  }
                )}
              >
                {tab.tag}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="bg-[#fff] p-2 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
        <div>
          {tabActive === 1 && <TableMeet />}
          {/* {tabActive === 2 && <TableOrderStationery />} */}
          {tabActive === 3 && <TableSupportReport />}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ListRequirement;
