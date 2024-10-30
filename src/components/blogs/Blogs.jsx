export default function Blogs() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-col-sec">
          <div className="row">
            <div className="title">
              <h3>From the blog</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-Tce-MoU-signing.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> Events and News</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    SUHORA has signed MoU with Thiagarajar College of Engineering,
                    Madurai
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>August 22,2024</span>{" "}
                    </p>
                  </div>
                  <a href="#" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-SatVu-Contract-Signing-e1717489162101.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> Events and News</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    SUHORA and SatVu form a multi-year strategic alliance to provide Spaceborne High Resolution Thermal Sensing and analytics
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>June 4, 2024</span>{" "}
                    </p>
                  </div>
                  <a href="#" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 card-col">
              <div className="card">
                <img
                  src="./assets/images/blog-3-1.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> Events and News</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    How world’s first high resolution thermal Satellite can evolve mining industry?
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>April 3, 2024</span>{" "}
                    </p>
                  </div>
                  <a href="#" className="btn btn-light">
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
