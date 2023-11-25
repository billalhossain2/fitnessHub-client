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

const testimonialData = [
  {
    "name": "Jessica Thompson",
    "rating": 5,
    "testimonial":"I've been a part of this fitness community for a year now, and it has been an amazing journey. The trainers are knowledgeable, the workouts are challenging yet fun, and the support from other members is incredible. Highly recommend!",
    "image": "https://i.ibb.co/yQ3Xcn3/client.jpg",
  },
  {
    "name": "Ryan Williams",
    "rating": 4,
    "testimonial":"Great variety of workout classes and programs. The nutrition tips have been a game-changer for me. The app is user-friendly, and the trainers are always available for questions. Overall, a fantastic fitness resource.",
    "image": "https://i.ibb.co/yQ3Xcn3/client.jpg",
  },
  {
    "name": "Megan Carter",
    "rating": 5,
    "testimonial":"I love the holistic approach to wellness on this platform. The yoga sessions have helped me with flexibility and stress relief. The team is supportive, and the community challenges keep me motivated. So glad I found this!",
    "image": "https://i.ibb.co/yQ3Xcn3/client.jpg",
  },
  {
    "name": "Chris Rodriguez",
    "rating": 4,
    "testimonial":"The nutritionist's advice has been invaluable in helping me make healthier food choices. The blog section is informative, and the team is responsive to feedback. Solid platform for anyone serious about fitness and well-being.",
    "image": "https://i.ibb.co/yQ3Xcn3/client.jpg",
  }
]

const Testimonial = () => {
  return (
    <div>
      <SectionTitle title="What Our Client Says"></SectionTitle>

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
          className="mySwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-3 mb-10">
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
