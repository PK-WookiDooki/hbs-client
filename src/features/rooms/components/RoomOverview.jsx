const RoomOverview = ({room}) => {
    return (
        <section className={` max-w-[300px] w-full`}>
        <h3 className={`font-tnr text-3xl font-bold text-c26 `}>Overview</h3>
            <div className={` flex flex-col gap-2 mt-8 `} >
                <OverviewOpt title={"Charges per night"} value={`USD ${room?.pricePerNight}`} style={"font-tnr text-xl font-bold"} />
                <OverviewOpt title={"Room Size"} value={<> {room?.size} m<sup>2</sup>  </>} />
                <OverviewOpt title={"Occupancy"} value={room?.maximumCapacity} />
                <OverviewOpt title={"Bed Type"} value={`Double/Twin bed`} />
            </div>
</section>
    );
};

const OverviewOpt = ({title, value, style}) => {
    return (
        <div className={` grid grid-cols-2 gap-5 font-medium`}>
            <p> {title} </p>
            <p> : <span className={` ${style} `} >  {value} </span> </p>
        </div>
    )
}

export default RoomOverview;
