import SuccessAlert from "@/features/reservation/components/SuccessAlert.jsx";
import BookingSummary from "@/features/reservation/components/BookingSummary.jsx";
import HotelLocation from "@/features/reservation/components/HotelLocation.jsx";
import {Link, useLocation} from "react-router-dom";
import UserInformation from "@/features/reservation/components/UserInformation.jsx";

const ReservationDetail = () => {

    const reservationsData = useLocation().state;
    const userData = reservationsData?.formData;

    const onDownload = () => {
        window.print();
    }

    return (
        <section className={`lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] mx-auto w-full lg:mt-14 md:mt-5 pb-10`}>
            <div className={`flex gap-6 items-start`} >
                <div className={`w-full flex flex-col gap-6`}>
                    <SuccessAlert/>
                    <UserInformation userData={userData} />
                    <HotelLocation/>
                    <p className={`text-c26`}>
                        Your booking is with <span className={`font-medium`}>Nextel Mandalay Hotel </span> directly and by completing this booking you agree to
                        <span className={`text-[#096DD9] font-medium underline`}> the booking conditions</span>, <span className={`text-[#096DD9] font-medium underline`}>general terms</span>, and <span className={`text-[#096DD9] font-medium underline`}>privacy policy</span>.
                    </p>
                </div>
                <div className={`w-full max-w-[360px]`}>
                    <BookingSummary searchedData={reservationsData?.searchedData} isReserved={true}/>
                    <div className={`flex flex-col gap-4 mt-6`}>
                        <button onClick={onDownload} className={` h-12 w-full text-cFA bg-cC1 `}>Download Receipt</button>
                        <Link to={"/result"} className={` h-12 w-full text-c26 border border-c26 flex items-center justify-center `}>Done</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationDetail;
