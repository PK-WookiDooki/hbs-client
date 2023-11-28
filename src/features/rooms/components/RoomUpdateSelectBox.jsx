import {DatePicker, Dropdown} from "antd";
import {MdExpandMore} from "react-icons/md";
import {useDispatch} from "react-redux";
import {setData} from "@/features/home/searchSlice.js";
import {DropdownItem} from "@/components/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {clearCart} from "@/core/global/cartSlice.js";
import dayjs from "dayjs";

const RoomUpdateSelectBox = ({searchedData}) => {

    const dispatch = useDispatch();
    const [searchedOpt, setSearchedOpt] = useState(searchedData)
    const nav = useNavigate();

    const adult = parseInt(searchedOpt.adult)
    const child = parseInt(searchedOpt.child)
    const room = parseInt(searchedOpt.room)

    const onDataUpdate = (e) => {
        e.preventDefault();
        try {
            if(searchedOpt.room > searchedOpt.adult){
                return alert("Total number of rooms cannot be more than total number of adults!")
            }
            dispatch(setData(searchedOpt))
            dispatch(clearCart())
            const startDate = searchedOpt.startDate.format("YYYY-MM-DD");
            const endDate = searchedOpt.endDate.format("YYYY-MM-DD");
            const searchedValues = new URLSearchParams({startDate, endDate, room : searchedOpt.room, adult : searchedOpt.adult, child : searchedOpt.child}).toString();
            nav(`/rooms?${searchedValues}`)
        }catch(error){
            throw new Error(error)
        }
    }

    const onAdd = (name) => {
        setSearchedOpt({...searchedOpt, [name] : searchedOpt[name] + 1 })
    }

    const onReduce = (name) => {
        if(name !== "child") {
            if(searchedOpt[name] > 1){
                setSearchedOpt({...searchedOpt, [name] : searchedOpt[name] - 1
                })
            }else{
                return alert(` The number of ${name} cannot be less than 1!`)
            }
        }else if(searchedOpt[name] > 0){
            setSearchedOpt({...searchedOpt, [name] : searchedOpt[name] - 1  })
        }
    }

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const customDropdownItems = (<div className={` bg-cFA lg:px-4 px-2 rounded-sm `} >
        <DropdownItem label={"Room"} value={searchedOpt.room} onAdd={() => onAdd("room")} onReduce={() => onReduce("room")} disabledAdd={room >= adult} disabledReduce={room <= 1 } />
        <DropdownItem label={"Adult"} desc={"Age Over 15"} value={searchedOpt.adult}  onAdd={() => onAdd("adult")} onReduce={() => onReduce("adult")} disabledAdd={adult >= room * 5 } disabledReduce={adult <= 1 }  />
        <DropdownItem label={"Child"} desc={"Age 1-14"} value={searchedOpt.child} onAdd={() => onAdd("child")} onReduce={() => onReduce("child")} disabledAdd={adult <= child / 4} disabledReduce={child <= 0 } />
    </div>)

    return (
       <section className={`absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 `} >
           <h2 className={`common-text lg:text-[80px] md:text-[60px] lg:leading-[96px] text-cFA `}> enjoy your own holiday </h2>
           <section className={`flex z-10 lg:gap-6 lg:p-6 md:gap-4 md:p-4 bg-white/10 backdrop-blur-xl`} >
               <div>
                   <DatePicker.RangePicker
                       defaultValue={[searchedOpt.startDate, searchedOpt.endDate]}
                       format={"DD MMM YYYY"}
                       className={` lg:!h-14 md:!h-10 !rounded-sm !text-base !bg-cFA !border-none lg:w-[444px] md:w-[295px] !font-sans cursor-pointer `}
                       allowClear={false}
                       disabledDate={disabledDate}
                       inputReadOnly
                       onChange={([startDate, endDate]) =>  (setSearchedOpt({...searchedOpt, startDate, endDate}))}
                   />
               </div>
               <div>
                   <Dropdown
                       className={` lg:!h-14 md:!h-10 !rounded-sm !text-base !bg-cFA flex items-center lg:w-[444px] md:w-[295px] lg:px-4 px-2 `}
                       trigger={["click"]}
                       dropdownRender={() => customDropdownItems}
                       arrow={true}
                   >
                       <div className={`flex items-center justify-between cursor-pointer `} >
                           <p> {searchedOpt.room} Room . {searchedOpt.adult} Adult . {searchedOpt.child} Child </p>
                           <MdExpandMore className={`text-2xl`} />
                       </div>
                   </Dropdown>
               </div>
               <div>
                   <button onClick={onDataUpdate} className={` lg:h-14 md:h-10 px-4 lg:w-[144px] md:w-[114px] bg-cC1 text-white rounded-sm`} >Update</button>
               </div>
           </section>
       </section>
    );
};

export default RoomUpdateSelectBox;
