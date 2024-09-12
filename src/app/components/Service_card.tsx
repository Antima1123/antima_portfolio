"use client";

import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { useState, useEffect } from "react";
import ServiceCard from "./Service_big_card";

interface Service {
  title: string;
  price: number;
  des: string;
  icon: string;
  img: string;
}

const ServCard = ({ title, price, des, icon, img }: Service) => {
  const [showCard, setShowCard] = useState(false);

  // Disable body scroll when popup is shown
  useEffect(() => {
    if (showCard) { 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [showCard]);

  const handleCard = () => {
    setShowCard(true);
  };

  const closeCard = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the click from triggering handleCard
    setShowCard(false);
  };

  return (
    <div
      className="bg-[#4b4f5c] lg:w-[33rem] w-full font-sans h-[23rem] rounded-2xl p-16 flex cursor-pointer"
      onClick={handleCard}
    >
      <div className="w-full h-full flex justify-between">
        <div className="w-32 h-32 justify-center flex rounded-full items-center relative">
          <Image src={img} alt="" height={100} width={100} />
          {icon === "first" ? (
            <FaReact size={50} color="black" className="absolute" />
          ) : icon === "second" ? (
            <BiSolidUserDetail size={50} color="black" className="absolute" />
          ) : icon === "third" ? (
            <AiFillProduct size={50} color="black" className="absolute" />
          ) : icon === "forth" ? (
            <CgWebsite size={50} color="black" className="absolute" />
          ) : (
            ""
          )}
        </div>

        <div className="w-2/3 gap-2 flex flex-col pl-4 items-start">
          <div className="text-[28px] font-[600]">{title}</div>
          <div className="flex gap-2 items-center">
            <p className="text-[18px] font-[600]">Starts from</p>
            <p className="text-[20px] font-[600] text-[#f75023]">${price}</p>
          </div>
          <div className="text-[18px] font-[600] text-[#b9b5c9]">{des}</div>
        </div>
      </div>
      {showCard && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 h-full" >
          
          <div
            className="relative w-screen h-[calc(100vh-200px)] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}>

            <ServiceCard/>
            <div className=" h-full flex items-start -pt-4">
                <button
                className=" top-0 text-2xl font-bold text-white z-[200] cursor-pointer"
                onClick={closeCard}
                >
                ×
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServCard;
