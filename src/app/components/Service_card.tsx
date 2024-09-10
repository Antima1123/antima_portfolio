import Image from "next/image";
import { FaReact } from "react-icons/fa";

const ServCard = () =>{
    return(
        <div className="bg-[#3f4453] lg:w-[33rem] w-full font-sans h-[23rem] rounded-2xl p-16 flex ">
           <div className="w-full h-full flex gap-8 ">
                <div className="w-32 h-32 justify-center flex bg-red-200 rounded-full items-center">
                    <FaReact size={50} color="red"/>
                    </div>

                    <div className="w-2/3 gap-2 flex flex-col">
                        <div className=" text-[28px] font-[600]" >Creative Design </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-[18px] font-[600]">Starts from</p>
                            <p className="text-[20px] font-[600] text-[#f75023]">$99</p>
                        </div>
                        <div className="text-[18px] font-[600] text-[#b9b5c9]">web design refers to the design of website that are displayed on the internet. It usually refers to the user experience aspects of website development</div>
                    </div>
                </div>
           </div>
    )
}
export default ServCard;