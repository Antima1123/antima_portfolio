import Image from "next/image"

const Card =(
    {
        img,
        img_1,
        title,
        desc
    }:{
        img: string,
        img_1: string,
        title: string,
        desc: string
    }
)=>{
    return(
        <div className=" lg:w-[20rem] h-[22rem] items-center flex flex-col p-2 gap-8">
            <div className="relative flex w-full justify-center top-10 items-center h-40">
                    <Image src={img} height={45} width={45} alt="target"/>
                    <Image src={img_1} height={90} width={90} alt="circle" className="absolute"/>
            </div>
            <div className=" w-full flex gap-8 flex-col text-white justify-center items-center">
                <div className="text-[20px] font-[600]">{title}</div>
                <div className="lg:w-[18rem] text-center text-[#b9b5c9]">{desc}</div>
            </div>
        </div>
    )

}

export default Card