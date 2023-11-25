import {IoMdInformationCircle} from "react-icons/io";

const NoticeText = () => {
    return (
        <div className={`text-c18 p-4 bg-cE6 flex items-center gap-5 border border-c18 rounded-sm shadow-sm`} >
            <IoMdInformationCircle className={`w-14 h-14`} />
            <div>
                <h3 className={`mb-1 text-2xl font-tnr font-bold`}> Notice </h3>
                <p className={`font-medium`}>
                    Payment must be made within 24 hours after reservation! Otherwise the reservation will be cancelled.
                </p>
            </div>
        </div>
    );
};

export default NoticeText;
