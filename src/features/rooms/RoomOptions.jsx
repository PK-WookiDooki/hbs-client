import RoomCardLarge from "@/features/rooms/components/RoomCardLarge.jsx";
import {useSelector} from "react-redux";
import AdvertText from "@/features/rooms/components/AdvertText.jsx";
import Cart from "@/features/rooms/components/Cart.jsx";
import BgCarousel from "@/features/rooms/components/BgCarousel.jsx";
import {useLocation} from "react-router";
import dayjs from "dayjs";
import RoomUpdateSelectBox from "@/features/rooms/components/RoomUpdateSelectBox.jsx";
const RoomsList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sDate = searchParams.get("startDate");
    const eDate = searchParams.get("endDate");
    const room = searchParams.get("room")
    const adult = searchParams.get("adult")
    const child = searchParams.get("child")

    const searchedOpt = { startDate : dayjs(sDate),
        endDate : dayjs(eDate),
        room : parseInt(room),
        adult : parseInt(adult),
        child : parseInt(child)}

    const {rooms} = useSelector(state => state.roomsSlice)

    return (
        <section>
            <div className={`relative`} >
                <BgCarousel/>
                <RoomUpdateSelectBox searchedData={searchedOpt} />
            </div>
            <div className={` lg:px-[10.83%] md:px-[4.16vw] px-5 max-w-[1440px] mx-auto w-full mt-14 pb-12 relative `} >
                <AdvertText/>
                <div className={`flex flex-col lg:flex-row items-start gap-6 mt-6 `} >
                    <div className={`flex flex-col gap-6 w-full `} >
                        {
                            rooms?.map(r => <RoomCardLarge key={r?.type.id} room={r.type} selectedRoomsAmount={room} availableRooms={r.available} />)
                        }
                    </div>
                    <Cart searchedData={searchParams.toString()} adult={adult} child={child} />
                </div>
            </div>
        </section>
    );
};


export default RoomsList;
