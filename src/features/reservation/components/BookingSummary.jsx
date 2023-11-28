import CartDropdown from "@/components/dropdown/CartDropdown.jsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import dayjs from "dayjs";
const BookingSummary = ({searchedData, isReserved}) => {

    const {totalAmount, totalRooms, selectedRooms} = useSelector(state => state.cartSlice)

    const dateFormat = "DD MMM YYYY"

    const searchedObj = new URLSearchParams(searchedData);
    const startDate = dayjs(searchedObj.get("startDate")).format(dateFormat);
    const endDate = dayjs(searchedObj.get("endDate")).format(dateFormat);
    const adult = parseInt(searchedObj.get('adult'))
    const child = parseInt(searchedObj.get('child'))

    const checkInDate = dayjs(searchedObj.get("startDate")).date();
    const checkOutDate = dayjs(searchedObj.get("endDate")).date();
    const totalNight = checkOutDate - checkInDate;


    return (
        <section className={`lg:max-w-[360px] md:max-w-[279px] w-full flex flex-col gap-6 ${isReserved ? "" : "sticky top-20 self-start"} `} >
            <h2 className={`rf-tlt ${isReserved ? "hidden" : "block"} `} >Booking Summary</h2>
            <div className={` rounded overflow-hidden box-shadow`}>
                {
                    isReserved ? <h3 className={`text-c26 font-medium lg:text-xl bg-white px-6 py-3 border-b border-cD9 `}>
                        Reservation Detail
                    </h3> : <h3 className={`text-cFA px-6 py-3 bg-cC1 lg:text-xl font-medium `} >Your booking details</h3>
                }
                <div className={`p-6 bg-white `} >
                    <div className={`flex items-stretch gap-6`} >
                        <CheckInOut title={"Check-in"} date={startDate} time={"02 : 00"} />
                        <span className={`w-[1px] bg-black/10 self-stretch `} ></span>
                        <CheckInOut title={"Check-out"} date={endDate} time={"12 : 00"} />
                    </div>
                    <div className={`my-6 pb-6 border-b border-black/10`} >
                        <p>Total length of stay :</p>
                        <p className={`font-medium mt-2`}> {totalNight} { totalNight > 1 ? "Nights" : "Night" }  </p>
                    </div>
                    {
                        isReserved ?
                            <div className={`flex flex-col`} >
                                <p>Your selections </p>
                                <p className={`font-medium capitalize mb-2`} > {totalRooms} rooms  for {adult || 0} adults {parseInt(child) > 0 ? `& ${child} children` : ""} </p>
                                {selectedRooms?.map(room => <div key={room.id} className={`flex items-center justify-between`}>
                                    <p> {room.totalRooms} x <span className={`capitalize`}> {room.name}</span></p>
                                </div>)}
                            </div> : <CartDropdown adult={adult} child={child} />
                    }
                    {
                        isReserved ? "" : <Link to={`/rooms?${searchedData}`} className={`text-c18 underline underline-offset-2 mt-3 block w-fit`} >Change your selection</Link>
                    }
                </div>
            </div>
            <div className={`rounded overflow-hidden box-shadow`} >
                <h3 className={`text-c26 px-6 py-2 bg-white lg:text-xl font-medium`} >Your price summary</h3>
                <div className={`p-6 py-3 ${isReserved ? "bg-[#E6FEDB]" : "bg-cE6"}  text-c26`} >
                    <div className={`flex items-center justify-between lg:text-3xl md:text-2xl font-medium mb-2`}>
                        <p>Total</p>
                        <p className={`font-tnr font-bold`} > USD {totalAmount} </p>
                    </div>
                    <p className={`lg:text-sm md:text-xs`}>Included in price : 5% tax and 10% service charge.</p>
                </div>
            </div>
        </section>
    );
};


const CheckInOut = ({title, date, time}) => {
    return <div className={`max-w-[131px] w-full text-sm`} >
        <p className={`mb-2 text-c43 lg:text-base text-sm`} > {title} </p>
        <p className={`text-c26 font-medium lg:text-xl`} > {date} </p>
        <p className={`text-c59 lg:text-base md:text-xs`} > From {time} PM </p>
    </div>
}

export default BookingSummary;
