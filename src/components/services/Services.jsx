import React from "react";
import "./services.css";
import { ServicesData } from "../about/Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import logo from "../../assets/images/p_logo.png";
import p4 from "../../assets/images/p4.jpg";
import p6 from "../../assets/images/p6.jpg";
import p2 from "../../assets/images/p2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <section>
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
          {ServicesData.map(({ id, title, image, description }) => {
            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <img src={image} alt="" className="testimonial__img" />
                <br />
                <br />
                <p>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </p>
              </SwiperSlide>
            );
          })}
          <br />
          <br />
          <br />
        </Swiper>
      </section>

      <section>
        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            BARBING SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Shave</td>
                <td class="text-success">700</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Adult HairCut and Wash</td>
                <td class="text-success">1500</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Adult HairCut</td>
                <td class="text-success">1000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Kid HairCut</td>
                <td class="text-success">700</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Relocking</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>HairCut and Dye</td>
                <td class="text-success">2500</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Shave and Dye</td>
                <td>2000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Gold Tint</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>White Tint</td>
                <td class="text-success">7000</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Colored Tint</td>
                <td class="text-success">7000</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Kid HairCut and Dye</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Dye</td>
                <td class="text-success">1500</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>HairCut and Relaxe</td>
                <td class="text-success">1500</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>HairCut, Relaxe and Dye</td>
                <td class="text-success">3000</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>Starting Dread</td>
                <td class="text-success">20000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            HAIR DRESSING SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Knotless Braid</td>
                <td class="text-success">9000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Big Braids</td>
                <td class="text-success">6000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Braids</td>
                <td class="text-success">7000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Big Ghana Weaving</td>
                <td class="text-success">6000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Small Ghana Weaving</td>
                <td class="text-success">8000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Parking Gel</td>
                <td class="text-success">3000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Frontal Installation</td>
                <td class="text-success">3000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Weaving</td>
                <td class="text-success">1000</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Retouching</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Ponny Tail</td>
                <td>3000</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Washing of Hair</td>
                <td class="text-success">1000</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Closure Installation</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>Fixing of Closure</td>
                <td class="text-success">4000</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>Fixing of Frontal</td>
                <td class="text-success">5000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            SPA SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Full Body Massage</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Deep Tissue Massage</td>
                <td class="text-success">20000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Hot Stone Massage</td>
                <td class="text-success">20000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Aromatheraphy</td>
                <td class="text-success">20000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Morrocan Bath</td>
                <td class="text-success">20000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Body Exfoliation</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Steam Bath</td>
                <td class="text-success">10000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Facial Treatment</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Pedicure</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Manicure</td>
                <td class="text-success">2000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            NAIL FIXING SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Stick-On with regular polish</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Stick-On with gel polish</td>
                <td class="text-success">3000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Acrylics on natural nails</td>
                <td class="text-success">4000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Acrylics on Stick-On short</td>
                <td class="text-success">6000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Acrylics on Stick-On long</td>
                <td class="text-success">7000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Sticker and Stone Paper Finger</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Fixing of big toe nails</td>
                <td class="text-success">1000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Fixing of all toe nails</td>
                <td class="text-success">2000</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Fixing of all toe with gel paint</td>
                <td class="text-success">3000</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Regular polish on natural nails</td>
                <td class="text-success">1000</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Nails Grooming</td>
                <td class="text-success">1500</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Male Nails Art</td>
                <td class="text-success">2000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            BODY WAXING SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Armpit Waxing</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bikini and Vajaycial Waxing</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jaw Waxing</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Leg Waxing</td>
                <td class="text-success">5000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Full Body Waxing</td>
                <td class="text-success">25000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            TEETH WHITENING SECTION PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Laser Teeth Whitening</td>
                <td class="text-success">35000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Teeth Whitening Home Kit</td>
                <td class="text-success">15000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            FACIAL PACKAGE PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Preservative Facials</td>
                <td class="text-success">17000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Corrective Facials</td>
                <td class="text-success">19000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Preservative and Corrective</td>
                <td class="text-success">25000(+cleanser)</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Micro-derm abrasion</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Acne Facials</td>
                <td class="text-success">13000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Derma-Planning Facials</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Brightening Facials</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>High Frequency Facials </td>
                <td class="text-success">13000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            MASSAGE PACKAGES PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Relaxation Massage (SPA)</td>
                <td class="text-success">17000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Relaxation Massage (SPA) Home and Room Services</td>
                <td class="text-success">25000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Deep Tissue (SPA) Hotstone</td>
                <td class="text-success">20000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Deep Tissue (SPA) Hotstone Home and Room Services</td>
                <td class="text-success">27000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Swedish Massage(SPA)</td>
                <td class="text-success">13000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Swedish Massage(SPA) Home and Room Services</td>
                <td class="text-success">15000 - 17000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Aromatheraphy Massage(SPA)</td>
                <td class="text-success">20000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h1 class="text-center" style={{ color: "purple" }}>
            BODY TREATMENT PACKAGES PRICING
          </h1>
          <table class="table text-justify mx-auto">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service</th>
                <th scope="col">Pricing(#)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Morrocan Bath (Hammam)</td>
                <td class="text-success">25000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Body Exfoliation and Body Scrub</td>
                <td class="text-success">17000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Steam Bath- Sauna Treats</td>
                <td class="text-success">12000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Body Masking</td>
                <td class="text-success">15000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Pedicure and Manicure</td>
                <td class="text-success">7000 - in SPA(10000)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="ftco-section ftco-discount img section-bg">
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-end mt-5 mb-5">
            <div class="col-md-5 discount ftco-animate">
              <h3>Save up to 25% Off</h3>
              <h2 class="mb-4">Student Discount</h2>

              <p>
                <Link
                  to="https://api.whatsapp.com/send?phone=2348126723729&app=facebook&entry_point=page_cta&fbclid=IwAR1dzsVH52z-SkcX3Lb9LgrLUvmj9Z9sA6nddpMNHXnCkZH6lK4zEZ2-uUQ"
                  target="_blank"
                  class="btn btn-warning btn-outline-white px-4 py-3 text-light"
                >
                  Book Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
