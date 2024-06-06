import Image from "next/image";
// import mem1 from "@/assets/imgs/Teams/mem1.jpg";
import mem2 from "@/assets/imgs/Teams/mem2.png";
import mem3 from "@/assets/imgs/Teams/mem3.png";
import mem4 from "@/assets/imgs/Teams/mem4.jpg";
import mem5 from "@/assets/imgs/Teams/mem5.jpeg";
import mem6 from "@/assets/imgs/Teams/mem6.png";
import mem7 from "@/assets/imgs/Teams/mem7.png";
import mem8 from "@/assets/imgs/Teams/mem8.jpg";
import mem9 from "@/assets/imgs/Teams/mem9.jpeg";
import mem10 from "@/assets/imgs/Teams/mem10.png";
import { v4 as uuidv4 } from "uuid";

const teamList = [
  // {
  //   id: uuidv4(),
  //   name: "Trần Nhiệm",
  //   position: "IT Manager",
  //   image: mem1,
  // },
  {
    id: uuidv4(),
    name: "Nguyễn Thị Ngân",
    position: "Tester",
    image: mem10,
  },
  {
    id: uuidv4(),
    name: "Lương Minh Đức",
    position: "Developer",
    image: mem2,
  },
  {
    id: uuidv4(),
    name: "Vũ Thái Sơn",
    position: "Developer",
    image: mem3,
  },
  {
    id: uuidv4(),
    name: "Nguyễn Hữu Tùng",
    position: "Business analyst",
    image: mem4,
  },
  {
    id: uuidv4(),
    name: "Nguyễn Thị Tuyết",
    position: "Tester",
    image: mem5,
  },
  {
    id: uuidv4(),
    name: "Nguyễn Hoàng Vương",
    position: "IT Helpdesk",
    image: mem6,
  },
  {
    id: uuidv4(),
    name: "Nguyễn Quang Vinh",
    position: "Developer",
    image: mem7,
  },
  {
    id: uuidv4(),
    name: "Lê Thị Minh",
    position: "Tester",
    image: mem8,
  },
  {
    id: uuidv4(),
    name: "Phạm Quỳnh Mai",
    position: "Tester",
    image: mem9,
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
              <div className="relative h-[370px] max-h-[370px] cursor-pointer overflow-hidden [&>span]:hover:bg-[rgba(7,85,209,.4)]">
                <Image
                  src={mem.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 left-0 right-0 bottom-0 transition-all"></span>
              </div>
              <div className="p-[35px_25px]">
                <a
                  href="/"
                  className="block text-2xl text-[#4c4c4c] font-bold leading-[34px] tracking-[0.72px] mb-1 text-center hover:text-[#4c4c4ccc] transition-all whitespace-nowrap"
                >
                  {mem.name}
                </a>
                <p
                  className={`text-xs text-[#3197d4] font-medium leading-5 tracking-[2.4px] text-center uppercase`}
                >
                  {mem.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
