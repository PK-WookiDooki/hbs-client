import {ActionBtn} from "@/components/index.js";
import {MdAdd, MdRemove} from "react-icons/md";

const DropdownItem = ({label, desc, value, onAdd, onReduce, disabledReduce, disabledAdd}) => {
    return <div className={` flex items-center justify-between lg:!text-base md:text-sm font-medium py-2`} >
        <div className={`flex flex-col`} >
            <p> {label} </p>
            { desc ? <p className={`text-sm font-normal`} > {desc} </p> : "" }
        </div>
        <div className={` flex items-center gap-1 `} >
            <ActionBtn event={onReduce} icon={<MdRemove/>} disabledOpt={disabledReduce} />
            <span className={`w-10 text-center `} > {value} </span>
            <ActionBtn event={onAdd} icon={<MdAdd/>} disabledOpt={disabledAdd} />
        </div>
    </div>
}

export default DropdownItem