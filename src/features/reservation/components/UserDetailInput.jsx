import {Form, Input} from "antd";
import "react-phone-number-input/style.css";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "@/features/reservation/formSlice.js";

const UserDetailInput = ({form}) => {

    const {userInfo} = useSelector(state => state.formSlice)
    const dispatch = useDispatch();

    const {guestName, email, phone, address} = userInfo

    const onChange = (e, name) => {
        dispatch(setUserInfo({...userInfo, [name] : e.target.value }))
    }

    return (
        <section>
            <h2 className={`rf-tlt mb-6`}> Contact Details </h2>
                <div className={`p-6 rounded box-shadow `} >
                    <h3 className={`text-xl font-medium text-c43 mb-6 `}> Let us know who you are.</h3>
                    <Form.Item validateDebounce={500} label={"Full Name"} name={'guestName'} rules={[
                        {required : true, message : "Please provide your name!"},
                    ]} initialValue={guestName} >
                        <Input placeholder={"Enter your full name"} onChange={(e) => onChange(e, "guestName")} />
                    </Form.Item>
                    <Form.Item validateDebounce={500} label={"Email"} name={'email'} rules={[
                        {required : true, message : "Please provide your email address!"},{type : "email"}
                    ]} initialValue={email}>
                        <Input type={"email"} placeholder={"example@gmail.com"} onChange={(e) => onChange(e, "email")} />
                    </Form.Item>
                    <Form.Item validateDebounce={500} label={"Phone"} name={'phone'} rules={[
                        {required : true, message : "Please provide your phone  number!"}, () => ({
                            validator(_, value) {
                                if (isValidPhoneNumber(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Please enter valid phone number!'));
                            },
                        }),
                    ]} initialValue={phone} >
                            <PhoneInput flags={flags} defaultCountry={"MM"} onChange={(value) => dispatch(setUserInfo({...userInfo, phone : value}))} value={phone} smartCaret={true} placeholder={"Enter your phone number"}/>
                    </Form.Item>
                    <Form.Item validateDebounce={500} label={"Address"} name={"address"} rules={[{required : true, message : "Please provide your address!"},{type : "string"}]} className={`mb-0`} initialValue={address}  >
                        <Input.TextArea className={'!resize-none'} placeholder={"Enter your address"} onChange={(e) => onChange(e, "address")} />
                    </Form.Item>
                </div>
        </section>
    );
};

export default UserDetailInput;
