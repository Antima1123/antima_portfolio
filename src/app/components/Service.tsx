"use client"
import { useState } from "react";
import ServCard from "./Service_card";
import ServiceCard from "./Service_big_card";

const Service = () =>{
    const Service =[
        {
            title: "Creative Design",
            price: 99,
            des: "test",
            icon: "first",
            img: "/serv1.png"
        },
        {
            title: "Creative Design",
            price: 89,
            des: "test",
            icon: "second",
            img: "/serv2.png"
        },
        {
            title: "Creative Design",
            price: 67,
            des: "test",
            icon: "third",
            img: "/serv3.png"
        },
        {
            title: "Creative Design",
            price: 50,
            des: "test",
            icon: "forth",
            img: "/serv4.png"
        }
    ]
    const [click,setClick] = useState(false);
    // idea ye hai ki absolute kar denge  and scrollback to top page
    const clicked =() =>{
        setClick(true)
    }
    return(
        <section id="service">
            <button 
            className="lg:flex-row flex-col grid grid-cols-2 w-full  gap-6 h-[50rem] pt-32 px-[6%] lg:px-[14%] bg-[#2b2d33] text-white"
            onClick={clicked}
            >
                {Service.map((link,index)=>(
                    <ServCard key={index} title={link.title} price={link.price} des={link.des} icon={link.icon} img={link.img}/>
                ))}
            </button>
        </section>
    )
}
export default Service;