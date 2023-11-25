import {useState} from "react";
import {Checkbox, Form, Modal} from "antd";

const ReserveConfirmationModal = ({openModal, checkValue, onCheck, closeModal, onSubmit}) => {

    return (
        <section>
            <button type={"submit"} className={`color-btn  min-w-[114px]`} >Book Now</button>
            <Modal open={openModal} footer={null} centered={true} closeIcon={false}
            width={460}>
                <h2 className={`font-medium text-xl text-c14 mb-6 !font-sans`}>Are you sure you want to reserve room(s)?</h2>
                <Form.Item>
                    <Checkbox checked={checkValue} onChange={onCheck}>Agree to our hotel&apos;s booking policies and terms and conditions. Please review your reservation details carefully.</Checkbox>
                </Form.Item>
                <div className={`mt-10 flex items-center gap-10 justify-center`}>
                    <button onClick={closeModal} className={`border-btn min-w-[170px]`} >Cancel</button>
                    <button type={"button"} onClick={onSubmit} className={`color-btn min-w-[170px] disabled:cursor-not-allowed disabled:hover:opacity-100`} disabled={!checkValue}  >Confirm</button>
                </div>
            </Modal>
        </section>
    );
};

export default ReserveConfirmationModal;
