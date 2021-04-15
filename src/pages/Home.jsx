import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


import Navbar from "../components/Navbar";

import Suite from "../img/suite.jpg";
import JuniorSuite from "../img/junior-suite.jpg";
import Standar from "../img/standar.jpg";
import Footer from "../img/footer.jpg";

export default function Home() {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <>
      <Navbar />
      <section className="hero">
        <h1 data-aos="fade-up">
          Enjoy your holidays in the <span>Best</span> Hotel
        </h1>
        <a href="/" className="btn btn-white" data-aos="fade-up">
          Explore
        </a>
      </section>
      <div className="container">
        <section className="cta-pools">
          <div className="cta-pools__left" data-aos="fade-left">
            <h2>
              <span>Relax</span> in the best pools with ocean view
            </h2>
            <a href="/" className="btn btn-blue">
              Book now
            </a>
          </div>
          <div className="cta-pools__right" data-aos="fade-right"></div>
        </section>
        <section className="cta-facilities">
          <div className="cta-facilities__left" data-aos="fade-left"></div>
          <div className="cta-facilities__right" data-aos="fade-right">
            <h2>
              Enjoy the <span>variaty</span> of our facilities
            </h2>
            <a href="/" className="btn btn-blue">
              Check our packages
            </a>
          </div>
        </section>
        <section className="cta-great-time">
          <div className="cta-great-time__left" data-aos="fade-left">
            <h2>
              Have a <span>great</span> time in the breakfast, dinner and supper
            </h2>
            <a href="/" className="btn btn-blue">
              Book now
            </a>
          </div>
          <div className="cta-great-time__right" data-aos="fade-right"></div>
        </section>
        <section className="rooms">
          <h1 data-aos="fade-up">Rooms</h1>
          <div className="rooms__container" data-aos="fade-down">
            <div className="category">
              <img src={Suite} alt="suite" />
              <div className="category__title">
                <a href="/">Suite</a>
              </div>
            </div>
            <div className="category">
              <img src={JuniorSuite} alt="suite" />
              <div className="category__title">
                <a href="/">Junior Suite</a>
              </div>
            </div>
            <div className="category">
              <img src={Standar} alt="suite" />
              <div className="category__title">
                <a href="/">Standar</a>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-meals">
          <div className="cta-meals__left" data-aos="fade-left"></div>
          <div className="cta-meals__right" data-aos="fade-right">
            <h2>Let yourself be <span>pampered</span> with the best room service</h2>
            <a href="/" className="btn btn-blue">
              Check our packages
            </a>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-container">
          <div className="hotel-info">
            <img src={Footer} alt="footer" data-aos="fade-up"/>
            <div className="contact" data-aos="fade-down">
              <h2>Travels<span>Hotel&copy;</span></h2>
              <p><i className="fas fa-map-marker-alt" ></i> 123 Best hotel Ever Avenue, At the beach, 0123456</p>
              <p><i className="fas fa-phone-alt" ></i> Phone: 555-789-456</p>
              <p><i className="far fa-envelope" ></i> Email: 555-789-456</p>
            </div>
          </div>
          <div className="social-links">
            <h2 data-aos="fade-up">Social <span>Links</span></h2>
            <a href="/" data-aos="fade-down"><i className="fab fa-facebook"></i></a>
            <a href="/" data-aos="fade-down"><i className="fab fa-instagram"></i></a>
            <a href="/" data-aos="fade-down"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="quick-links">
            <h2 data-aos="fade-up">Quick <span>Links</span></h2>
            <ul className="quick-links__list" data-aos="fade-down">
              <li><a href="/">Home</a></li>
              <li><a href="/">Rooms</a></li>
              <li><a href="/">Packages</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
