import '../../../assets/css/footer.css' // CSS file
import FooterImg from "../../../assets/images/Footer.png" // Background image
import FooterLogo from "../../../assets/images/suhora_logo.png" // Background image


function Footer() {
  return (
<footer style={{backgroundImage: `url(${FooterImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
  {/* Footer Start */}
  <div className="footer-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7 menu-item">
          <div className="logo">
            <img src={FooterLogo} alt='no Img' />
          </div>
          <div className="location d-flex">
            <div className="location-icon">
              <i className="fa fa-map-marker-alt me-3" />
            </div>
            <div className="address">
              <p>313, Tower-B, Noida One, Sector-62, Noida, U.P.-201309, India</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-5 menu-item">
          <h5 className="mb-4">Industries</h5>
          <a href="#">Defence &amp; Intelligence</a>
          <a href="#">Disaster &amp; Insaurance</a>
        </div>
        <div className="col-lg-2 col-md-7 menu-item">
          <h5 className="mb-4">Capabilities</h5>
          <a href="#">Imaging Capabilities</a>
          <a href="#">Disaster &amp; Insaurance</a>
        </div>
        <div className="col-lg-2 col-md-5 menu-item">
          <h5 className="text-light mb-4">Company</h5>
          <a href="#">About Us</a>
          <a href="#">Career</a>
          <a href="#">Events &amp; News</a>
          <a href="#">Blogs</a>
          <a href="#">Our Team</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="row">
        <div className="d-flex pt-2 gap-3 pb-4 social-icon">
          <a className="btn btn-square me-1" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-square me-1" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-square me-1" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-square me-0" href><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©2024 Suhora | <a href="#">Space Analytics Simplified</a>, All Right Reserved. | <a href="#">Privacy Policy</a>
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed and Developed by <a href="#">Fluentech Solutions</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
