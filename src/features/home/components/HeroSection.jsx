
import heroImg from "@/assets/images/img_hero.png"
import SelectBox from "@/features/home/components/SelectBox.jsx";

const HeroSection = () => {
    return (
        <section className={` bg-c14 relative z-0`} >
            <span className={`gradient-bg`}></span>
            <div className={` lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] mx-auto w-full lg:pt-[112px] lg:pb-[245px] md:pt-[87px] md:pb-[172px] relative z-[1] `}>
                <div className={` lg:max-w-[555px] md:max-w-[44.36vw] w-full `} >
                    <h2 className={` lg:text-[140px] md:text-[108px] lg:leading-[160px] md:leading-[100px] text-cC1 common-text my-0 `} >find</h2>
                    <h3 className={`lg:text-[80px] lg:leading-[86px] md:text-[52px] md:leading-[60px] text-cFA lg:-mt-8 common-text `} >your next stay</h3>
                    <p className={` text-c8C lg:mt-11 md:mt-6 `} >
                        We can&apos;t wait to  provide you with a memorable stay that you&apos;ll cherish. Book your stay with us today, and experience the perfect blend of luxury, convenience, and warm hospitality.
                    </p>
                </div>
                <div className={` absolute lg:right-[152px] md:right-8 lg:top-11 md:top-14 lg:max-w-[552px] md:max-w-[45vw] w-full`} >
                    <img src={heroImg} alt={"Hero Section Image"} />
                </div>
            <SelectBox/>
            </div>
        </section>
    );
};

export default HeroSection;
