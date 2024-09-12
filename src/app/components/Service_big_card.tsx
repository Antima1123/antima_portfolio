import Image from "next/image"

const ServiceCard =()=>{
    return (
        <div className="bg-gray-200 font-sans text-white  flex  ">
            <div className=" h-[40rem] w-[55rem] bg-[#34353a] p-16 overflow-y-scroll flex flex-col">
                <div className="w-full flex">
                    <Image src="/service.jpg" alt="image" height={1000} width={500} className=" object-cover content-center w-full h-80"/>
                </div>
                <div className="gap-3 flex flex-col">
                    <p className="text-[26px] font-[600]">Creative Design</p>
                    <p>Starts from $99</p>
                    <h6>
                        Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
                        In today&apos;s digital world, your website is the first interaction consumers have with your business. That&apos;s why almost 95 percent of a user&apos;s first impression relates to web design. It&apos;s also why web design services can have an immense impact on your company&apos;s bottom line.
                        That&apos;s why more companies are not only reevaluating their website&apos;s design but also partnering with Kura, the web design agency that&apos;s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we&apos;re confident we can design a custom website that drives sales for your unique business.
                    </h6>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard
