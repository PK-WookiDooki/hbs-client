import NoticeText from "@/features/reservation/components/NoticeText.jsx";
import BookingSummary from "@/features/reservation/components/BookingSummary.jsx";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import {Form} from "antd";
import UserDetailInput from "@/features/reservation/components/UserDetailInput.jsx";
import SpecialRequestInput from "@/features/reservation/components/SpecialRequestInput.jsx";
import HotelRules from "@/features/reservation/components/HotelRules.jsx";
import ReserveConfirmationModal from "@/features/reservation/components/ReserveConfirmationModal.jsx";
import {useEffect, useState} from "react";
import {Loader} from "@/components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "@/features/reservation/formSlice.js";
import dayjs from "dayjs";

const ReservationForm = () => {

    const {totalRooms : totalRoom, totalAmount : totalCost, selectedRooms} = useSelector(state => state.cartSlice)

    const roomTypes = selectedRooms?.map(room => room.name)

    const location = useLocation();
    const searchedData = location?.state;
    const [form] = Form.useForm();
    const [formData, setFormData] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [checkValue, setCheckValue] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    // searchedData
    const searchedObj = new URLSearchParams(searchedData);
    const checkIn = dayjs(searchedObj.get("startDate")).format("YYYY-MM-DD");
    const checkOut = dayjs(searchedObj.get("endDate")).format("YYYY-MM-DD");

    const checkInDate = dayjs(searchedObj.get("startDate")).date();
    const checkOutDate = dayjs(searchedObj.get("endDate")).date();
    const lengthOfStay = checkOutDate - checkInDate;

    const adult = parseInt(searchedObj.get('adult'))
    const child = parseInt(searchedObj.get('child'))
    const numberOfGuest = adult + child

    const nav = useNavigate()

    const closeModal = () => {
        setOpenModal(false)
        setCheckValue(false)
    }

    const onCheck = () => {
        setCheckValue(!checkValue)
    }

    const onReserve = (values) => {
        try {
            if(values){
                setFormData(values);
                setOpenModal(true)
            }
        }catch (error){
            throw new Error(error)
        }
    }

    const onReserveFailed = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    const onSubmit = async() => {
        try {
            setIsLoading(true)

            const reqData = {
                ...formData, numberOfGuest, totalRoom, totalCost, checkIn, checkOut, lengthOfStay, selectedRooms : roomTypes
            }
            console.log(reqData)
            dispatch(setUserInfo({
                guestName : "",
                email : "",
                phone : "",
                address : "",
                specialRequest : ""
            }))
            if(isLoading === false){
                nav("/result")
            }

        }catch (error){
            throw new Error(error)
        }
    }

    useEffect(() => {
        if(isLoading === true){
            setTimeout(() => {
                setIsLoading(false)
                form.resetFields();
                closeModal();
                window.scrollTo({top : 0, behavior: "smooth"})
            }, 5000);
        }
    }, [isLoading]);

    return (
        <section className={`lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] mx-auto w-full mt-14 pb-10 `} >
            <NoticeText/>
            <div className={`mt-8 flex gap-6`} id={"form"} >
                <BookingSummary searchedData={searchedData} />
                <Form form={form} onFinish={onReserve} onFinishFailed={onReserveFailed} layout={"vertical"} className={` w-full !font-sans flex flex-col gap-6 `} >
                    <UserDetailInput form={form}/>
                    <SpecialRequestInput/>
                    <HotelRules/>
                    <div className={`flex justify-end gap-9`}>
                        <Link to={".."} className={`h-10 px-4 border border-c59 rounded-sm min-w-[114px] flex items-center justify-center hover:text-c8C duration-300`} >Back</Link>
                        <ReserveConfirmationModal openModal={openModal} closeModal={closeModal} onCheck={onCheck} checkValue={checkValue}
                        onSubmit={onSubmit}/>
                    </div>
                </Form>
            </div>
            { isLoading ? <Loader/> : "" }
        </section>
    );
};

export default ReservationForm;
