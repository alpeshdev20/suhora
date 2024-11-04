import { useEffect } from "react";

function DefenceIntelligence() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const container = document.querySelector('.image-col .container');
    document.querySelector('.image-col .slider').addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
    window.scrollTo(0, 0);
  }, [$]);
  return (
    <>
      {/* Carousel Start */}
     <section className="sub-top-image-banner defence-intelligence-banner">
  <div className="container h-100">
    <div className="d-flex h-100 align-items-center">
      <div className="w-100 text-white">
        <div className="col-lg-6">
          <h1 className="display-3">Excellence in Image &amp; Intelligence</h1>
          <p className="lead mb-0">We provide state-of-the-art imaging capabilities and intelligent algorithms for unparalleled surveillance enabling swift insights across maritime and terrestrial domains.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Carousel End */}
      {/*SID Section -*/}
      <section className="sid-section mirka-section">
        <div className="container">
          <div className="row sid-col g-0 equal">
            <div className="col-lg-6 sid-text-col">
              <h3 className="mb-3">mirka</h3>
              <h4>
                <span>Rapid</span> | <span>Vigilant</span> | <span>Strategic</span>{" "}
              </h4>
              <p>
                In the rapidly evolving defence sector, MIRKA emerges as a
                groundbreaking fusion of human expertise and Artificial
                Intelligence, reshaping strategic operations. This advanced ISR
                platform offers near real-time insights, allowing defence and
                intelligence agencies to transition from reactive to proactive
                strategies, ensuring critical targets are never missed.{" "}
              </p>
              <p>
                Powered by high-definition sensors and smart algorithms, MIRKA cuts
                through complex data, providing actionable intelligence for both
                maritime and land surveillance. It enhances operational
                effectiveness, offering a holistic view of any scenario, making it
                an essential tool for national security.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-col">
                <main>
                  <div className="container">
                    <div className="image-container">
                      <img
                        className="image-before slider-image"
                        src="./assets/images/mikra1.png"
                        alt="color photo"
                      />
                      <img
                        className="image-after slider-image"
                        src="./assets/images/mikra2.png"
                        alt="black and white"
                      />
                      <img
                        className="image-after slider-image"
                        src="./assets/images/mikra3.png"
                        alt="black and white"
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
          <div className="row card-image-col">
            <h4>
              With <span>MIRKA </span> gain actionable Intelligence
            </h4>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/Tip-Cue.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Tip &amp; Cue</h5>
                  <p className="card-text">Automated detections and task cueing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/Multi-sensor-tasking.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Multi-sensor tasking</h5>
                  <p className="card-text">Leverage multi-spectral imaging</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/near-real-time-delivery.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Near real-time delivery</h5>
                  <p className="card-text">
                    Experience blazing fast tasking and delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/ML-based-target-detection.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">ML based target detection</h5>
                  <p className="card-text">
                    Automated ML based target detection and identification
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/proactive-change-mapping.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Proactive Change mapping</h5>
                  <p className="card-text">Always 'on' change mapping</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/cross-sensor-insights.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Cross sensor insights</h5>
                  <p className="card-text">
                    Gain unprecedented cognizance through sensor convergence{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-slider-with-animation">
        <div className="container">
          <div className="row title">
            <h2 className="font-weight-bold">Modules</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="general-container">
              <input
                className="radio"
                type="radio"
                name="card"
                id="cardUno"
                defaultChecked=""
              />
              <label className="content" htmlFor="cardUno">
                <h1 className="title-card">
                  <span className="marg-bott">
                    Maritime Domain Awarness
                    <br />(<span>MIRKA</span> MDA)
                  </span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Maritime Domain Awareness (<span>MIRKA</span> MDA) - Mikra Provides advanced maritime domain awareness through continuous large-scale monitoring using
                    wide swath satellite data. Our vessel and ship detection
                    services offer real-time insights, ensuring enhanced safety,
                    security, and operational efficiency at sea along with
                    monitoring maritime activities with precision and reliability.
                  </span>
                </h3>
              </label>
              <input className="radio" type="radio" name="card" id="cardDos" />
              <label className="content" htmlFor="cardDos">
                <div className="overlay" />
                <h1 className="title-card">
                  <span className="marg-bott">
                    Terrain Situational Awarness <br /> (<span>MIRKA</span> TSA)
                  </span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Mirka specializes in terrain situational awareness by monitoring
                    granular-level changes using high-resolution satellite imagery.
                    Our advanced capabilities allow for precise aircraft detection,
                    providing critical insights for enhanced security and
                    operational decision-making. With our technology, you gain a
                    detailed view of ground activities and movement.
                  </span>
                </h3>
              </label>
              <input className="radio" type="radio" name="card" id="cardTres" />
              <label className="content" htmlFor="cardTres">
                <div className="overlay" />
                <h1 className="title-card">
                  <span className="marg-bott">MapVyuh</span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Proactive Border Surveillance - We use high-resolution satellite
                    imagery to deliver real-time monitoring of sensitive areas. By
                    detecting and analyzing activity with precision irrespective of
                    scale, we enhance border security and enable rapid response to
                    potential threats. Stay ahead with reliable, round-the-clock
                    insights for safeguarding critical boundaries.
                  </span>
                </h3>
              </label>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-us-section2">
        <div className="container">
          <div className="main-content-col">
      <div className="row form-main-wrapper">
              <div className="form-title">
                <h3>
                  Get in <span>Touch</span>
                </h3>
              </div>
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
                <div className="col-12 text-center">Capatcha Here</div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn form-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
            </div>
            </div>
    </>

  );
}

export default DefenceIntelligence;
