import Facility from "@/features/rooms/components/Facility.jsx";

const RoomFacilities = ({amenities}) => {
    return (
        <section className={` max-w-[730px] w-full `} >
            <h2 className={` text-c26 text-3xl font-bold font-tnr `} > Room Facilities and Amenities </h2>
            <div className={` mt-8 grid grid-cols-3 gap-4`} >
                {
                    amenities?.map(amenity => <Facility key={amenity.id} amenity={amenity} />)
                }
            </div>
        </section>
    );
};

export default RoomFacilities;
