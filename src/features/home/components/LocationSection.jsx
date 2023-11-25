import {SecTitle} from "@/components/index.js";

const LocationSection = () => {
    return (
        <section className={` lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] w-full mx-auto `} >
            <SecTitle title={"explore our location"} />

            <div className={`flex flex-col lg:flex-row items-stretch gap-8`} >
                <div className={` lg:max-w-[360px] w-full flex lg:flex-col md:flex-row flex-col gap-10 `} >
                    <div className={`flex flex-col gap-10 w-full `} >
                        <div  className={`flex flex-col gap-2`} >
                            <h3 className={`common-tlt`} >address</h3>
                            <p  className={`common-desc`} > 78th Street & Sagaing Lan Kwal Street,Chan Mya Thar Si Township,Mandalay,Myanmar </p>
                        </div>
                        <div  className={`flex flex-col gap-1`} >
                            <h3 className={`common-tlt mb-1`} >contact</h3>
                            <p  className={`common-desc`} >+95 9837622099</p>
                            <p  className={`common-desc`} >nextel.mandalay@nextelmandalay.com.mm</p>
                        </div>
                    </div>
                    <div  className={`flex flex-col gap-2 w-full`} >
                        <h3 className={`common-tlt`} >distances</h3>
                        <p  className={`common-desc`} > 5 km form Mahamuni Buddhhist Temple
                            near COCO mini store <br/>
                            6 km from Ocean Super Center
                            10 km from Mandalay Railway Station </p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d339.48697471506443!2d96.0855763478315!3d21.94709444916762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU2JzQ5LjYiTiA5NsKwMDUnMDcuNCJF!5e0!3m2!1sen!2smm!4v1699939523020!5m2!1sen!2smm"
                    allowFullScreen loading="lazy" className={`w-full lg:max-w-[744px] md:h-[475px] lg:h-auto `}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </section>
    );
};

export default LocationSection;
