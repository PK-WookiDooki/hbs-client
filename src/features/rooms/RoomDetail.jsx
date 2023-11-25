import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import RoomOverview from "@/features/rooms/components/RoomOverview.jsx";
import RoomFacilties from "@/features/rooms/components/RoomFacilties.jsx";

const RoomDetail = () => {
    const {roomId} = useParams();
    const {rooms} = useSelector(state => state.roomsSlice)

    const roomDetail = rooms?.find(room => room?.type?.id === parseInt(roomId) )
    const currentRoom = roomDetail?.type;

    if(!currentRoom){
        return <div className={`flex items-center justify-center flex-1 `} >
            <h3 className={`text-2xl font-medium`} >There is no room with id {roomId}</h3>
        </div>
    }


    return (
        <section className={`pb-12`} >
            <div className={`relative`}>
                <img src={currentRoom?.backdrop} alt={currentRoom?.name} className={`w-full lg:h-auto md:h-[500px] object-cover  object-center `}  />
                <div className={` text-cFA font-tnr absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-8 bg-black/10 backdrop-blur text-center`}>
                    <h2 className={` text-4xl mb-1 capitalize `} > {currentRoom?.name} </h2>
                    <p className={"font-grm"} > From<span className={`font-bold font-tnr text-xl`} >  USD {currentRoom?.pricePerNight} </span> / per night  </p>
                </div>
            </div>

            <div className={`lg:mt-[100px] md:mt-9 max-w-[1440px] w-full mx-auto lg:px-[10.83%] md:px-[4.16vw] `} >
                <div className={` flex lg:flex-row flex-col lg:gap-10 md:gap-8 `} >
                    <RoomOverview room={currentRoom} />
                    <span className={` block w-[2px] bg-black/[0.06] self-stretch `} ></span>
                    <RoomFacilties amenities={currentRoom?.amenities} />
                </div>
                <span className={`h-[1px] bg-black/[0.06] block lg:my-10 md:my-6`} ></span>
                <div>
                    <h3 className={`font-tnr text-3xl font-bold mb-8 text-c26 `}>Description</h3>
                    <p className={`text-c43`} > {currentRoom?.description} </p>
                </div>

                <Link to={`/rooms`} className={` capitalize px-5 h-14 bg-cC1 text-white rounded-sm mt-10 ml-auto w-fit flex items-center justify-center `} >discover more rooms</Link>

            </div>


        </section>
    );
};

export default RoomDetail;
