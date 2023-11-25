import "./loader.css";

const Loader = () => {
    return (
        <section className={`flex items-center justify-center fixed h-screen w-full top-0 left-0 z-[99999]  bg-black/40`}>
            <div className="loader-wrapper">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Loader;
