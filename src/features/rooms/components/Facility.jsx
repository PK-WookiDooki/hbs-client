
const Facility = ({amenity}) => {

    const {icon, name} = amenity;

    return (
        <div className={` capitalize flex items-center gap-2 text-c26 `} >
            <span className={`material-symbols-rounded text-4xl `}> {icon} </span>
            <p> {name} </p>
        </div>
    );
};

export default Facility;
