// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";

export default function PartnersSwiper() {
  return (
    <section className="partners-swiper" id="partners-swiper">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          610: {
            slidesPerView: 3,
          },
          790: {
            slidesPerView: 4,
          },
          990: {
            slidesPerView: 6,
          },
        }}
        className="container"
      >
        <SwiperSlide>
          <div
            style={{ height: "100px" }}
            className="img-fluid position-relative cover"
          >
            <Image
              src="https://cdn.sanity.io/images/9i295oms/production/acc04b084c3d771b47396fcefa59826743f0b85a-471x471.jpg?w=2000&fit=max&auto=format"
              alt="adiguzel"
              fill
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ height: "100px" }}
            className="img-fluid position-relative"
          >
            <Image
              src="https://cdn.sanity.io/images/9i295oms/production/c1575f00c9c15209207e85170b013dde424f995e-425x250.png?w=2000&fit=max&auto=format"
              alt="baba"
              fill
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ height: "100px" }}
            className="img-fluid position-relative"
          >
            <Image
              src="https://cdn.sanity.io/images/9i295oms/production/dabea5d876c9028f2385023f851b57c3947ba8c6-512x250.png?w=2000&fit=max&auto=format"
              alt="bahsis"
              fill
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ height: "100px" }}
            className="img-fluid position-relative"
          >
            <Image
              src="https://cdn.sanity.io/images/9i295oms/production/74d2b5cebfe1cb28246542f122cdfe012a4bf9a0-908x338.png?w=2000&fit=max&auto=format"
              alt="besiktas"
              fill
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ height: "100px" }}
            className="img-fluid position-relative"
          >
            <Image
              src="https://cdn.sanity.io/images/9i295oms/production/40ab416d572378df1692711ce5219e1fa8d97d74-425x250.png?w=2000&fit=max&auto=format"
              alt="bigmammas"
              fill
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
