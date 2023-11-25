import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ReservationRGuard = ({children}) => {
    const {totalRooms} = useSelector(state => state.cartSlice);

    if(totalRooms > 0){
        return children;
    }else{
        return <Navigate to={"/"}/>
    }
};

export default ReservationRGuard;