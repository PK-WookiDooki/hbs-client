import {useLocation} from "react-router";
import {Navigate} from "react-router-dom";

const RoomRouteGuard = ({children}) => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);

   const sDate = searchParams.get("startDate");
   const eDate = searchParams.get("endDate");
   const room = searchParams.get("room")
   const adult = searchParams.get("adult")
   const child = searchParams.get("child")

   if(sDate && eDate && room && adult && child){
      return children;
   }else{
      return <Navigate to={"/"}/>
   }
};
export default RoomRouteGuard;
