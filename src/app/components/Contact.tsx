"use client"
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Contact = () =>{

    const router = useRouter();
    const[contact,setContact] = useState(
        {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        }
    )
    const onSubmit = async()=>{
        try {
            const req = await axios.post("/api/contact", contact)
            const response = await req.data.data;
            
            if(response === 'sent'){
                toast.success("Query sent successfully")
                setTimeout(()=> {
                    router.push('/');
                }, 2000)
            }
            if(response === "invalid"){
                toast.error("Please check your input values")
            }

        } catch (error) {
            console.log("error in contact frontend")
        }
    }
    return(
       <section id="contact">
        <div className="px-[6%] lg:px-[14%] w-full lg:h-[55rem] h-[85rem] bg-[#2b2d33] text-white pt-32 gap-24 flex flex-col">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full items-center flex flex-col gap-2"> 
                <div className="text-[20px] text-[#f75023] font-[600]">Contact Me</div>
                <div className="text-[36px] font-[600]">For Inquiries or Discussions</div>
                <div className="w-[50%] text-[#b9b5c9] text-center text-[16px] "> please reach out via email or phone. I look forward to connecting with you.</div>
            </div>

            <div className=" justify-between flex lg:flex-row flex-col lg:gap-0 gap-16">
                <div className="gap-4 lg:w-1/2 w-full flex flex-col">

                    <div className="flex items-center gap-8">
                        <div className="w-[5rem] h-[5rem] bg-[#FFE2D8] rounded-full items-center justify-center flex">
                            <FaLocationDot size={22} color="red"/>
                        </div>
                        <div>
                            <p className="text-[30px] font-[600]">Address</p>
                            <p className="text-[16px] text-[#b9b5c9]">Kanpur, Uttar Pradesh India</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="w-[5rem] h-[5rem] bg-[#DEFBE8] rounded-full items-center justify-center flex">
                            <TbMailFilled size={22} color="green"/>
                        </div>
                        <div>
                            <p className="text-[30px] font-[600]">Email</p>
                            <p className="text-[16px] text-[#b9b5c9]">antima1574@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="w-[5rem] h-[5rem] bg-[#E7EAFF] rounded-full items-center justify-center flex">
                            <FaPhone size={22} color="purple"/>
                        </div>
                        <div>
                            <p className="text-[30px] font-[600]">Phone</p>
                            <p className="text-[16px] text-[#b9b5c9]">+9453151574</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full gap-4 flex flex-col">
                   <div className="flex lg:flex-row flex-col  gap-2 justify-between w-full">
                        <div className="lg:w-[50%] justify-center flex">
                            <input
                            placeholder="Your Name"
                            type="text"
                            required
                            value={contact.name}
                            onChange={(e)=> setContact({...contact,name: e.target.value})}
                            className="border border-opacity-30 border-[#b9b5c9] rounded-2xl px-6 bg-transparent py-4 outline-none w-full placeholder-[#b9b5c9] "
                            />
                        </div>
                        <div className="lg:w-[50%]">
                            <input
                            placeholder="Email"
                            type="email"
                            required
                            value={contact.email}
                            onChange={(e)=> setContact({...contact,email: e.target.value})}
                            className="border border-[#b9b5c9] rounded-2xl px-6 border-opacity-30 bg-transparent py-4 outline-none w-full placeholder-[#b9b5c9]"
                            />
                        </div>
                   </div>

                   <div className="flex lg:flex-row flex-col gap-2 justify-between w-full">
                        <div className="lg:w-[50%]">
                            <input
                            placeholder="Your Phone"
                            type="text"
                            required
                            value={contact.phone}
                            onChange={(e)=> setContact({...contact,phone: e.target.value})}
                            className="border border-[#b9b5c9] rounded-2xl px-6 border-opacity-30 bg-transparent py-4 outline-none w-full placeholder-[#b9b5c9]"
                            />
                        </div>
                        <div className="lg:w-[50%]">
                            <input
                            placeholder="Subject"
                            type="text"
                            required
                            value={contact.subject}
                            onChange={(e)=> setContact({...contact,subject: e.target.value})}
                            className="border border-[#b9b5c9] rounded-2xl px-6 border-opacity-30 bg-transparent py-4 outline-none w-full placeholder-[#b9b5c9]"
                            />
                        </div>
                   </div>

                   <div className=" w-full flex-1 flex h-48">
                            <textarea
                            placeholder="Write your message here"
                            required
                            value={contact.message}
                            onChange={(e)=>setContact({...contact,message: e.target.value})}
                            className="border text-neutral-100 text-opacity-70 text-[18px] h-48 border-opacity-30 border-[#b9b5c9] rounded-2xl px-6 py-4 bg-transparent outline-none w-full placeholder-[#b9b5c9] Border-Opacity-30"
                            />
                     </div>
                     <button 
                     className="w-[11rem]  font-[500] rounded-3xl p-3 bg-[#f75023] hover:bg-transparent border-2 border-red-500 transition-all duration-500"
                     onClick={onSubmit}
                     >Submit Now</button>

                </div>
            </div>
        </div>
       </section>
    )
}
export default Contact;



