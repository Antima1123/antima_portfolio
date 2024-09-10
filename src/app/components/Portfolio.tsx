import Image from "next/image"
import Skill from "./Skill_level"

const Portfolio = () => {
    return(
        <section id="portfolio">
        <div className=" bg-[#2b2d33] pt-32 text-white px-[6%] lg:px-[14%] w-full flex flex-col justify-between gap-32 ">
          
            <div className="w-full items-center flex flex-col gap-2">
                <div className="text-[20px] text-[#f75023] font-[600]">Portfolio</div>
                <div className="text-[36px] font-[600]">My Amazing Works</div>
                <div className="w-[50%] text-[#b9b5c9] text-center text-[16px] ">Most common methods for designing websites that work well on desktop is responsive and adaptive design</div>
            </div>
            
            <div className=" flex items-center">
                    <div className="w-1/2 items-start flex flex-col gap-2"> 
                        <div className="text-[20px] text-[#f75023] font-[600]">Design is Life</div>
                        <div className="text-[36px] font-[600]">I Develop Skills Regularly to Keep Me Update</div>
                        <div className=" text-[#b9b5c9] text-[16px] ">Most common methods for designing websites that work well on desktop is responsive and adaptive design</div>
                        <div>
                            <Skill/>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <Image src="/port.jpg " alt="image" height={400} width={400}/>
                    </div>
            </div>

        </div>
        </section>
    )
}
export default Portfolio