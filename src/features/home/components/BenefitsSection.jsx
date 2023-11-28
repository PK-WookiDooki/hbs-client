import receptionImg from "@/assets/images/img_reception.png"
const BenefitsSection = () => {
    return (
        <section className={` lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] w-full mx-auto mt-9 `} >
            <div className={`flex lg:gap-6 md:gap-4 items-center `} >
                <img src={receptionImg} alt={receptionImg || "Hotel Reception"} className={`max-w-[650px] md:max-w-[475px] w-full`} />
                <div>
                    <h3 className={` capitalize font-tnr text-c26 lg:text-5xl md:text-3xl lg:leading-[66px] md:leading-10 mb-4 `} >benefits of choosing nextel mandalay </h3>
                    <Benefit title={"best breakfast"} desc={"Indulge in the art of breakfast at our hotel, where mornings are transformed into culinary delights."} list={"01"} />
                    <Benefit title={"parking area"} desc={"Convenience meets peace of mind at our hotel's dedicated parking area."} list={"02"} />
                    <Benefit title={"24 hours electricity"} desc={"Experience the ultimate in convenience and comfort with our 24-hour electricity service at our hotel."} list={"03"} />
                </div>
            </div>
        </section>
    );
};

const Benefit = ({list, title, desc}) => {
    return <div className={`flex lg:gap-4 md:gap-2 lg:mt-10 md:mt-7 `}>
       <div className={`relative text-end lg:min-w-[76px] md:min-w-[60px] self-start lg:h-[76px] md:h-[62px] z-0 `} >
           <span className={`lg:text-[50px] md:text-4xl lg:leading-[55px] md:leading-[46px] text-c26 font-tnr z-10`}>
            {list}
            </span>
           <span className={`bg-cC1 aspect-square lg:w-12 md:w-10 rounded-bl-full absolute left-0 bottom-0 -z-[1] `}>
           </span>
       </div>
        <div>
            <h2 className={`lg:text-3xl md:text-xl font-bold text-c26 capitalize font-tnr`}> {title} </h2>
            <p className={`text-c43 lg:text-base md:text-xs`}> {desc} </p>
        </div>
    </div>
}

export default BenefitsSection;
