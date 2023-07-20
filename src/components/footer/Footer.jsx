import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer class="ftco-footer ftco-section img">
        <div class="overlay"></div>
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4 mt-5">
              <div class="ftco-footer-widget mb-4 icon-wrapper">
                <h2 class="ftco-heading-2">About Us</h2>
                <p style={{ marginBottom: "-20px" }}>
                  A classical total body care service provider. Whether its body
                  massage, unisex salon, make up artistry, we are here for you
                  for complete relaxation of mind.
                </p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-left mt-5 list-items">
                  <li class="ftco-animate">
                    <a href="#">
                      <span class="icon-twitter">
                        <TwitterIcon />
                      </span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a
                      href="https://web.facebook.com/perfecttouchessalon"
                      target="_blank"
                    >
                      <span class="icon-facebook">
                        <FacebookIcon />
                      </span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a
                      href="https://www.instagram.com/perfecttouchessalon"
                      target="_blank"
                    >
                      <span class="icon-instagram">
                        <InstagramIcon />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 mt-5">
              <div class="ftco-footer-widget mb-4 ml-md-4">
                <h2 class="ftco-heading-2">Spa Center</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block">
                      Body Care
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block">
                      Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block">
                      Hydrotherapy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block">
                      Yoga
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block">
                      Sauna
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block">
                      Aquazone
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Question?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <span class="icon icon-map-marker"></span>
                      <span class="text">
                        Shop 1 and 6, Osun Mall, Osogbo, Nigeria
                      </span>
                    </li>
                    <li>
                      <a href="tel:+2348126723729">
                        <span class="icon icon-phone"></span>
                        <span class="text">+2348126723729</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:perfecttouches2015@gmail.com"
                        target="_blank"
                      >
                        <span class="icon icon-envelope"></span>
                        <span class="text">perfecttouches2015@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p
                style={{
                  color: "purple",
                  fontFamily: "Georgia, Times New Roman, Times, serif",
                }}
              >
                Copyright &copy; {date}
                <br />
                Perfect Touch Unisex Salon and Spa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
