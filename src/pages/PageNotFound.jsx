import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <section className={` min-h-screen w-full bg-gradient-to-br from-white/80 via-c14/90 to-c14 flex items-center justify-center `}>
            <div className={` text-cFA  items-center flex flex-col gap-5  p-10 bg-white/10 rounded backdrop-blur-lg `} >
                <h2 className={` text-6xl font-medium `} > Oops! </h2>
                <p className={`text-lg`}>
                    The page you were looking for is not found!
                </p>
                <Link to={"/"} className={` px-5 py-2 rounded bg-cFA text-c14 `} > Go back Home </Link>
            </div>
        </section>
    );
};

export default PageNotFound;
