import RoomFacilitesModal from "@/features/rooms/components/RoomFacilitesModal.jsx";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addRoomToCart} from "@/core/global/cartSlice.js";

const RoomCardLarge = ({room, selectedRoomsAmount, availableRooms}) => {

    const {selectedRooms, totalRooms} = useSelector(state => state.cartSlice);

    const {roomType, pricePerNight, id, backdrop, amenities, totalRoom, size, maximumCapacity} = room;

    const isSelectedRoom = selectedRooms?.find(room => room.id === id);

    const roomDetail = {
        size,
        bedType : "twin",
        occupancy : maximumCapacity,
        amenities: amenities?.slice(0, 3)
    }

    const dispatch = useDispatch()
    const onRoomAdded = (value) => {
        dispatch(addRoomToCart({totalRooms : value, ...room}))
    }

    const disabledOptions = (selectedAmount) => {
        const result = (selectedAmount > selectedRoomsAmount && isSelectedRoom?.id !== id) || (selectedAmount > selectedRoomsAmount - totalRooms && isSelectedRoom?.id !== id) || ( selectedAmount > selectedRoomsAmount && isSelectedRoom?.id === id) || ( selectedAmount > selectedRoomsAmount - totalRooms + isSelectedRoom?.totalRooms && isSelectedRoom?.id === id)
        return result
    }

    const roomsOptions = new Array(totalRoom + 1).fill(null).map((_, index) => {
        return {
            key : index,
            label : String(index),
            value : index,
            disabled : disabledOptions(index)
        }
    })

    return (
        <section className={` border border-cD9 lg:max-w-[838px] w-full box-shadow `}>
            <h2 className={`px-6 py-4 font-tnr text-2xl capitalize`}> {roomType} </h2>
            <div className={` bg-cD9 p-4 relative `} >

                {/*ribbon*/}
                <div className={`ribbon`} >
                    <p className={` font-tnr font-bold text-2xl text-c14 bg-cFA py-2 px-3 rounded-t `} > USD {pricePerNight} <span className={` text-base font-grm font-normal `}> / per night </span> </p>
                    <p className={`text-cFA font-grm bg-cF5 rounded-bl `} > Only <span className={`font-tnr text-xl font-bold`} >{totalRoom}</span> rooms left </p>
                </div>

                <img src={backdrop} alt={roomType || "Room Image"}  className={`w-full object-cover`} />
                <div className={`mt-2 flex gap-2  ` } >
                    {/*room details*/}
                    <div className={` lg:max-w-[246px] w-full flex flex-col gap-2 `} >
                        <h3 className={`capitalize font-tnr text-xl font-bold text-cFA bg-cC1 p-2`} > room details </h3>
                        <div className={` flex-1 flex flex-col gap-2 bg-cFA p-2`} >
                                <span className={`text-c26 text-sm`}>Your room includes : </span>
                                <div className={`flex flex-col gap-2`} >
                                    {
                                        Object.entries(roomDetail).map((item, index) => <OverviewOpt key={index}  title={item[0]} value={item[1]} />)
                                    }
                            </div>
                            <RoomFacilitesModal amenities={amenities} />
                        </div>
                    </div>

                    {/*payment & cancellation*/}
                    <div className={` lg:max-w-[246px] w-full flex flex-col gap-2`} >
                        <h3 className={`capitalize font-tnr text-xl font-bold text-cFA bg-cC1 p-2`} > Payment & Cancellation </h3>
                        <div className={`bg-cFA p-2 flex-1 `} >
                            <div>
                                <p className={`text-c26 font-tnr font-bold mb-2`}> Payment </p>
                                <div className={` flex items-start gap-1  `} > <span className={`material-symbols-rounded text-[#237804] `}> check_circle </span>
                                    <p>Full payment is required within 24 hours of reservation.</p>
                                </div>
                            </div>
                            <div className={`mt-4`} >
                                <p className={`text-c26 font-tnr font-bold mb-2`}> Cancellation </p>
                                <div className={` flex items-start gap-1  `} > <span className={`material-symbols-rounded text-[#237804] `}> check_circle </span>
                                    <p>Non-refundable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                {/*  Pricing  */}
                    <div className={` lg:max-w-[172px] w-full flex flex-col gap-2`} >
                        <h3 className={`font-tnr text-xl font-bold text-cFA bg-cC1 p-2`} > Price for (2) night </h3>
                        <div className={`bg-cFA p-2 flex-1 `} >
                           <p className={`text-c14 font-tnr text-xl font-bold`} >
                               USD {pricePerNight * 2}
                           </p>
                            <p className={` text-c59 text-sm `} > included taxes & charges </p>
                        </div>
                    </div>

                    {/*  rooms amount  */}
                    <div className={` lg:max-w-[118px] w-full flex flex-col gap-2`} >
                        <h3 className={`font-tnr text-xl font-bold text-cFA bg-cC1 p-2`} > Select room </h3>
                        <div className={`bg-cFA p-2 flex-1 `} >
                            <Select options={roomsOptions} onChange={onRoomAdded} className={`w-full z-10 `} value={isSelectedRoom?.totalRooms || 0} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const OverviewOpt = ({ title, value }) => {

    if(Array.isArray(value)){
        return (<div className={` flex items-start gap-1  `} > <span className={`material-symbols-rounded text-[#237804] `}> check_circle </span> <div>
            {value?.map((item, index) => <span key={item?.id} className={` capitalize `} > {item?.name} {index + 1 < value?.length ? "," : "" }  </span>)}
        </div>
        </div>)
    }

    return (<div className={` flex items-start gap-1  `} > <span className={`material-symbols-rounded text-[#237804] `}> check_circle </span> <div>
        <span className={`font-medium capitalize `} > {title} </span> : <span> {value} </span>
        </div>
        </div>)

}

export default RoomCardLarge;
