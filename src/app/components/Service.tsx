import ServCard from "./Service_card";

const Service = () =>{
    return(
        <section id="service">
            <div className="lg:flex-row flex-col grid grid-cols-2  gap-6 h-[50rem] pt-32 px-[6%] lg:px-[14%] bg-[#2b2d33] text-white">
                <ServCard/>
                <ServCard/>
                <ServCard/>
                <ServCard/>
            </div>
        </section>
    )
}
export default Service;