import {SecTitle} from "@/components/index.js";
import ServicesList from "@/features/home/components/ServicesList.jsx";

// services
const servicesListOne = ["spa", "outdoor pool", "conference/meeting facilities", "medical services", "air-conditioning", "security"]

const servicesListTwo = ["gym", "concierge", "24-hour reception", "restaurants", "cafe"]

const servicesListThree = ["events", "private car parking", "room service", "high-speed wifi", "laundry"]

const ServicesSection = () => {
    return (
        <section className={` lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] w-full mx-auto `} >
            <SecTitle title={"services and facilities"} />
            <div className={` grid grid-cols-3 gap-10 `} >
               <ServicesList services={servicesListOne} />
                <ServicesList services={servicesListTwo} />
                <ServicesList services={servicesListThree} />

            </div>
        </section>
    );
};

export default ServicesSection;
