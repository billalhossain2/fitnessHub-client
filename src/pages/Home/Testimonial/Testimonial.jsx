import SectionTitle from "../../../components/SectionTitle";
import ReactStarsRating from 'react-awesome-stars-rating';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useLoadData from "../../../hooks/useLoadData";
import Error from "../../../components/Error";
import Spinner from "../../../components/Spinner";

const Testimonial = () => {

  const {loading, error, data:reviews} = useLoadData("reviews");

  if(error){
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <h1 className="md:text-3xl text-2xl font-bold my-10 text-center mt-20">What Our Client Says</h1>

      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper lg:w-[700px] md:w-[500px] w-[350px]"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col justify-center items-center gap-3 mb-10 md:w-[500px] w-[300px]">
                <img
                  className="w-60 h-60 rounded-full"
                  src={item.image}
                  alt=""
                />
                <h3 className="font-bold text-2xl">{item.name}</h3>
                <ReactStarsRating className="flex" value={item.rating} readOnly={true} />
                <p className="text-center text-gray-500 md:px-10">{item.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
