const UserInformation = ({userData}) => {
    return (
        <section className={`px-4 py-6 box-shadow rounded`} >
            <h2 className={`text-xl text-c26 font-medium`}>Your Information</h2>
            <p className={`text-sm`}>Please check your information twice.</p>
            <div className={`grid grid-cols-3 gap-10 mt-4`} >
                {
                    Object.entries(userData).map((item, index) => <DataSet key={index} title={item[0]} value={item[1]}/>)
                }
            </div>
        </section>
    );
};

const DataSet = ({title, value}) => {
    return value ? <div className={`flex flex-col gap-1`}>
        <span className={`text-c43 text-sm capitalize`}> {title} </span>
        <p className={`text-c26`}> {value} </p>
    </div> : ""
}

export default UserInformation;
