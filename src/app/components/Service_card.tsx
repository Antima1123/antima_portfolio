import Image from "next/image";
import { title } from "process";
import { FaReact } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";


import { string } from "zod";

interface Service{
    title: string,
    price: number,
    des: string ,
    icon: string,
    img: string
}
const ServCard: React.FC<Service> = ({title, price,des, icon, img}) =>{
    return(
        <div className="bg-[#4b4f5c] lg:w-[33rem] w-full font-sans h-[23rem] rounded-2xl p-16 flex ">
           <div className="w-full h-full flex justify-between">
                <div className="w-32 h-32 justify-center flex rounded-full items-center relative">
                    <Image src={img} alt="" height={100} width={100}/>
                    { icon === "first" ?<FaReact size={50} color="black" className="absolute"/>
                    : icon === "second" ? <BiSolidUserDetail size={50} color="black" className="absolute"/>
                    : icon === "third" ? <AiFillProduct size={50} color="black" className="absolute"/>
                    : icon === "forth" ? <CgWebsite size={50} color="black" className="absolute"/>
                    : ""
                    }
                </div>

                <div className="w-2/3 gap-2 flex flex-col pl-4">
                    <div className=" text-[28px] font-[600]" >{title}</div>
                    <div className="flex gap-2 items-center">
                        <p className="text-[18px] font-[600]">Starts from</p>
                        <p className="text-[20px] font-[600] text-[#f75023]">${price}</p>
                    </div>
                    <div className="text-[18px] font-[600] text-[#b9b5c9]">{des}</div>
                </div>
            </div>
           </div>
    )
}
export default ServCard;