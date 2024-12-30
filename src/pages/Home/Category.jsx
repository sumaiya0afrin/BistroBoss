// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../shared/SectionTitle";
const Category = () => {
  return (
    <div className=" px-4 lg:px-0 mt-0 md:mt-16">
      <section>
        <SectionTitle
          heading={"order online"}
          subHeading={"From 11:00am to 10:00pm"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper font-cinzel"
        >
          <SwiperSlide className="mb-20">
            <img src={slide1} alt="" className="w-full" />
            <h4 className="uppercase text-2xl text-center -mt-14 text-white">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" className="w-full" />
            <h4 className="uppercase text-2xl text-center -mt-14 text-white">
              pizzas
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" className="w-full" />
            <h4 className="uppercase text-2xl text-center -mt-14 text-white">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" className="w-full" />
            <h4 className="uppercase text-2xl text-center -mt-14 text-white">
              desserts
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" className="w-full" />
            <h4 className="uppercase text-2xl text-center -mt-14 text-white">
              Salads
            </h4>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
