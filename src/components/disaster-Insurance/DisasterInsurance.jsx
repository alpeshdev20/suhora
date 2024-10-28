import { ComparisonImg1, ComparisonImg2, SidBgVideo ,Star} from "./source"
import './style.css'

function DisasterInsurance() {
  return (
   <div>
  {/* Carousel Start */}
  <section className="sub-top-video-banner">
    <div className="overlay" />
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src={SidBgVideo} type="video/mp4" />
    </video>
    {/* The header content */}
    <div className="container h-100">
      <div className="d-flex h-100 align-items-center">
        <div className="w-100 text-white">
          <div className="col-lg-6">
            <h1 className="display-5">Disaster &amp; Insurance</h1>
            <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum dui et odio congue tempor. Donec tristique dolor in metus sagittis, non rutrum tellus efficitur. Duis pretium, sapien sed lobortis hendrerit, magna tellus mollis turpis, id congue sapien metus nec elit. Nulla interdum erat ut nisi dapibus, non sodales nisl hendrerit. Nunc dictum arcu id feugiat finibus. </p>
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
          <h4><span>Predict</span> | <span>Observe</span> | <span>Act</span> </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit nulla in tempus euismod. Nunc pulvinar mattis urna pretium consequat. Maecenas varius pulvinar sagittis. Nunc sit amet tortor malesuada, auctor purus sed, rutrum orci. Proin sed mauris ligula. Ut dui enim, convallis et elementum eu, molestie vel turpis. Proin varius luctus scelerisque. </p>
        </div>
        <div className="col-lg-6">
          <div className="image-col">
            <main>
              <div className="container">
                <div className="image-container">
                  <img className="image-before slider-image" src={ComparisonImg1} alt="color photo" />
                  <img className="image-after slider-image" src={ComparisonImg2} alt="black and white" />
                </div>
                {/* step="10" */}
                <input type="range" min={0} max={100} defaultValue={50} aria-label="Percentage of before photo shown" className="slider" />
                <div className="slider-line" aria-hidden="true" />
                <div className="slider-button" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" viewBox="0 0 256 256">
                    <rect width={256} height={256} fill="none" />
                    <line x1={128} y1={40} x2={128} y2={216} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                    <line x1={96} y1={128} x2={16} y2={128} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                    <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                    <line x1={160} y1={128} x2={240} y2={128} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                    <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                  </svg>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="row product-card">
        <div className=" title">
          <h4>Address key disaster with SID</h4>
        </div>
        <div className="sid-carousel ">
          <div className="card-col">
            <div className="card sid-carosual-1">
              <div className="card-body">
                <h5 className="card-title">Flood</h5>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="card sid-carosual-2">
              <div className="card-body">
                <h5 className="card-title">Landslide</h5>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="card sid-carosual-3">
              <div className="card-body">
                <h5 className="card-title">Golf</h5>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="card sid-carosual-4">
              <div className="card-body">
                <h5 className="card-title">HailStorm</h5>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="card sid-carosual-5">
              <div className="card-body">
                <h5 className="card-title">Forest Fire</h5>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="card sid-carosual-6">
              <div className="card-body">
                <h5 className="card-title">Land deformation</h5>
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
              <h1>Stay ahead with timely insigts</h1>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="content-column">
              <div className="card-vertical-carousel">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Risk Zone Identification</h5>
                    <p className="card-text">We utilize space-based radar interferometry for extensive monitoring and ground-based radar interferometry for targeted assessment of vulnerable areas, enabling us to track millimeter-level deformations.</p>
                  </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Comprehensive Damage Assessment</h5>
                    <p className="card-text">Using high resolution satellite imagery, we detect potential hazard zones to provide early warnings and enable proactive preventive measures.</p>
                  </div>
                </div>
                <div className="card text-white bg-primary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Comprehensive Damage Assessment</h5>
                    <p className="card-text">Leverage precise analytics to assess damage from floods, landslides, GLOFs, and other natural disasters. Get accurate insights for faster recovery and informed decision-making.</p>
                  </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Water Level Monitoring</h5>
                    <p className="card-text">We establish baseline water levels and monitor real-time changes in water levels for enhanced accuracy and responsiveness.</p>
                  </div>
                </div>
                <div className="card text-white bg-primary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Surface Area Monitoring</h5>
                    <p className="card-text">Utilise the daily high-resolution optical imagery as per your needs, to analyse temporal changes in your study area.</p>
                  </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">High Resolution DEM for Flood Risk Assessment</h5>
                    <p className="card-text">Leverage multi-view photogrammetry technology using high-resolution satellite images for hydrological monitoring, flood risk assessment and surface water flow analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="key-baneficiaries"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="text-col">
              <img src={Star} alt />
              <h4>Key Baneficiaries</h4>
            </div>
          </div>
          <div className="col-lg-9 col-md-6">
            <div className="key-baneficiaries-carousel">
              <div className="col-sm-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Disaster management institute</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Agri Insurance companies</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Space application center</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">National Disaster management Agencies</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Satate Disaster management Agencies</h5>
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
  </section>
</div>

  )
}

export default DisasterInsurance