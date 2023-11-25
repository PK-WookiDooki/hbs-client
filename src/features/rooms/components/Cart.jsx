import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CartDropdown from "@/components/dropdown/CartDropdown.jsx";

const Cart = ({searchedData, adult, child, room}) => {

    const {totalRooms, totalAmount} = useSelector(state => state.cartSlice);
    const nav = useNavigate();

    const onReserveRoom = () => {
        if(totalRooms === 0){
            return alert("There is no rooms selected!")
        }

        nav("/reservation", {state : searchedData })
    }

    return (
        <section className={`p-6 bg-white box-shadow md:sticky   md:top-20 fixed z-20 left-0 bottom-0 lg:max-w-[264px] w-full `} >
            <CartDropdown border={true} adult={adult} child={child} />
            <div className={`text-c26 flex items-center justify-between`}>
                <p>
                    Total Price
                </p>
                <p className={` font-tnr text-2xl font-bold`} > USD {totalAmount}  </p>
            </div>
            <button onClick={onReserveRoom} className={`px-4 h-10 rounded-sm bg-cC1 text-cFA w-full mt-5`}>
                Next
            </button>
        </section>
    );
};
export default Cart;
