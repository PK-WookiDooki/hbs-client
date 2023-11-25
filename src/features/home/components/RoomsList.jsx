import {RoomCard, SecTitle} from "@/components/index.js";
import {useSelector} from "react-redux";
import {Carousel} from "antd";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos
} from "react-icons/md";
const RoomsList = () => {

    const {rooms} = useSelector(state => state.roomsSlice)

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <MdOutlineArrowBackIos/>
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <MdOutlineArrowForwardIos/>
        </button>
    );

    return (
        <section className={` home lg:px-[10.83%] md:px-[4.16vw] max-w-[1440px] mx-auto mt-14 w-full`}>
            <SecTitle title={"discover most suitable room"} />
            <Carousel arrows={true} dots={true} infinite={true} slidesToScroll={1} slidesToShow={3} draggable={true} variableWidth={false} dotPosition={"bottom"} wi nextArrow={<SlickArrowRight/>} prevArrow={<SlickArrowLeft />} autoplay={true} autoplaySpeed={3000} responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // variableWidth : true,
                        centerMode: true
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    },
                },
            ]}>
                {
                    rooms?.map(room => <RoomCard key={room?.type.id} room={room?.type} />)
                }
            </Carousel>
        </section>
    );
};

export default RoomsList;
