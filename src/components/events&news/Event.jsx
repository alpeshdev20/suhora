import { useEffect } from "react";

function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="event-news-section">
      <div className="container">
        <div className="blog-col-sec">
          <div className="row">
            <div className="title">
              <h3>Event and News</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-Tce-MoU-signing.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">
                    SUHORA has signed MoU with Thiagarajar College of
                    Engineering, Madurai
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>August 22,2024</span> |{" "}
                      <span>Events &amp; News</span> | <span>Comments</span>
                    </p>
                  </div>
                  <p>
                    Suhora has signed a Memorandum of Understanding (MoU) with
                    Thiagarajar College of Engineering, Madurai, to strengthen
                    industry-academia collaboration. This partnership aims to
                    equip students with industry-relevant skills and expose them
                    to real-world challenges in the geospatial and space
                    technology domains. As part of the MoU, Suhora will deliver
                    specialized industrial training, offer internships, and
                    collaborate on research projects, providing students with
                    hands-on experience and opportunities in the growing Indian
                    space sector. This initiative marks a significant step
                    toward developing STEM professionals who will contribute to
                    India's Geospatial Economy and accomplish the Indian Space
                    Dream.
                  </p>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-10 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-SatVu-Contract-Signing-e1717489162101.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">
                    SUHORA and SatVu form a multi-year strategic alliance to
                    provide Spaceborne High Resolution Thermal Sensing and
                    analytics
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>June 4, 2024</span>{" "}
                    </p>
                  </div>
                  <p>
                    SUHORA and SatVu Form Multi-Year Strategic Alliance to
                    Provide Spaceborne High Resolution Thermal Sensing and
                    Analytics SUHORA and SatVu have entered into a multi-year
                    strategic alliance to enhance spaceborne high-resolution
                    thermal sensing and analytics. SUHORA specializes in space
                    analytics, while SatVu leads in high-resolution thermal
                    satellite imaging. This collaboration aims to deliver
                    advanced solutions for defence, disaster management, and
                    various governmental organizations by utilizing SatVu’s
                    thermal data and SUHORA's analytic capabilities. This
                    partnership is set to benefit users and industries in the
                    region through innovative thermal sensing technology and
                    comprehensive analytics.
                  </p>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
