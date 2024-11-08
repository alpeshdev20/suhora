import { useEffect } from "react";

function DisasterInsurance() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const initializeCarousel = () => {
      $(".sid-carousel")
        .not(".slick-initialized")
        .slick({
          centerMode: false,
          margin: "10px",
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
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

    $(".card-vertical-carousel")
      .not(".slick-initialized")
      .slick({
        centerMode: false,
        margin: "10px",
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 1000,
        vertical: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              arrows: false,
              autoplay: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              margin: "10px",
              slidesToShow: 2,
              arrows: false,
              autoplay: true,
            },
          },
        ],
      });

    $(".key-beneficiaries-carousel")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: false,
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

    const container = document.querySelector(".image-col .container");
    document
      .querySelector(".image-col .slider")
      .addEventListener("input", (e) => {
        container.style.setProperty("--position", `${e.target.value}%`);
      });

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
          <source src="./assets/images/Media1.mp4" type="video/mp4" />
        </video>
        {/* The header content */}
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100 text-white">
              <div className="col-lg-6">
                <h1 className="display-5">Address key <br /> disasters  with SID.</h1>
                <p className="lead mb-0">
                  Our experienced professionals work to revamp disaster
                  management and insurance processes through the strategic use
                  of near real-time (NRT), all weather satellite data and
                  insights.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel End */}
      {/*SID Section -*/}
      <section className="sid-section our-product">
        <div className="container">
          <div className="row sid-col g-0 equal">
            <div className="col-lg-6 sid-text-col">
              <h2 className="mb-3">SID</h2>
              <h4>
                <span>Predict</span> | <span>Observe</span> | <span>Act</span>{" "}
              </h4>
              <p>
                With its cutting-edge risk evalution capabilities, SID empowers
                stakeholders to make precise, data-driven decision that
                strengthen disaster response and resilience towards financial
                risk. By empowering communities, industries, and governments
                with advanced analytical tools, SID, enhances preparedness and
                resilience against natural catastophes, ensuring a safer and a
                more secure future.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-col">
                <main>
                  <div className="container">
                    <div className="image-container">
                      <img
                        className="diaster-image-before slider-image"
                        src="./assets/images/Disaster_slider1.jpg"
                        alt="Disaster_slider1"
                      />
                      <img
                        className="image-after slider-image"
                        src="./assets/images/Disaster_slider2.jpg"
                        alt="Disaster_slider2"
                      />
                    </div>
                    {/* step="10" */}
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={50}
                      aria-label="Percentage of before photo shown"
                      className="slider"
                    />
                    <div className="slider-line" aria-hidden="true" />
                    <div className="slider-button" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <rect width={256} height={256} fill="none" />
                        <line
                          x1={128}
                          y1={40}
                          x2={128}
                          y2={216}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <line
                          x1={96}
                          y1={128}
                          x2={16}
                          y2={128}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <polyline
                          points="48 160 16 128 48 96"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <line
                          x1={160}
                          y1={128}
                          x2={240}
                          y2={128}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <polyline
                          points="208 96 240 128 208 160"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                      </svg>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="row product-card">
            <div className=" title">
              <h4>Address key disasters with SID.</h4>
            </div>
            <div className=" sid-carousel ">
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("./assets/images/Flood.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Flood</h5>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("./assets/images/Landsclide.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Landslide</h5>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("./assets/images/GLOF.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">GLOF</h5>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("./assets/images/Hail Strom.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Hailstorm</h5>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("./assets/images/Forest Fire.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Forest Fire</h5>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div
                  className="card"
                  style={{
                    backgroundImage:
                      'url("./assets/images/Land deformation.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Land Deformation</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End our product*/}
      <section className="sid-stat-sec">
        <div className="bg-image-with-right-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 bg-with-text">
                <div className="title-col">
                  <h1>Stay ahead with timely insights</h1>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="content-column">
                  <div className="card-vertical-carousel">
                    <div className="card text-white bg-primary mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Risk Zone Identification</h5>
                        <p className="card-text">
                          Using high resolution satellite imagery, we detect
                          potential hazard zones to provide early warnings and
                          enable proactive preventive measures.
                        </p>
                      </div>
                    </div>
                    <div className="card text-white bg-secondary mb-3">
                      <div className="card-body">
                        <h5 className="card-title">
                          Comprehensive Damage Assessment
                        </h5>
                        <p className="card-text">
                          Leverage precise analytics to assess damage from
                          floods, landslides, GLOFs, and other natural
                          disasters. Get accurate insights for faster recovery
                          and informed decision-making.
                        </p>
                      </div>
                    </div>
                    <div className="card text-white bg-primary mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Water Level Monitoring</h5>
                        <p className="card-text">
                          We establish baseline water levels and monitor
                          real-time changes in water levels for enhanced
                          accuracy and responsiveness.
                        </p>
                      </div>
                    </div>
                    <div className="card text-white bg-secondary mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Surface Area Monitoring</h5>
                        <p className="card-text">
                          Utilise the daily high-resolution optical imagery as
                          per your needs, to analyse temporal changes in your
                          study area.
                        </p>
                      </div>
                    </div>
                    <div className="card text-white bg-primary mb-3">
                      <div className="card-body">
                        <h5 className="card-title">
                          High Resolution DEM for Flood Risk Assessment
                        </h5>
                        <p className="card-text">
                          Leverage multi-view photogrammetry technology using
                          high-resolution satellite images for hydrological
                          monitoring, flood risk assessment and surface water
                          flow analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="key-beneficiaries">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="text-col">
                  <img src="./assets/images/KeyBeneficiariesicon.svg" alt />
                  <h4>Key Beneficiaries</h4>
                </div>
              </div>
              <div className="col-lg-9 col-md-6">
                <div className="key-beneficiaries-carousel">
                  <div className="col-sm-3">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">
                          Disaster Management Institute
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">Agri Insurance Companies</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">Space Application Center</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">
                          National Disaster Management Agencies
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">
                          State Disaster Management Agencies
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cta-sec book-demo">
          <h3>Book a Demo</h3>
        </div>
        <div className="container">
          <div className="main-content-col">
            <div className="row form-main-wrapper" style={{paddingTop: '4px'}}>
              <form className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contact Number"
                    aria-label="Contact Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="button" className="btn btn-primary form-btn">
                    Submit
                  </button>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DisasterInsurance;
