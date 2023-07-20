import React from "react";
import p13 from "../../assets/images/p13.jpg";
import "./about.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const About = () => {
  return (
    <div>
      <section>
        <div className=" about-section">
          <div class="">
            <img src={p13} alt="" className="about-img" />
          </div>
          <div class="about-content">
            <h2 class="mb-4">
              Welcome to{" "}
              <span style={{ color: "purple" }}>
                Perfect Touch Unisex Salon and Spa
              </span>
            </h2>
            <p>
              We are a classical total body care service provider. Whether it is
              body massage, unisex salon or make up artistry, we are here for
              you for complete relaxation of mind.
            </p>
            <p>What we offer are below:</p>
            <ul>
              <li>Barbing services</li>
              <li>Hair Dressing services</li>
              <li>SPA</li>
              <li>Body Waxing</li>
              <li>Teeth Whitening</li>
              <li>Nails Fixing</li>
              <li>Facial Packages</li>
              <li>Massage Packages</li>
              <li>Body Treatment</li>
            </ul>

            <p>
              Go through our <a href="services.html">Services</a> section to
              view the pricing of each services explicitly.
            </p>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3 mt-5">
            <div class="col-md-7 heading-section ftco-animate text-center">
              <h2 class="mb-4 mt-5">Our Beauty Experts</h2>
              <p>
                Whether you are preparing for a special occasion or just doing
                the routine beauty therapies, using a professional beauty and
                spa expert has numerous benefits and is the right thing to do.
                Below are some of our Beauty Experts whom with no doubt will
                give you the look you so desired
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="testimonial__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.map(({ id, title, image, description }) => {
            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <img src={image} alt="" className="testimonial__img" />
                <br />
                <br />
                <h3 className="testimonial__name">{title}</h3>

                <p>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </p>
                <p className="testimonial__description">{description}</p>
              </SwiperSlide>
            );
          })}
          <br />
          <br />
          <br />
        </Swiper>
      </section>
    </div>
  );
};

export default About;
