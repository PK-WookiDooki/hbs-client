import {IoMdInformationCircle} from "react-icons/io";

const NoticeText = () => {
    return (
        <div className={`text-c18 lg:p-4 md:p-3 bg-cE6 flex items-center lg:gap-5 md:gap-3 border border-c18 rounded-sm shadow-sm`} >
            <IoMdInformationCircle className={`w-14 h-14`} />
            <div>
                <h3 className={`mb-1 lg:text-2xl md:text-xl font-tnr font-bold`}> Notice </h3>
                <p className={`font-medium lg:text-base md:text-sm`}>
                    Payment must be made within 24 hours after reservation! Otherwise the reservation will be cancelled.
                </p>
            </div>
        </div>
    );
};

export default NoticeText;
