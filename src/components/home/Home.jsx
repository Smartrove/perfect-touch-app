import React from "react";
import logo from "../../assets/images/p_logo.png";
import p4 from "../../assets/images/p4.jpg";
import p6 from "../../assets/images/p6.jpg";
import p23 from "../../assets/images/p23.jpg";
import p2 from "../../assets/images/p2.jpg";
import p20 from "../../assets/images/p20.jpg";
import p21 from "../../assets/images/p21.jpg";
import p5 from "../../assets/images/p5.jpg";
import p7 from "../../assets/images/p7.jpg";
import p14 from "../../assets/images/p14.jpg";
import p11 from "../../assets/images/p11.jpg";
import p13 from "../../assets/images/p13.jpg";
import p18 from "../../assets/images/p18.jpg";
import p22 from "../../assets/images/p22.jpg";
import partner2 from "../../assets/images/partner-2.jpg";
import partner1 from "../../assets/images/partner-1.jpg";
import partner3 from "../../assets/images/partner-3.jpg";
import partner4 from "../../assets/images/partner-4.jpg";
import "./home.css";
import img6 from "../../assets/images/p6.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <section>
        <div className="welcome">
          <div className="welcome-content">
            Welcome to
            <span className="brand"> Perfect Touch Unisex Salon and Spa</span>.
            We are a classical total body care service provider. Whether it is
            body massage, unisex salon or make up artistry, we are here for you
            for complete relaxation of mind.
          </div>
          <div>
            <img src={img6} alt="" className="welcome-img" />
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <h2 class="mb-4">Our Work</h2>
              <p>
                A classical total body care service provider. Whether its body
                massage, unisex salon, make up artistry, we are here for you for
                complete relaxation of mind.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img
                  class="img-fluid"
                  src={p5}
                  width="440"
                  height="440"
                  alt="Colorlib Template"
                />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img src={p7} className="img-psev" alt="Colorlib Template" />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img
                  class="img-fluid"
                  src={p14}
                  width="440"
                  height="440"
                  alt="Colorlib Template"
                />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img
                  class="img-fluid"
                  src={p11}
                  width="440"
                  height="440"
                  alt="Colorlib Template"
                />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img
                  class="img-fluid"
                  src={p13}
                  width="440"
                  height="440"
                  alt="Colorlib Template"
                />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 ftco-animate">
              <a href="#" class="work-entry">
                <img
                  class="img-fluid"
                  src={p18}
                  width="440"
                  height="440"
                  alt="Colorlib Template"
                />
                <div class="info d-flex align-items-center">
                  <div>
                    <div class="icon mb-4 d-flex align-items-center justify-content-center"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
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
        <div class="row mt-3">
          <div class="col-sm-3">
            <div class="card border-0 bg-light">
              <img
                class="rounded-circle mx-auto"
                src={p23}
                width="100"
                height="100"
                alt=""
              />
              <h3 class="text-center text-dark">Make Up Expert</h3>
              <h1
                style={{
                  fontSize: "15px",
                  color: "purple",
                  fontWeight: "bold",
                }}
                class="text-center"
              >
                Dasola
              </h1>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card border-0 bg-light">
              <img
                class="rounded-circle mx-auto"
                src={p20}
                width="100"
                height="100"
                alt=""
              />
              <h3 class="text-center text-dark">Hair Stylist</h3>
              <h1
                style={{
                  fontSize: "15px",
                  color: "purple",
                  fontWeight: "bold",
                }}
                class="text-center"
              >
                Dolapo
              </h1>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card border-0 bg-light">
              <img
                class="rounded-circle mx-auto"
                src={p22}
                height="100"
                width="100"
                alt=""
              />
              <h3 class="text-center text-dark">Nail Expert</h3>
              <h1
                style={{
                  fontSize: "15px",
                  color: "purple",
                  fontWeight: "bold",
                }}
                class="text-center"
              >
                Shakirat
              </h1>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card border-0 bg-light">
              <img
                class="rounded-circle mx-auto"
                src={p21}
                height="100"
                width="100"
                alt=""
              />
              <h3 class="text-center text-dark">Hair Stylist</h3>
              <h1
                style={{
                  fontSize: "15px",
                  color: "purple",
                  fontWeight: "bold",
                }}
                class="text-center"
              >
                Olohunwa
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-discount img image-six">
        <div class="overlay"></div>
        <div class="container discount-container">
          <div class="row justify-content-end">
            <div class="col-md-5 discount ftco-animate">
              <h3>Save up to 25% Off</h3>
              <h2 class="mb-4">Student Discount</h2>
              <p class="mb-4"></p>
              <button className="book-b">
                <a
                  href="https://api.whatsapp.com/send?phone=2348126723729&app=facebook&entry_point=page_cta&fbclid=IwAR1dzsVH52z-SkcX3Lb9LgrLUvmj9Z9sA6nddpMNHXnCkZH6lK4zEZ2-uUQ"
                  class="btn btn-white btn-outline-white px-4 py-3"
                  target="_blank"
                >
                  Book Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="first-section">
          <div className="first-section-image">
            <span>
              <img src={p4} alt="" className="first-section-image" />
            </span>
          </div>
          <div className="content-wrapper">
            <h3 class="heading">About Us</h3>
            <p className="content-paragraph">
              We are a classical total body care service provider. Whether it is
              body massage, unisex salon or make up artistry, we are here for
              you for complete relaxation of mind. At the end of a particularly
              draining week, it’s only natural for our body and our mind to feel
              drained. In these moments, it’s safe to say that anyone and
              everyone could benefit from a relaxing spa treatment. This is your
              time to unwind and relax. It’s your time to treat yourself to a
              rare and cherished moment of relaxation. It’s the time that you
              owe to yourself for all of the hard work and challenges you
              continue to face week-after-week.
            </p>
          </div>
        </div>
      </section>

      <section class="ftco-partner partner-container">
        <div class="container">
          <div class="row partner justify-content-center">
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-3 ftco-animate">
                  <a href="#" class="partner-entry">
                    <img
                      src={partner1}
                      class="img-fluid"
                      alt="Colorlib template"
                    />
                  </a>
                </div>
                <div class="col-md-3 ftco-animate">
                  <a href="#" class="partner-entry">
                    <img
                      src={partner2}
                      class="img-fluid"
                      alt="Colorlib template"
                    />
                  </a>
                </div>
                <div class="col-md-3 ftco-animate">
                  <a href="#" class="partner-entry">
                    <img
                      src={partner3}
                      class="img-fluid"
                      alt="Colorlib template"
                    />
                  </a>
                </div>
                <div class="col-md-3 ftco-animate">
                  <a href="#" class="partner-entry">
                    <img
                      src={partner4}
                      class="img-fluid"
                      alt="Colorlib template"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <h2 class="mb-4 mt-5">Beauty Pricing</h2>
              <p>
                A classical total body care service provider. Whether its body
                massage, unisex salon, make up artistry, we are here for you for
                complete relaxation of mind.
              </p>
            </div>
          </div>
          <div class="row pricing-flex">
            <div class=" ftco-animate basic">
              <div class="pricing-entry pb-5 text-center">
                <div>
                  <h3 class="mb-4">Basic</h3>
                </div>
                <ul>
                  <li>Nail Cutting &amp; Styling</li>
                  <li>Hair Trimming</li>
                  <li>Spa Therapy</li>
                  <li>Body Massage</li>
                  <li>Manicure</li>
                </ul>
                <p class="button text-center">
                  <Link to="services">View</Link>
                </p>
              </div>
            </div>
            <div class=" ftco-animate standard">
              <div class="pricing-entry pb-5 text-center">
                <div>
                  <h3 class="mb-4">Standard</h3>
                </div>
                <ul>
                  <li>Nail Cutting &amp; Styling</li>
                  <li>Hair Trimming</li>
                  <li>Spa Therapy</li>
                  <li>Body Massage</li>
                  <li>Manicure</li>
                </ul>
                <p class="button text-center">
                  <Link to="services">View</Link>
                </p>
              </div>
            </div>
            <div class=" ftco-animate premium">
              <div class="pricing-entry active pb-5 text-center">
                <div>
                  <h3 class="mb-4">Premium</h3>
                </div>
                <ul>
                  <li>Nail Cutting &amp; Styling</li>
                  <li>Hair Trimming</li>
                  <li>Spa Therapy</li>
                  <li>Body Massage</li>
                  <li>Manicure</li>
                </ul>
                <p class="button text-center">
                  <Link to="services">View</Link>
                </p>
              </div>
            </div>
            <div class=" ftco-animate platinum">
              <div class="pricing-entry pb-5 text-center">
                <div>
                  <h3 class="mb-4">Platinum</h3>
                </div>
                <ul>
                  <li>Nail Cutting &amp; Styling</li>
                  <li>Hair Trimming</li>
                  <li>Spa Therapy</li>
                  <li>Body Massage</li>
                  <li>Manicure</li>
                </ul>
                <p class="button text-center">
                  <Link to="services">View</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-appointment">
        <div class="overlay"></div>
        <div class="container">
          <div class="row d-md-flex align-items-center">
            {/* <div class="col-md-2"></div> */}
            <div class="col-md-6 d-flex align-self-stretch ftco-animate">
              <div class="appointment-info text-center p-5">
                <div class="mb-4">
                  <h3 class="mb-3">Address</h3>
                  <p>Shop 1 and 6, Osun Mall, Osogbo, Nigeria</p>
                </div>
                <div class="mb-4">
                  <h3 class="mb-3">Phone</h3>
                  <p class="day">
                    <strong>
                      <a href="tel:+2348126723729">
                        <span class="icon icon-phone"></span>
                        <span class="text"> +2348126723729</span>
                      </a>
                    </strong>
                  </p>
                </div>
                <div>
                  <h3 class="mb-3">Opening Hours</h3>
                  <p class="day">
                    <strong>Monday - Friday</strong>
                  </p>
                  <span>08:00am - 09:00pm</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 appointment pl-md-5 ftco-animate">
              <h3 class="mb-3">Appointments</h3>
              <form class="appointment-form" onSubmit={handleSubmit}>
                <div class="row form-group d-flex">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="row form-group d-flex">
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <div class="icon">
                        <span class="ion-md-calendar"></span>
                      </div>
                      <input
                        type="text"
                        id="appointment_date"
                        class="form-control"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <a
                    class="btn btn-outline-warning"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=2348126723729&app=facebook&entry_point=page_cta&fbclid=IwAR1dzsVH52z-SkcX3Lb9LgrLUvmj9Z9sA6nddpMNHXnCkZH6lK4zEZ2-uUQ"
                  >
                    Book Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
