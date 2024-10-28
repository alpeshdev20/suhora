import './home.css'
import { videoSrc, scrollIcon, aboutUS01, aboutUS02, aboutUS03, mikra, About_us, drdo, nhpc, haryana, isro, userImg, icye, planet, retsch, setlloc, satvu, veng
} from './img-src'; 

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
// import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';

function HomePage() {
  const $ = jQuery.noConflict();
  
  useEffect(() => {
    const initializeCarousel = () => {
     
    if ($(".about-carousel").hasClass("owl-loaded")) return;

      $(".about-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        responsive: {
          0: { items: 1 },
          768: { items: 3 }
        }
      });

      $(".client-logo-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav: false,
        margin: 10,
        responsive: {
          0: { items: 1 },
          768: { items: 6 }
        }
      });

      $(".partner-logo-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav: false,
        margin: 50,
        responsive: {
          0: { items: 1 },
          768: { items: 4 }
        }
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav: false,
        margin: 20,
        responsive: {
          0: { items: 1 },
          768: { items: 2 }
        }
      });

      $('.why-us-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
        }
      });
    };

    initializeCarousel()
  }, [$]);

  return (
    <div>
    <section className="top-video-banner">
      <div className="container-fluid p-0 mb-0">  
        <div className="content">
          <video className="w-100" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
       </div>
     </div>
    <div className="scroll-icon">
      <a href="#about-us"><img src={scrollIcon} alt /></a>
    </div>
  </section>
  {/* Carousel End */}
  {/* About Start */}
  <section id="about-us" className="about-us">
    <div className="container">
      <div className="text-center mx-auto mb-5">
        <h2 className="mb-3">About suhora</h2>
        <p>At SUHORA, we are driven by the passion to make data accessible and actionable for those who need it the most. Founded on the principle that space analytics should empower, not overwhelm, we are dedicated ourselves in demystifying satellite data for practical solutions and everyday applications. </p>
        <p>Our team, a blend of seasoned experts and innovative thinkers, is dedicated to break down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of satellite imagery and the information it stores within.</p>
      </div>
      <div className="about-us-slider">
        <div className="container-xxl">
          <div className="container">
            <div className="owl-carousel about-carousel">
              <div className="testimonial-item text-center">
                <img className="img-fluid p-2 mx-auto" src={aboutUS01} />
              </div>
              <div className="testimonial-item text-center">
                <img className="img-fluid p-2 mx-auto" src={aboutUS02}/>
              </div>
              <div className="testimonial-item text-center">
                <img className="img-fluid p-2 mx-auto" src={aboutUS03} />
              </div>
              <div className="testimonial-item text-center">
                <img className="img-fluid p-2 mx-auto" src={mikra} />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
    </div>
    <div className="container-fluid pb-4">
      <div className="why-us text-center mx-auto">
        <h2>why suhora?</h2>
        <p className>Elevating Satellite data with cutting edge, scalable solutions. </p>
      </div>
    </div>
  </section>
  <section className="why-suhora-section">
    <div className="container-fluid p-0">
      <div className="owl-carousel why-us-slider">
        <div className="mySlides ">
          <img src={About_us} style={{width: '100%'}} />
          <div className="container">
            <div className="text">
              <h3>Multi Sensor Approach</h3>
              <p>Our unique cross sensor approach combines the potential of thermal, optical and SAR data together enabling frequent revisit and all weather surveillance at best available resolution for unmatched monitoring capabilities.</p>
            </div>
          </div>
        </div>
        <div className="mySlides">
          <img src={About_us} style={{width: '100%'}} />
          <div className="container">
            <div className="text">
              <h3>Multi Sensor Approach</h3>
              <p>Our unique cross sensor approach combines the potential of thermal, optical and SAR data together enabling frequent revisit and all weather surveillance at best available resolution for unmatched monitoring capabilities.</p>
            </div>
          </div>
        </div>
        <div className="mySlides">
          <img src={About_us} style={{width: '100%'}} />
          <div className="container">
            <div className="text">
              <h3>Multi Sensor Approach</h3>
              <p>Our unique cross sensor approach combines the potential of thermal, optical and SAR data together enabling frequent revisit and all weather surveillance at best available resolution for unmatched monitoring capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About End */}
  {/*Our Product-*/}
  <section className="our-product">    
    <div className="container">
      <div className="row">
        <div className="product-col">
          <div className="title-sec col-lg-10 m-auto text-center mx-auto mb-8">
            <h2 className="mb-3">Our Products</h2>
            <h4>Tailored Solutions for Enterprise Users in Defense and Disaster Management</h4>
            <p>With a common thread of multi-sensor near real time approach our products are specifically designed to meet the needs of enterprise users operating in defence and disaster management sectors.</p>
          </div>
          <div className="product-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="card spade">
                  <div className="card-body">
                    <h5 className="card-title">SPADE</h5>
                    <p className="card-text">A unified SaaS platform offering seamless access to 250 + sensors encompassing optical thermal and SAR data enabling users to to explore, task and analyze satellite data for a spectrum of applications.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card mirka">
                  <div className="card-body">
                    <h5 className="card-title">MIRKA</h5>
                    <p className="card-text">Empowering defence with synergy of human intellect and AI for unparalleled situational awareness and strategic readiness in a rapidly evolving global security landscape setting a new benchmark in defence intelligence.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card sid">
                  <div className="card-body">
                    <h5 className="card-title">SID</h5>
                    <p className="card-text">Developed with the aim of shaping a safer and prepared world by harnessing satellite data and advanced analytics offering invaluable insights in disaster management and insurance.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="client-logo-slider-section"> 
      <div className="client-logo">
        <div className="container text-center mx-auto">
          <h3 className="mb-5">OUR ESTEEMED PARTNERS</h3>
        </div>
        {/* Testimonial Start */}
        <div className="container-xxl">
          <div className="owl-carousel client-logo-carousel">
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={icye} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={planet} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={retsch} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={setlloc} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={satvu} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={veng} />
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
    </div>
  </section>
  {/*End our product*/}
  {/*Our Partner*/}
  <section className="our-partner">    
    <div className="client-logo-slider-section"> 
      <div className="client-logo">
        <div className="container text-center mx-auto">
          <h3 className="mb-5 fw-light">OUR VALUABLE CUSTOMERS</h3>
        </div>
        {/* Testimonial Start */}
        <div className="container-xxl">
          <div className="owl-carousel partner-logo-carousel">
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={drdo} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={nhpc} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={haryana} />
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid p-2 mx-auto" src={isro} />
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
    </div>
  </section>
  <section className="testimonial-section">
    <div className="container-xxl">
      <div className="container">
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item text-center">
            <div className="testimonial-content">
              <div className="testimonial-text text-center p-4">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
              </div>
              <img className="img-fluid rounded-circle p-2 mx-auto" src={userImg} style={{width: 100, height: 100}} />
            </div>
            <div className="user-details">
              <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <h5 className="mb-1">Doner Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-content">
              <div className="testimonial-text text-center p-4">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
              </div>
              <img className="img-fluid rounded-circle p-2 mx-auto" src={userImg} style={{width: 100, height: 100}} />
            </div>
            <div className="user-details">
              <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <h5 className="mb-1">Doner Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-content">
              <div className="testimonial-text text-center p-4">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
              </div>
              <img className="img-fluid rounded-circle p-2 mx-auto" src={userImg} style={{width: 100, height: 100}} />
            </div>
            <div className="user-details">
              <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <h5 className="mb-1">Doner Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default HomePage
