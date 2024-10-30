import { useEffect } from "react";

export default function AboutUs() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const initializeCarousel = () => {
      $('.one-time').not(".slick-initialized").slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
  
      $('.gallery-carousel').not(".slick-initialized").slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    };

    initializeCarousel();
    window.scrollTo(0, 0);
  }, [$]);


  return (
    <>
      {/* Carousel Start */}
      <section className="sub-top-image-banner">
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100 text-white">
              <div className="col-lg-6">
                <p>
                  Transforming industries with AI-driven spatial insights for
                  informed decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel End */}
      <section className="mission-vission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0 mission-col">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/Our-mission-image.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">Our Mission </h4>
                  <p className="card-text">
                    Transforming global surveillance with space analytics to predict
                    and solve critical security and environmental challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 vission-col ">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/Our-vision-image.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">Our Vission</h4>
                  <p className="card-text">
                    Shaping a future where Space and Technology work together to
                    protect and nurture human life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-suhora-section">
        <div className="overlay" />
        <div className="container">
          <div className="row founder-testimonial">
            <h3 className="text-center mb-4 title">
              Here's what our founders have to say
            </h3>
            <div className="col-lg-10 m-auto">
              <div className="one-time">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/KrishanuAcharya.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Krishanu Acharya</h5>
                        <p className="card-text">CEO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Suhora exists to make a meaningful impact, driven by
                          innovation, commitment, and trust to transform space
                          analytics. <br />
                          We believe that, together, we can tackle humanity’s most
                          critical challenges and creating a safer, more resilient
                          world
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/RupeshKumar.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Rupesh Kumar</h5>
                        <p className="card-text">CTO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          The world today is both challenging and exciting.
                          Throughout history, humanity has thrived through
                          innovation and perseverance. This continues today, even
                          amidst economic fluctuations and conflicts. Despite these
                          ups and downs, we are moving towards progress.
                          <br />
                          At Suhora, we believe innovation is the cornerstone of
                          this progress. Technology-driven efficiency allows us to
                          keep pushing boundaries, crossing new frontiers, and
                          solving new problems. Together, we are shaping a future
                          where challenges become opportunities, and progress is an
                          unstoppable force.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/AmitKumar.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Amit Kumar</h5>
                        <p className="card-text">COO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Space is vast and endless, and so should be the
                          opportunities to explore it. With advancements in
                          satellite capabilities and data processing, We at Suhora
                          bring technology as a bridge not a barrier. Our goal is to
                          bring space closer to everyone with more comprehensive
                          insights to address complex challenges being faced today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/TanmoyAdhikary.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Tanmoy Adhikary</h5>
                        <p className="card-text">Director-Strategy</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          We at Suhora work towards creating a firm foundation for
                          consistent and sustainable growth, rather than just short
                          term revenue acceleration. The strategy is always guided
                          by a philosophy of creating a legacy organization which
                          will partner with Government and Private to build a better
                          future for the community at large, while taking care of
                          all our stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row team-card">
            <div className="our-team">
              <h3 className="text-center title">Our Team</h3>
              <p className="text-center">
                We’re a dynamic group of individuals who are passionate about what
                we do.
              </p>
              <div className="leadership-title">
                <h3 className="text-center">Leadership Team</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/KrishanuAcharya.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Krishanu Acharya</h5>
                    <p className="card-text">CEO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/RupeshKumar.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Rupesh Kumar</h5>
                    <p className="card-text">CTO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/AmitKumar.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Amit Kumar</h5>
                    <p className="card-text">COO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/TanmoyAdhikary.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Tanmoy Adhikary</h5>
                    <p className="card-text">Director-Strategy</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/SurojitBose.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Surojit Bose</h5>
                    <p className="card-text">Advisor</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/NavneetKaushik.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Navneet Kaushik</h5>
                    <p className="card-text">Advisor</p>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gallery-section">
            <h3 className="text-center mb-4 title">Gallery</h3>
            <div className="gallery-carousel">
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-1.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-2.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-3.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-4.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-5.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-6.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-7.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-8.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-9.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-10.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-11.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  );
}
