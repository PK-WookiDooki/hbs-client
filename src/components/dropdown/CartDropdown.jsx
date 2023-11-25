import {MdExpandMore} from "react-icons/md";
import {useSelector} from "react-redux";
import {useState} from "react";
import {Collapse} from "antd";

const CartDropdown = ({border, adult, child}) => {
    const {selectedRooms, totalRooms} = useSelector(state => state.cartSlice);
    const [isExpanded, setIsExpanded] = useState(false);

    const [activeKey, setActiveKey] = useState([])

    const toggleCollapse = () => {
        setActiveKey(activeKey.includes("1") ? []  : ["1"])
        setIsExpanded(!isExpanded)
    }

    const items = [
        {
            key : 1,
            label : '',
            children: <div>
                <p className={`font-medium mb-2 capitalize`} > for {adult} adults {parseInt(child) > 0 ? `& ${child} children` : ""} </p>
                {selectedRooms?.map(room => <div key={room.id} className={`flex items-center justify-between`}>
                    <p> {room.totalRooms} x <span className={`capitalize`}> {room.name}</span></p>
                </div>)}
            </div>
        }
    ]

    return <div className={`${border ? "border-b border-cD9 pb-1 mb-1" : ""}`}>
            <div className={`flex items-start justify-between`} >
                <p>Your selections <br/> <span className={`mt-1 block font-medium`}> {totalRooms} rooms </span> </p>
                <button onClick={toggleCollapse} className={`px-2 py-1 border border-cD9 text-xl`} >  <MdExpandMore className={` ${isExpanded ? " transform rotate-180 " : ""} duration-300  `} /> </button>
            </div>
        <Collapse activeKey={activeKey} items={items}/>
        </div>
};

export default CartDropdown;
