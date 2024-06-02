import Image from "next/image";
import img1 from "@/assets/imgs/Careers/careers_icon_1.png";
import img2 from "@/assets/imgs/Careers/careers_icon_2.png";
import img3 from "@/assets/imgs/Careers/careers_icon_3.png";
import img4 from "@/assets/imgs/Careers/careers_icon_4.png";
import img5 from "@/assets/imgs/Careers/careers_icon_5.png";
import img6 from "@/assets/imgs/Careers/careers_icon_6.png";
import { v4 as uuidv4 } from "uuid";

const careersList = [
  {
    id: uuidv4(),
    position: "Lead Developer",
    description: "A passionate leader and team player",
    icon: img1,
  },
  {
    id: uuidv4(),
    position: "Mobile Developer",
    description: "Self-motivated with a strong sense of ownership",
    icon: img2,
  },
  {
    id: uuidv4(),
    position: "Team Leader",
    description: "A QA Team leader with at least 5 years’ experience",
    icon: img3,
  },
  {
    id: uuidv4(),
    position: "Product Designer",
    description: "Designer with at least 3 years experience in UX",
    icon: img4,
  },
  {
    id: uuidv4(),
    position: "Head of Marketing",
    description: "A close-to-numbers individual with a passion for products",
    icon: img5,
  },
  {
    id: uuidv4(),
    position: "Office Manager",
    description: "A service-oriented go-getter with 3+ years experience",
    icon: img6,
  },
];

export default function Careers() {
  return (
    <div className="bg-[#f7f6fb]">
      <div className="container2 p-[150px_15px_130px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {careersList.map((career) => {
          return (
            <div key={career.id} className="flex">
              <a href="/" className="careers-item">
                <div className="h-[60px]">
                  <Image src={career.icon} alt=""/>
                </div>
                <p className="text-[23px] text-[#4c4c4c] leading-[30px] tracking-[0.69px] font-bold text-center m-[25px_0_14px]">
                  {career.position}
                </p>
                <p className="text-base text-[#6e6e6e] leading-[30px] font-light text-center">
                  {career.description}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
