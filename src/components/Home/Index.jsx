import { useEffect } from "react";

function HomePage() {
  const $ = jQuery.noConflict();

  // Animation
  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data("current-slide") || 0;

    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 &&
        currentSlickIndex == $currentSlider.data("slider-length") - 1)
    ) {
      return;
    }

    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick("slickPrev");
    } else {
      $currentSlider.slick("slickNext");
    }
  }

  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data("current-slide", currentSlide);
  }

  useEffect(() => {
    const initializeCarousel = () => {
      const slider = $(".slider");

      // Animation
      slider.on("init", function (e, slick) {
        var $firstAnimatingElements = $("div.slick-slide:first-child").find(
          "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
      });

      slider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          'div.slick-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      });

      slider
        .each(function (index, element) {
          var $element = $(element);
          // set the length of children in each loop
          // but the better way for performance is to set this data attribute on the div.slider in the markup
          $element.data("slider-length", $element.children().length);
        })
        .not(".slick-initialized")
        .slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical: true,
          arrows: false,
          autoplay: true,
        })
        .on("afterChange", onSliderAfterChange)
        .on("wheel", onSliderWheel);

      $(".about-carousel")
        .not(".slick-initialized")
        .slick({
          autoplay: true,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
          arrows: true,
          nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
          prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
          ],
        });

      //Client Logo

      $(".client-logo-carousel")
        .not(".slick-initialized")
        .slick({
          arrows: false,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".partner-logo-carousel")
        .not(".slick-initialized")
        .slick({
          arrows: false,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".testimonial-carousel")
        .not(".slick-initialized")
        .slick({
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 1,
              },
            },
          ],
        });
    };

    initializeCarousel();
    window.scrollTo(0, 0);
  }, [$]);

  return (
    <>
      {/* Carousel Start */}
      <section className="sub-top-video-banner">
        <div className="overlay" />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="./assets/images/Website_Planet & Satellite Video_v2_LowRes.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100 text-white">
              <div className="col-lg-6">
                <h1>Space Analytics Simplified</h1>
                <p className="mb-0">
                  {" "}
                  At SUHORA, we're driven by the passion to Make data accessible
                  and actionable for those who need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel End */}
      {/* About Start */}
      <section id="about-us" className="about-us">
        <section className="bg-animation">
          <span />
          <span />
        </section>
        <div className="container">
          <div className="about-content-col">
            <div className="text-center mx-auto mb-5">
              <h2 className="mb-3">About suhora</h2>
              <p>
                At SUHORA, we're driven by the passion to make data accessible
                and actionable for those who need it the most. Founded on the
                principle that space analytics should empower, not overwhelm,
                we've dedicated ourselves in demystifying satellite data for
                practical solutions and everyday applications.{" "}
              </p>
              <p>
                Our team, a blend of seasoned experts and innovative thinkers,
                is dedicated to break down complex information into clear,
                actionable insights that drive decision-making across various
                sectors. Suhora Technologies stands at the intersection of
                innovation and utility, reshaping how industries leverage the
                untapped potential of satellite imagery and the information it
                stores within.
              </p>
            </div>
            <div className="about-us-slider-slick">
              {/* Testimonial Start */}
              <div className="container-xxl">
                <div className="container">
                  <div className="about-carousel">
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image1.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image2.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image3.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image4.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image5.png"
                      />
                    </div>
                    {/* <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image6.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image7.png"
                      />
                    </div> */}
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/Ref_image8.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial End */}
            </div>
          </div>
        </div>
        <div className="container-fluid pb-4">
          <div className="why-us text-center mx-auto">
            <h2>why suhora?</h2>
            <p className="">
              Elevating Satellite data with cutting edge, scalable solutions.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* About Start End*/}
      {/* why Suhora Start */}
      <section className="why-suhora-section">
        <div className="container-fluid p-0">
          <div className="slider">
            <div
              className="slick-slide text-right"
              style={{
                backgroundImage: 'url("./assets/images/multi-sensor.png")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Multi Sensor Approach</h3>
                      <p>
                        Our unique cross sensor approach combines the potential
                        of thermal, optical and SAR data together enabling
                        frequent revisit and all weather surveillance at best
                        available resolution for unmatched monitoring
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right"
              style={{
                backgroundImage: 'url("./assets/images/Near-real-time.png")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Near Real Time</h3>
                      <p>
                        Our constellation of 250+ sensors along with rapid
                        processing ensures guaranteed data collection in near
                        real time, empowering clients to stay ahead and access
                        critical information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right"
              style={{
                backgroundImage: 'url("./assets/images/Higheraccuracy.png")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Higher Accuracy</h3>
                      <p>
                        We leverage a diverse range of satellite sensors to
                        deliver precise and tailored insights, ensuring accurate
                        solutions are designed to meet your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right"
              style={{
                backgroundImage:
                  'url("./assets/images/Insightful-analysis.png")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Insightful Analysis </h3>
                      <p>
                        We intend to deliver customized, cost effective
                        solutions and data driven analytics specifically crafted
                        to meet your requirements ensuring operational
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
          </div>
        </div>
      </section>
      {/* About End */}
      {/*Our Product-*/}
      <section
        className="our-product "
        style={{
          backgroundImage: "url(./assets/images/Product-BG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="product-col">
              <div className="title-sec col-lg-10 m-auto text-center mx-auto mb-8">
                <h2 className="mb-3">Our Products</h2>
                <h4>
                  Tailored Solutions for Enterprise Users in Defense and
                  Disaster Management
                </h4>
                <p>
                  With a common thread of multi-sensor near real time approach
                  our products are specifically designed to meet the needs of
                  enterprise users operating in defence and disaster management
                  sectors.
                </p>
              </div>
              <div className="product-card">
                <div className="row">
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/spade.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">SPADE</h5>
                        <p className="card-text">
                          A unified SaaS platform offering seamless access to
                          250 + sensors encompassing optical thermal and SAR
                          data enabling users to to explore, task and analyze
                          satellite data for a spectrum of applications.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/Mirka.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title mikra-txt">MIRKA</h5>
                        <p className="card-text">
                          Empowering defence with synergy of human intellect and
                          AI for unparalleled situational awareness and
                          strategic readiness in a rapidly evolving global
                          security landscape setting a new benchmark in defence
                          intelligence.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/SID@2x.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">SID</h5>
                        <p className="card-text">
                          Developed with the aim of shaping a safer and prepared
                          world by harnessing satellite data and advanced
                          analytics offering invaluable insights in disaster
                          management and insurance.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-logo-slider-section our-partner-slider">
          <div className="client-logo">
            <div className="container text-center mx-auto">
              <h3 className="mb-5">OUR ESTEEMED PARTNERS</h3>
            </div>
            {/* Testimonial Start */}
            <div className="container-xxl">
              <div className="client-logo-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/ICEYE.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Planet.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/RESTEC.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/SATELLOGIC.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/satvu.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/veng.png"
                  />
                </div>
              </div>
            </div>
            {/* Testimonial End */}
          </div>
        </div>
      </section>
      {/*End our product*/}
      {/*Our Partner*/}
      <section className="our-partner our-customer">
        <div className="client-logo-slider-section">
          <div className="client-logo">
            <div className="container text-center mx-auto">
              <h3 className="mb-5 fw-light">OUR VALUABLE CUSTOMERS</h3>
            </div>
            {/* Testimonial Start */}
            <div className="container-xxl">
              <div className="partner-logo-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-5.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-6.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-7.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-8.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-9.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-10.png"
                  />
                </div>
              </div>
            </div>
            {/* Testimonial End */}
          </div>
        </div>
      </section>
      {/*End -Our Partner*/}
      {/*Our Testmonial*/}
      <section
        className="testimonial-section"
        style={{
          backgroundImage: "url(./assets/images/Testimonial-BG-blck.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="testimonial-carousel">
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      Working with Suhora has been an exceptional experience.
                      Their deep understanding of our data needs, along with the
                      high-resolution SAR and optical data they provide, has
                      proven invaluable across multiple projects. Suhora's
                      support has consistently enhanced our work.
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">SKAUST</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      Thanks to Suhora's satellite data across multiple dates,
                      we were able to effectively monitor crop growth and make
                      timely adjustments to our strategy. Their service greatly
                      simplified our decision-making process.
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">NECTAR</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      Working with Suhora has been smooth. The satellite data
                      services provided by them helped us in crop monitoring and
                      to identify stubble burning and make timely decisions, and
                      their consultancy was always reliable when needed.
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">HARSAC</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      Suhora delivered high-resolution, precise digital surface
                      and terrain models, along with detailed feature
                      extraction. Their data significantly enhanced our project
                      outcomes and provided valuable insights.
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">NHPC</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      It’s inspiring to see Suhora reach such remarkable
                      heights. As a valued strategic partner, Suhora has
                      consistently provided high-quality support and proven to
                      be an integral part of our success.
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">ICEYE</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>

              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      Suhora has been a valuable partner, contributing actively
                      to our journey from ‘Bhoomandal se Brahmand tak ka Safar.’
                      Their dedication and support have been instrumental in
                      advancing our shared mission.{" "}
                      <span>
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">IsPA</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>

              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                    <p>
                      <span>
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                      As a provider of thermal satellite imagery—a specialized
                      capability not widely recognized—Suhora has been a
                      reliable partner. Their expertise in thermal analytics has
                      proven immensely valuable. With the launch of SPADE,
                      Suhora is poised to reach new heights, making it even
                      easier to monitor temperature variations with precision.{" "}
                    </p>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">Satvu</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
