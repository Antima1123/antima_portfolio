"use client"

import Image from "next/image"

const FirstPage = () => {
    const as = `'` ;
    return (
       <section id="home">
             <div 
            className="-mt-[4rem] h-full"
            style={{backgroundImage: `url('/bg-home.jpg')`,
            backgroundSize: 'cover', // Adjust the background size
            backgroundPosition: 'center', // Adjust the background position
            height: '100vh', // Set the height for the background
            }}>
            <div className="w-full pt-[8rem] md:px-[6%] lg:px-[14%] lg:flex font-sans font-[600] text-white  items-center  justify-center  flex  flex-col md:flex-row">

            <Image src="/annu1.png" height={180} width={180} alt="boy" className="md:hidden flex"/>

                
                <div className="flex flex-col md:gap-4  gap-2 w-full pt-20  items-center md:items-start">
                    <div className="text-[24px]  text-[#f75023]">Hello, I{as}m</div>
                    <div className="md:text-[45px]  text-[35px]  flex gap-3">
                        <div className="flex">
                            <p className=" md:text-[62px]  text-[45px] md:-mt-5  -mt-3">A</p>ntima 
                        </div>
                        <div className="flex">
                            <p className=" md:text-[62px]  text-[45px] md:-mt-5  -mt-3"> S</p>ingh
                        </div>
                    </div>
                    <div className="lg:text-[20px] text-[18px] items-center gap-2 flex  text-white">
                        <p >A</p>
                        <p className="text-[#1cbe59]">Full Stack Web Developer</p>
                        <p>From</p>
                        <p className="text-[#8067f0]">India</p>
                    </div>
                    <div className="text-[16px] w-[70%] sm:w-[46%] md:w-full ">I{as}m creative full stack web developer using nextjs, and I{as}m very passionate and dedicated to my work.</div>
                    <div className="flex pt-2 gap-5 w-full md:justify-start  justify-center items-center">
                        <button className="w-[9rem]  rounded-3xl p-3 bg-[#f75023] hover:bg-transparent border-2 border-red-500 transition-all duration-500">About Me</button>
                        <div>Social links</div>
                    </div>
                </div>
                <div className=" pt-20 w-full items-center md:flex flex-col justify-center relative  hidden">
                    <Image src="/annu1.png" height={320} width={320} alt="boy"/>
                    <Image src="/next.jpg" height={50} width={50} alt="next" className=" absolute rounded-lg top-[7rem] left-[5rem] animate-floating" />
                    <Image src="/tailwind.png" height={50} width={50} alt="tailwind" className=" absolute rounded-lg  top-[11rem] right-[6rem] animate-floating"/>
                    <Image src="/mongo.jpg" height={50} width={50} alt="mongo" className=" absolute rounded-lg bottom-2 left-[13rem] animate-floating"/>
                </div>
            </div>
        </div>
       </section>
    )
}

export default FirstPage