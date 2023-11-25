import {Result} from "antd";
import {Link} from "react-router-dom";
import successIcon from "@/assets/images/ico_suc.png"
import errorIcon from "@/assets/images/ico_error.svg.svg"

const ResultPage = () => {
    return (
       <section className={`flex-1 flex items-center justify-center`}>
           <Result className={`flex flex-col items-center `} icon={<CustomIcon icon={successIcon} />} title={<h2 className={`font-tnr text-5xl text-c26 font-bold mb-6 -mt-6`} >  Reservation Succeed! </h2>} subTitle={<p className={`text-c43 mb-8 font-sans text-base `}>
               We’ll send you a confirmation email with all detail infos and including payment information within 24 hours.
               <br/>Thank you for choosing Nextel!
           </p>} extra={<Link to={"/"}  className={` flex items-center justify-center min-w-[170px] h-12 rounded-sm border border-c26 bg-c26 hover:bg-transparent text-cFA hover:text-c26 transition-all duration-300 `}>Done</Link>}  />
       </section>
    );
};

const CustomIcon = ({icon}) => {
    return <img src={icon} alt={icon || "Icon Svg"} />
}

export default ResultPage;
