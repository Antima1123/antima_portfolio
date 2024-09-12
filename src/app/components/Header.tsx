"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header: React.FC =()=>{
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickbar,setClickbar] = useState(1)

  // smooth scrolling 
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };


    //sticky Header
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      if (window.scrollY > 130) {
        setIsScrolled(true);
      } else {
        // If at the top, set isScrolled to false
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className="sticky top-0 z-50 flex w-full">
            <div className={`${isScrolled ? 'bg-[#2b2d33]':'bg-transparent'} transition-all duration-500 ease-in-out  hidden md:flex items-center w-full h-[4rem] justify-between md:px-[6%] lg:px-[14%]`}>
                <div className="h-full w-full items-center flex">
                    <Image src="/logo.png" height={100} width={100} alt="logo"/>
                </div>

                <div className="flex h-full items-center md:gap-6 lg:gap-8 text-white text-[16px] font-sans font-[600]">
                    <button 
                    className={clickbar===1 ? "text-[#f75023]" : ""} 
                    onClick={()=>{setClickbar(1); scrollToSection('home')}}
                    >
                    Home
                    </button>

                    <button 
                    className={clickbar===2 ? "text-[#f75023]" : ""} 
                    onClick={()=>{setClickbar(2); scrollToSection('about')}}
                    >
                    About
                    </button>


                    <button 
                    className={clickbar===3 ? "text-[#f75023]" : ""} 
                    onClick={()=>{setClickbar(3); scrollToSection('portfolio')}}
                    >
                    Portfolio
                    </button>

                    <button
                    className={clickbar===4 ? "text-[#f75023]" : ""}
                    onClick={()=>{setClickbar(4); scrollToSection('service')}}
                    >
                    Service
                    </button>

                    <button 
                    className={clickbar===5 ? "text-[#f75023]" : ""} 
                    onClick={()=>{setClickbar(5)}}
                    >
                    Blog
                    </button>

                    <button 
                    className={clickbar===6 ? "text-[#f75023]" : ""}
                    onClick={()=>{setClickbar(6)}}
                    >
                    Contact
                    </button>

                  <Link href={"cv.pdf"}>
                  <button className="lg:w-[9rem] md:w-[7rem] lg:text-[16px] md:text-[14px] items-center justify-center p-2 flex flex-1 rounded-3xl border-2 border-[#f75023] hover:bg-[#f75023] transition-all duration-500">Download CV</button>
                  </Link>                    
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Header