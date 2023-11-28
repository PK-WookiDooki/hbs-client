import {Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "@/features/reservation/formSlice.js";

const SpecialRequestInput = () => {

    const {userInfo} = useSelector(state => state.formSlice)
    const dispatch = useDispatch()


    const onChange = (e, name) => {
        dispatch(setUserInfo({...userInfo, [name] : e.target.value }))
    }

    return (
        <section className={`flex flex-col lg:gap-6 md:gap-4 lg:p-6 md:p-4 box-shadow rounded`}>
            <h3 className={`font-medium lg:text-xl text-base text-c26`}> Special Requests <span className={`text-base text-c43
             font-normal`} >(optional)</span> </h3>
            <p className={`text-c43 lg:text-base md:text-sm`} > Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete! </p>
            <Form.Item label={<p className={`text-c26 font-medium text-base`}> Please write your request in English. </p>} name={"specialRequest"} className={`mb-0`} initialValue={userInfo.specialRequest}  >
                <Input.TextArea className={`!resize-none`} placeholder={"Enter your requests"} onChange={(e) => onChange(e, "specialRequest")} />
            </Form.Item>
        </section>
    );
};

export default SpecialRequestInput;
