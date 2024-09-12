import Image from "next/image"
import Card from "./Card"

const SecondPage = () =>{
    const as = `'`;
    return(
        <div className="bg-[#2b2d33]  flex flex-col px-[4%] lg:px-[14%] pt-32">
            <div className="lg:flex lg:flex-row md:flex-col  justify-between">
                <Card 
                    img= "/target.png"
                    img_1 = "/circle1.png"
                    title = "Pixel Perfect"
                    desc = "Building flawless, pixel-perfect user interfaces with Next.js, ensuring every detail aligns with your vision."
                />
                <Card 
                    img= "/brush.png"
                    img_1 = "/circle2.png"
                    title = "High Quality"
                    desc = "Delivering high-quality, scalable full-stack solutions with Next.js, combining performance and reliability."
                />
                <Card 
                    img= "/light.png"
                    img_1 = "/circle3.png"
                    title = "Awesome Idea"
                    desc = "Transforming innovative ideas into robust full-stack applications with creative and efficient Next.js development."
                />
            </div>

            <section id="about">
            <div className="lg:flex lg:flex-row flex-col w-full justify-center lg:justify-between items-center pt-40 gap-24">
                <div className="lg:w-1/2 w-full lg:justify-start flex justify-center ">
                    <Image src='/2page.jpg' height={450} width={450} alt="pageimg" className="lg:w-[500px] w-[300px] object-contain"/>
                </div>

                <div className="lg:w-1/2 w-full lg:text-start text-center items-center lg:items-start flex flex-col gap-8">
                   <div className="flex flex-col gap-2 w-full lg:w-[85%] font-[600] ">
                        <div className="text-[20px] text-[#f75023]">I{as}m a Developer</div>
                        <div className="text-[36px] text-white ">I Can Build Anything You Want</div>
                   </div>
                    <div className="text-[#b9b5c9] text-[16px] w-full lg:w-[90%]">Hello there! I{as}m a web Developer, As a full-stack developer specializing in Next.js, I have the skills and creativity to bring your ideas to life, no matter how complex or ambitious. From dynamic web applications to scalable back-end systems, I deliver robust, high-performance solutions tailored to your needs. Let’s turn your vision into reality with clean, efficient code and a focus on user experience.</div>
                    <button className="w-[8rem]  mt-2 rounded-3xl p-3 bg-[#f75023] hover:bg-transparent border-2 text-white border-red-500 transition-all duration-500">Hire me</button>
                </div>
            </div>
            </section>
        </div>
    )
}

export default SecondPage