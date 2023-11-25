const ServicesList = ({services}) => {
    return (
        <ul className={` list-disc list-inside flex flex-col gap-2`} >
            {services?.map((option, index) => <li key={index} className={` capitalize text-lg text-c43 `} > {option} </li>)}
        </ul>
    );
};

export default ServicesList;
