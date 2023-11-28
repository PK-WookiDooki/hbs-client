import {Benefits, Hero, Location, RoomsList, Services} from "@/features/index.js";
import {useLocation} from "react-router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {clearCart} from "@/core/global/cartSlice.js";
import {resetData} from "@/features/home/searchSlice.js";

const Home = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetData());
        dispatch(clearCart());
    }, [location]);
    

    return (
        <section className={` flex flex-col lg:gap-[100px] md:gap-[60px] pb-[60px] overflow-hidden`}>
            <Hero/>
            <RoomsList/>
            <Benefits/>
            <Location/>
            <Services/>
        </section>
    );
};

export default Home;
