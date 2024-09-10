import Image from "next/image"
import Skill from "./Skill_level"

const Portfolio = () => {

    const skills = [
        { name: 'JavaScript', level: 90, color: '#f75023' },
        { name: 'TypeScript', level: 85, color: '#1cbe59' },
        { name: 'React', level: 93, color: '#8067f0' },
        { name: 'Next.js', level: 80, color: '#1cbe59' },
        // Add more skills as needed
      ];

    return(
        <section id="portfolio">
        <div className=" bg-[#2b2d33] pt-32 text-white px-[6%] lg:px-[14%] w-full flex flex-col gap-32 z-[88]">
          
            <div className="w-full items-center flex flex-col gap-2">
                <div className="text-[20px] text-[#f75023] font-[600]">Portfolio</div>
                <div className="text-[36px] font-[600]">My Amazing Works</div>
                <div className="w-[50%] text-[#b9b5c9] text-center text-[16px] ">Most common methods for designing websites that work well on desktop is responsive and adaptive design</div>
            </div>
            
            <div className=" flex lg:flex-row flex-col items-center w-full justify-between gap-8 lg:gap-0 ">
                    <div className="lg:w-1/2 items-start flex flex-col  gap-16"> 
                        <div className=" w-[80%] ">
                            <p className="text-[20px] text-[#f75023] font-[600]">Design is Life</p>
                            <p className="text-[36px] font-[600]">I Develop Skills Regularly to Keep Me Update</p>
                            <p className=" text-[#b9b5c9] text-[16px] ">Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                        </div>
                            <section className="py-6 flex flex-col w-full justify-start">
                                <div className="gap-10 flex flex-col w-[28rem]">
                                    {skills.map((skill, index) => (
                                    <Skill key={index} name={skill.name} level={skill.level} color={skill.color} />
                                    ))}
                                </div>
                            </section>
                    </div>

                    <div className="lg:w-1/2 flex justify-start lg:justify-end">
                        <Image src="/port.jpg " alt="image" height={400} width={400} className="object-contain lg:w-[80%] w-[40%]"/>
                    </div>
            </div>

        </div>
        </section>
    )
}
export default Portfolio