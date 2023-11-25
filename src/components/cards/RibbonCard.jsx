
import {useSelector} from "react-redux";
import {RoomCard} from "@/components/index.js";
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input";
import {Form} from "antd";
import {useState} from "react";

const RibbonCard = () => {
    // const {rooms} = useSelector(state => state.roomsSlice)
    // const randomNumber = Math.ceil(Math.random() * rooms?.length);
    // const randomRoom = rooms?.find(room => room.id == randomNumber)

    const [phone, setPhone] = useState("")

    const onFinish = (values) => {
        console.log(values)
    }

    const onFinishFailed = (values) => {
        console.log(values)
    }

    return (
        <div className={`relative card m-10 max-w-max p-10 bg-blue-200 `} >
            {/*<RoomCard room={randomRoom} />*/}
            {/*<div className={`ribbon`} >*/}
            {/*    <p className={` font-tnr font-bold text-2xl text-c14 bg-cFA py-2 px-3 rounded-t `} > USD {randomRoom?.price} <span className={` text-base font-grm font-normal `}> / per night </span> </p>*/}
            {/*    <p className={`text-cFA font-grm bg-cF5 rounded-bl `} > Only <span className={`font-tnr text-xl font-bold`} >{randomNumber}</span> rooms left </p>*/}
            {/*</div>*/}
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item name={"phone"} rules={[
                    {required: true, message: "Please provide phone number!"}
                ]} >
                    <PhoneInput defaultCountry={"MM"} onChange={(value) => setPhone(value)} value={phone}/>
                </Form.Item>
                <button type={"submit"} >
                    Save
                </button>
            </Form>

        </div>
    );
};

export default RibbonCard;
