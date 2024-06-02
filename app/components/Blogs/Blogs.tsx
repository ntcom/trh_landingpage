"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import blog1 from "@/assets/imgs/Blogs/blog01.jpg";
import blog2 from "@/assets/imgs/Blogs/blog02.jpg";
import blog3 from "@/assets/imgs/Blogs/blog03.jpg";
import { v4 as uuidv4 } from 'uuid';

const blogsList = [
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products & Reworking Pieces",
      comments: 4,
      likes: 4,
      views: 2457,
      image: blog1,
    },
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products",
      comments: 3,
      likes: 3,
      views: 538,
      image: blog2,
    },
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products",
      comments: 0,
      likes: 4,
      views: 759,
      image: blog3,
    },
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products & Reworking Pieces",
      comments: 4,
      likes: 4,
      views: 2457,
      image: blog1,
    },
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products",
      comments: 3,
      likes: 3,
      views: 538,
      image: blog2,
    },
    {
      id: uuidv4(),
      title: "We Specialize In One Of A Kind Products",
      comments: 0,
      likes: 4,
      views: 759,
      image: blog3,
    },
  ];

export default function Blogs() {
  return (
    <div className="bg-[#f7f6fb]">
      <div className="container2 p-[150px_15px]">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
        >
          {blogsList.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <a
                  href="/"
                  className="block max-w-[350px] cursor-pointer [&>div>span]:hover:bg-[rgba(33,131,146,0.5)] [&>div>p]:hover:text-[rgb(76,76,76,.8)]"
                >
                  <div className="max-h-[232px] relative">
                    <span className="absolute top-0 left-0 right-0 bottom-0 bg-transparent transition-all duration-500"></span>
                    <Image src={slide.image} alt=""/>
                  </div>
                  <div className="pt-[22px]">
                    <p className="text-xl text-[#4c4c4c] font-bold leading-6 tracking-[0.6px] transition-all duration-500">
                      {slide.title}
                    </p>
                    <ul className="pt-6 flex items-center gap-2 cursor-default">
                      <li className="text-xs text-[#808080] font-medium tracking-[2.4px]">
                        {slide.comments !== 0 ? slide.comments + ' Comments' : 'Leave a comment'}
                      </li>
                      <li className="text-xs text-[#808080] font-medium tracking-[2.4px]">
                        |
                      </li>
                      <li className="text-xs text-[#808080] font-medium tracking-[2.4px]">
                        {slide.likes !== 0 ? slide.likes + ' Likes' : 'Drop a likes'}
                      </li>
                      <li className="text-xs text-[#808080] font-medium tracking-[2.4px]">
                        |
                      </li>
                      <li className="text-xs text-[#808080] font-medium tracking-[2.4px]">
                        {slide.views + ' Views'}
                      </li>
                    </ul>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}
