import ServCard from "./Service_card";

const Service = () =>{
    const Service =[
        {
            title: "Creative Design",
            price: 99,
            des: "test",
            icon: "first",
            img: "/serv1.png"
        },
        {
            title: "Creative Design",
            price: 89,
            des: "test",
            icon: "second",
            img: "/serv2.png"
        },
        {
            title: "Creative Design",
            price: 67,
            des: "test",
            icon: "third",
            img: "/serv3.png"
        },
        {
            title: "Creative Design",
            price: 50,
            des: "test",
            icon: "forth",
            img: "/serv4.png"
        }
    ]
    return(
        <section id="service">
            <div className="lg:flex-row flex-col grid grid-cols-2  gap-6 h-[50rem] pt-32 px-[6%] lg:px-[14%] bg-[#2b2d33] text-white">
                {Service.map((link)=>(
                    <ServCard title={link.title} price={link.price} des={link.des} icon={link.icon} img={link.img}/>
                ))}
            </div>
        </section>
    )
}
export default Service;