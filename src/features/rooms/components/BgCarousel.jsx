import {Carousel} from "antd";

const slideImgs = [
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D"
]
const BgCarousel = () => {
    return (
            <Carousel slidesToShow={1} autoplay={true}  autoplaySpeed={3000} dots={false} className={`bg-carousel`} >
                {
                    slideImgs?.map((img, index) => <div key={index}>
                        <img src={img} alt={img || `Image ${index + 1}`} className={`w-full`} />
                    </div>)
                }
            </Carousel>
    );
};

export default BgCarousel;
