import {Link} from "react-router-dom";
const RoomCard = ({room}) => {

    const {poster, name, pricePerNight, id} = room
    return (
        <section className={`room-card group`} >
            <img src={poster} alt={poster || "Room Image"} className={` group-hover:scale-[1.2] duration-300 `}  />
            <div className={` absolute p-6 rounded-tr-[60px] bg-white bottom-0 left-0 w-full flex flex-col gap-2`}>
                <h3 className={`text-c26 text-xl font-tnr capitalize `} > {name} </h3>
                <p className={` text-3xl text-c14 font-bold font-tnr py-1`} >  USD {pricePerNight} <span className={` text-base font-grm font-normal `}> / per night </span> </p>
                <Link to={`/rooms/${id}`} preventScrollReset={true} className={` text-[#1A73E8] w-fit hover:underline duration-300 font-sans`} >See detail</Link>
            </div>
        </section>
    );
};

export default RoomCard;
