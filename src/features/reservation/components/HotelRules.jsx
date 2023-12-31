
const childPolicies = [
    "Infant 0-1 year(s): Stay for free if using existing bedding. Note, if you need a cot there may be an extra charge.",
    "Guests 15 years & older are considered as adults.",
    "Extra beds are not available for all rooms.",
    "When the reservation has more than 5 rooms, different policies and additional supplements may apply."
]

const HotelRules = () => {

    return (
        <section>
            <h2 className={`rf-tlt lg:mb-4 mb-2`} >Hotel Rules</h2>
            <p className={`lg:text-xl md:text-base text-c43 mb-6`}>Nextel Mandalay takes special requests :</p>
            <div className={`lg:py-4 lg:px-6 md:py-3 md:px-4 box-shadow rounded`} >
                <Rule icon={"login"} title={"check-in"} border={true} content={<div className={`w-full lg:text-base md:text-sm flex flex-col gap-4 text-c26 `}>
                    <p> From 2 : 00 PM </p>
                    <p className={`font-medium`}>Guests are required to show a photo identification and credit card upon check-in. </p>
                </div>}  />
                <Rule icon={"logout"} title={"check-out"} border={true} content={
                    <p className={`w-full lg:text-base md:text-sm text-c26`}> From 12 : 00 PM </p>
                    }  />
                <Rule icon={"info"} title={"payment & cancellation"} border={true} content={
                    <p className={`w-full lg:text-base md:text-sm font-medium text-c26`}> Payment must be made within 24 hours after reservation! Otherwise the reservation will be cancelled.  </p>
                }  />
                <Rule icon={"account_child"} title={"children & beds"} border={true} content={<div className={`w-full`}>
                    <h3 className={`text-c26 font-medium mb-4`} > Child policies </h3>
                    <ul className={`flex flex-col gap-1`}>
                        {
                            childPolicies?.map((content, index) => <li key={index} className={`pl-2 flex gap-2`} > <span className={` mt-2 block aspect-square h-1 rounded-full bg-c43`}></span> {content} </li>)
                        }
                    </ul>
                </div>}  />
                <Rule icon={"pets"} title={"pets"} border={true} content={
                    <p className={`w-full lg:text-base md:text-sm text-c43`}> Pets are not allowed. </p>
                }  />
                <Rule icon={"credit_card"} title={"payment methods"} content={
                    <p className={`w-full lg:text-base md:text-sm text-c43`}> If you made a reservation, we have added our bank account information to which payment will be made. </p>
                }  />
            </div>
        </section>
    );
};

const Rule = ({icon, title, content, border}) => {
    return <div className={`lg:py-6 md:py-3 flex items-start gap-6 ${border ? "border-b border-cD9 " : ""} `}>
        <div className={`flex items-center lg:gap-3 md:gap-1 text-c26 w-full md:max-w-[155px]`} >
            <span className={`material-symbols-rounded`}> {icon}</span>
            <p className={`font-medium capitalize lg:text-base md:text-sm`} > {title} </p>
        </div>
        {content}
    </div>
}

export default HotelRules;
