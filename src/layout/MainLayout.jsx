import {Outlet} from "react-router-dom";
import Header from "@/layout/Header.jsx";
import Footer from "@/layout/Footer.jsx";

const MainLayout = () => {
    return (
        <section className={`layout`} >
            <Header/>
            <main className={`flex-1 flex flex-col`} >
                <Outlet/>
            </main>
            <Footer/>
        </section>
    );
};

export default MainLayout;
