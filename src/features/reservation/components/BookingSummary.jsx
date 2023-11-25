import CartDropdown from "@/components/dropdown/CartDropdown.jsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import dayjs from "dayjs";
const BookingSummary = ({searchedData}) => {

    const {totalAmount} = useSelector(state => state.cartSlice)

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
        <section className={`max-w-[360px] w-full flex flex-col gap-6 sticky top-20 self-start `} >
            <h2 className={`rf-tlt`} >Booking Summary</h2>
            <div className={` rounded overflow-hidden box-shadow`}>
                <h3 className={`text-cFA px-6 py-3 bg-cC1 text-xl font-medium `} >Your booking details</h3>
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
                    <CartDropdown adult={adult} child={child} />
                    <Link to={`/rooms?${searchedData}`} className={`text-c18 underline underline-offset-2 mt-3 block w-fit`} >Change your selection</Link>
                </div>
            </div>
            <div className={`rounded overflow-hidden box-shadow`} >
                <h3 className={`text-c26 px-6 py-2 bg-white text-xl font-medium`} >Your price summary</h3>
                <div className={`p-6 py-3 bg-cE6 text-c26`} >
                    <div className={`flex items-center justify-between text-3xl font-medium mb-2`}>
                        <p>Total</p>
                        <p className={`font-tnr font-bold`} > USD {totalAmount} </p>
                    </div>
                    <p className={`font-sm`}>Included in price : 5% tax and 10% service charge</p>
                </div>
            </div>
        </section>
    );
};


const CheckInOut = ({title, date, time}) => {
    return <div className={`max-w-[131px] w-full text-sm`} >
        <p className={`mb-2 text-c43`} > {title} </p>
        <p className={`text-c26 font-medium text-xl`} > {date} </p>
        <p className={`text-c59`} > From {time} PM </p>
    </div>
}

export default BookingSummary;
