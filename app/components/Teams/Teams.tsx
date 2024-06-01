import Image from "next/image";
import mem1 from "@/assets/imgs/team_member_1.jpg";
import mem2 from "@/assets/imgs/team_member_2.jpg";
import mem3 from "@/assets/imgs/team_member_3.jpg";
import mem4 from "@/assets/imgs/team_member_4.jpg";
import mem5 from "@/assets/imgs/team_member_5.jpg";
import mem6 from "@/assets/imgs/team_member_6.jpg";
import { v4 as uuidv4 } from "uuid";

const teamList = [
    {
      id: uuidv4(),
      name: "Dean Wales",
      position: "SENIOR EXECUTIVE",
      image: mem1,
    },
    {
      id: uuidv4(),
      name: "Jamie Brant",
      position: "SALES MANAGER",
      image: mem2,
    },
    {
      id: uuidv4(),
      name: "Amelia Brynne",
      position: "SERVICE MANAGER",
      image: mem3,
    },
    {
      id: uuidv4(),
      name: "Lesia Travis",
      position: "CO-FOUNDER",
      image: mem4,
    },
    {
      id: uuidv4(),
      name: "Jackson Janey",
      position: "FOUNDER",
      image: mem5,
    },
    {
      id: uuidv4(),
      name: "Lark Laverne",
      position: "EXECUTIVE MANAGER",
      image: mem6,
    },
  ];

export default function Teams() {
  return (
    <div className="bg-[#f7f6fb]">
      <div className="container2 p-[150px_15px_120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {teamList.map((mem, index) => {
          return (
            <div
              key={mem.id}
              className="bg-[#fff] rounded-[5px] relative overflow-hidden"
            >
              <div className="relative max-h-[370px] cursor-pointer overflow-hidden [&>span]:hover:bg-[rgba(33,131,146,0.5)]">
                <Image src={mem.image} alt="" />
                <span className="absolute top-0 left-0 right-0 bottom-0 transition-all"></span>
              </div>
              <div className="p-[35px_50px]">
                <a
                  href="/"
                  className="block text-2xl text-[#4c4c4c] font-bold leading-[34px] tracking-[0.72px] mb-1 text-center hover:text-[#4c4c4ccc] transition-all"
                >
                  {mem.name}
                </a>
                <p
                  className={`text-xs ${
                    index + 1 === teamList.length - 2 ||
                    index + 1 === teamList.length - 1 ||
                    index + 1 === teamList.length
                      ? "text-[#3197d4]"
                      : "text-[#d5550f]"
                  } font-medium leading-5 tracking-[2.4px] text-center uppercase`}
                >
                  {mem.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
