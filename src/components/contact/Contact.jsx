import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="ftco-section contact-section">
        <div class="container mt-5">
          <div class="row block-9">
            <div class="col-md-4 contact-info ftco-animate">
              <div class="row">
                <div class="col-md-12 mb-4">
                  <h2 class="h4">Contact Information</h2>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> Shop 1 and 6, Osun Mall, Osogbo,
                    Nigeria
                  </p>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span></span>{" "}
                    <a href="tel:+2348126723729">
                      <span class="icon icon-phone"></span>
                      <span class="text" style={{ color: "rgb(244, 9, 244)" }}>
                        {" "}
                        +2348126723729
                      </span>
                    </a>
                  </p>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span></span>{" "}
                    <a
                      href="mailto:perfecttouches2015@gmail.com"
                      target="_blank"
                    >
                      <span class="icon icon-envelope"></span>
                      <span class="text" style={{ color: "rgb(244, 9, 244)" }}>
                        {" "}
                        perfecttouches2015@gmail.com
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6 ftco-animate">
              <form action="#" class="contact-form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <a
                    class="btn btn-outline-success text-dark"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=2348126723729&app=facebook&entry_point=page_cta&fbclid=IwAR1dzsVH52z-SkcX3Lb9LgrLUvmj9Z9sA6nddpMNHXnCkZH6lK4zEZ2-uUQ"
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div>
        <iframe
          title=""
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253083.78262363476!2d4.4392689987374165!3d7.636376871623599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1si-frame%20map%20of%20osun%20mall!5e0!3m2!1sen!2sng!4v1663658627968!5m2!1sen!2sng"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
