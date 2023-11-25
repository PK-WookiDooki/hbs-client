import {DatePicker, Dropdown} from "antd";
import { MdExpandMore} from "react-icons/md"
import {useNavigate} from "react-router-dom";
import { DropdownItem} from "@/components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "@/features/home/searchSlice.js";
import dayjs from "dayjs";
const SelectBox = () => {
    const {searchedData} = useSelector(state => state.searchSlice)
    const adult = parseInt(searchedData.adult)
    const child = parseInt(searchedData.child)
    const room = parseInt(searchedData.room)

    const dispatch = useDispatch();
    const onAdd = (name) => {
       dispatch(setData({...searchedData, [name] : searchedData[name] + 1 }))
    }
    const onReduce = (name) => {
        if(name !== "child") {
            if(searchedData[name] > 1){
                dispatch(setData({...searchedData, [name] : searchedData[name] - 1
                }))
            }else{
                return alert(` The number of ${name} cannot be less than 1!`)
            }
        }else if(searchedData[name] > 0){
           dispatch(setData({...searchedData, [name] : searchedData[name] - 1  }))
        }
    }

    const nav = useNavigate();

    const customDropdownItems = (<div className={` bg-cFA lg:px-4 px-2 rounded-sm `} >
        <DropdownItem label={"Room"} value={searchedData.room} onAdd={() => onAdd("room")} onReduce={() => onReduce("room")} disabledAdd={room >= adult} disabledReduce={room <= 1 } />
        <DropdownItem label={"Adult"} desc={"Age Over 15"} value={searchedData.adult}  onAdd={() => onAdd("adult")} onReduce={() => onReduce("adult")} disabledAdd={adult >= room * 5 } disabledReduce={adult <= 1 } />
        <DropdownItem label={"Child"} desc={"Age 1-14"} value={searchedData.child} onAdd={() => onAdd("child")} onReduce={() => onReduce("child")} disabledAdd={adult <= 0} disabledReduce={child <= 0 } />
    </div>)

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };


    const onRoomsSearch = async(e) => {
        e.preventDefault();
        try {

            if(searchedData.room > searchedData.adult){
                return alert("Total number of rooms cannot be more than total number of adults!")
            }

            const startDate = searchedData.startDate.format("YYYY-MM-DD");
            const endDate = searchedData.endDate.format("YYYY-MM-DD");
            const searchedValues = new URLSearchParams({startDate, endDate, room : searchedData.room, adult : searchedData.adult, child : searchedData.child}).toString();
            nav(`/rooms?${searchedValues}`)
        }catch(error){
            throw new Error(error)
        }
    }


    return (
        <section className={`flex z-10 absolute bottom-[80px] lg:left-[164px]`} >
            <div className={`border-4 border-cFA p-1`} >
                <DatePicker.RangePicker
                    // defaultValue={[searchedData.startDate, searchedData.endDate]}
                    value={[searchedData.startDate, searchedData.endDate]}
                    format={"DD MMM YYYY"}
                    className={` lg:!h-14 md:!h-10 !rounded-sm !text-base !bg-cFA lg:w-[330px] md:w-[237px] !font-sans cursor-pointer `}
                    allowClear={false}
                    disabledDate={disabledDate}
                    inputReadOnly
                    onChange={([startDate, endDate]) => dispatch(setData({...searchedData, startDate, endDate}))}
            />
            </div>
            <div className={`border-4 border-cFA p-1`} >
                <Dropdown
                    className={` lg:!h-14 md:!h-10 !rounded-sm !text-base !bg-cFA flex items-center lg:w-[330px] md:w-[237px] lg:px-4 px-2 `}
                    trigger={["click"]}
                    dropdownRender={() => customDropdownItems}
                    arrow={true}
                >
                    <div className={`flex items-center justify-between cursor-pointer `} >
                        <p> {searchedData.room} Room . {searchedData.adult} Adult . {searchedData.child} Child </p>
                        <MdExpandMore className={`text-2xl`} />
                    </div>
                </Dropdown>
            </div>
            <div className={`border-4 border-cFA p-1`} >
                <button onClick={onRoomsSearch} className={` lg:h-14 md:h-10 px-4 lg:w-[130px] md:w-[110px] bg-cC1 text-white rounded-sm `} >Search</button>
            </div>
        </section>
    );
};

export default SelectBox;
