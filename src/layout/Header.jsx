import {Link} from "react-router-dom";
import logoImg from "@/assets/images/img_logo.png"
const Header = () => {
    return (
        <header className={` bg-c14 sticky top-0 z-50`} >
            <section className={` max-w-[1440px] mx-auto flex items-center lg:px-[10.83%] md:px-[4.16vw] h-16`} >
                <h1>
                    <Link to={"/"} > <img src={logoImg} /> </Link>
                </h1>
            </section>
        </header>
    );
};

export default Header;