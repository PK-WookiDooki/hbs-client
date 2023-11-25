import {useState} from 'react';
import {Modal} from "antd";
import {RxCross1} from "react-icons/rx";
import Facility from "@/features/rooms/components/Facility.jsx";

const RoomFacilitiesModal = ({amenities}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <section>
            <button onClick={() => setOpenModal(true)} className={`flex gap-2 text-blue-500`} > <span className={`material-symbols-rounded`} > add_circle </span> <span className={`underline underline-offset-1 text-left `}>See all amenities </span> </button>

            <Modal  centered open={openModal} footer={null} closeIcon={false} width={716} >
                <div className={` flex items-center justify-between `} >
                    <h2 className={`font-tnr font-bold text-2xl text-c26`}>
                        In-room Amenities
                    </h2>
                    <button onClick={() => setOpenModal(false)} className={`text-c14 text-xl`} >
                        <RxCross1/>
                    </button>
                </div>
                <div className={` grid grid-cols-3 gap-4 mt-6`} >
                    {
                        amenities?.map(item => <Facility key={item.id}  amenity={item} />)
                    }
                </div>
            </Modal>
        </section>
    );
};

export default RoomFacilitiesModal;
