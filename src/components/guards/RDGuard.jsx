import {useLocation} from "react-router";
import {Navigate} from "react-router-dom";

const RDGuard = ({children}) => {
    const reservationData = useLocation().state;
    if(!reservationData?.formData || !reservationData?.searchedData){
        return <Navigate to={"/"}/>
    }else{
        return children;
    }
};

export default RDGuard;
