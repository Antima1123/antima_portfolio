import Image from "next/image"
import Skill from "./Skill_level"

const Portfolio = () => {

    const skills = [
        { name: 'Next.js', level: 95, color: '#f75023' },
        { name: 'Tailwind', level: 93, color: '#1cbe59' },
        { name: 'TypeScript', level: 90, color: '#8067f0' },
        { name: 'Backend', level: 89, color: '#1cbe59' },
        // Add more skills as needed
      ];

    return(
        <section id="portfolio">
        <div className=" bg-[#2b2d33] pt-32 text-white px-[6%] lg:px-[14%] w-full flex flex-col gap-32 z-[88]">
          
            <div className="w-full items-center flex flex-col gap-2">
                <div className="text-[20px] text-[#f75023] font-[600]">Portfolio</div>
                <div className="text-[36px] font-[600]">My Amazing Works</div>
                <div className="w-[80%] text-[#b9b5c9] text-center text-[16px] ">I build user-friendly, responsive, and adaptive websites that provide seamless experiences across all devices.</div>
            </div>
            
            <div className=" flex lg:flex-row flex-col items-center w-full justify-between gap-8 lg:gap-0 ">
                    <div className="lg:w-1/2 items-center text-center lg:text-start lg:items-start flex flex-col  gap-16"> 
                        <div className=" w-[80%] ">
                            <p className="text-[20px] text-[#f75023] font-[600]">Develop is Life</p>
                            <p className="text-[36px] font-[600]">I Develop Skills Regularly to Keep Me Update</p>
                            <p className=" text-[#b9b5c9] text-[16px] pt-2">Constantly learning and evolving, I stay ahead of the curve by regularly updating my skills to deliver the latest in full-stack development with Next.js.</p>
                        </div>
                            <section className=" flex flex-col w-full items-center lg:justify-start">
                                <div className="gap-10 flex flex-col w-[28rem]">
                                    {skills.map((skill, index) => (
                                    <Skill key={index} name={skill.name} level={skill.level} color={skill.color} />
                                    ))}
                                </div>
                            </section>
                    </div>

                    <div className="lg:w-1/2 flex justify-start lg:justify-end">
                        <img src="/port.jpg " alt="image" height={400} width={400} className="object-contain lg:w-[80%] w-[40%]"/>
                    </div>
            </div>

        </div>
        </section>
    )
}
export default Portfolio