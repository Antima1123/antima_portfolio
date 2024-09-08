import Image from "next/image"
import Card from "./Card"

const SecondPage = () =>{
    return(
        <div className="bg-[#2b2d33]  flex flex-col px-[4%] lg:px-[14%] pt-40">
            <div className="lg:flex lg:flex-row md:flex-col  justify-between">
                <Card 
                    img= "/target.png"
                    img_1 = "/circle1.png"
                    title = "Pixel Perfect"
                    desc = "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
                />
                <Card 
                    img= "/brush.png"
                    img_1 = "/circle2.png"
                    title = "High Quality"
                    desc = "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
                />
                <Card 
                    img= "/light.png"
                    img_1 = "/circle3.png"
                    title = "Awesome Idea"
                    desc = "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
                />
            </div>

            <div className="lg:flex lg:flex-row flex-col w-full justify-center lg:justify-between items-center pt-40 gap-24">
                <div className="lg:w-1/2 w-full lg:justify-start flex justify-center ">
                    <Image src='/2page.jpg' height={450} width={450} alt="pageimg" className="lg:w-[500px] w-[300px] object-contain"/>
                </div>

                <div className="lg:w-1/2 w-full lg:text-start text-center items-center lg:items-start flex flex-col gap-8">
                   <div className="flex flex-col gap-2 w-full lg:w-[85%] font-[600] ">
                        <div className="text-[20px] text-[#f75023]">I'm a Designer</div>
                        <div className="text-[36px]  ">I Can Design Anything You Want</div>
                   </div>
                    <div className="text-[#b9b5c9] text-[16px] w-full lg:w-[90%]">Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</div>
                    <button className="w-[8rem]  mt-2 rounded-3xl p-3 bg-[#f75023] hover:bg-transparent border-2 border-red-500 transition-all duration-500">Hire me</button>
                </div>
            </div>
        </div>
    )
}

export default SecondPage