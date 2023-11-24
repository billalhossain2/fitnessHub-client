const images = ["https://i.ibb.co/PWKLPYw/about-1.jpg", "https://i.ibb.co/R3vfsZr/about-2.jpg", "https://i.ibb.co/kSt3Hg7/about-3.jpg"]


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const About = () => {
  return (
    <div className="py-16 mt-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="md:w-1/2 mb-8 md:mb-0">
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide>
              <div>
                <img
                  className="w-full md:h-[400px] h-[300px]"
                  src={img}
                  alt="About"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-4">
              Welcome to FitnessHub, where fitness meets inspiration. Our mission is to empower individuals on their journey to a healthier and happier life.
            </p>

            <p className="text-gray-500 text-lg mb-4">
              At FitnessHub, we believe in a holistic approach to wellness. Whether you're a seasoned fitness enthusiast or just starting, we provide the tools, guidance, and community support you need to achieve your goals.
            </p>

            <p className="text-gray-500 text-lg mb-4">
              Our team of experienced trainers, nutritionists, and wellness experts are dedicated to helping you reach your full potential. We offer a variety of workout programs, nutrition plans, and expert advice to ensure a well-rounded and sustainable fitness journey.
            </p>

            <p className="text-gray-500 text-lg mb-4">
              Join us in creating a community where health and fitness thrive. Start your transformation today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
