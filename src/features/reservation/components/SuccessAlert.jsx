import React from 'react';

const SuccessAlert = () => {
    return (
        <section className={` bg-[#E6FEDB] border border-[#52C41A] rounded box-shadow flex gap-8 p-4 items-center `}>
            <span className={`material-symbols-rounded text-[60px] w-20 aspect-square flex items-center justify-center bg-cFA text-[#52C41A] `} >
                check
            </span>
            <div>
                <h2 className={`text-c26 text-xl font-medium mb-1`}>Your booking is reserved successfully!</h2>
                <p className={`text-c59 text-sm`} >We’ll send you a confirmation email with all detail information and including payment information within 24 hours.</p>
            </div>
        </section>
    );
};

export default SuccessAlert;
