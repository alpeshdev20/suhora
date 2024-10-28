import { Link } from 'react-router-dom';
import '../../../assets/css/header.css'
import { useEffect } from 'react';
import SuhoraLogowhite from '../../../assets/images/SuhoraLogowhite.svg'
import Muneicon from '../../../assets/images/Muneicon.svg'

function Header() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const scrollEffect = () =>{
      $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
   }
   scrollEffect()
  }, [$])
  
  return (
<header>
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5" data-wow-delay="0.1s">
    <div className="container">
      <Link to="/" className="navbar-brand ms-lg-0">
        <div className="logo">
          <img src={SuhoraLogowhite} alt />
        </div>
      </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span><img src={Muneicon} /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="#" className="nav-item nav-link active">Defence &amp; Intelligence</a>
          <Link to="/disaster-insurance" className="nav-item nav-link">Disaster &amp; Insurance</Link>
          <a href="#" className="nav-item nav-link">Imaging Capabilities</a>
          <a className="nav-item nav-link d-none d-lg-block" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <span><img src={Muneicon} /></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/career">Career</Link>
        </li>                
        <li className="nav-item">
          <Link className="nav-link" to="/event-news">Events &amp; News</Link>
        </li>                
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>                
        <li className="nav-item">
          <a className="nav-link" href="#">Our Team</a>
        </li>                
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>                
      </ul>
    </div>
  </div>
</header>

  )
}

export default Header;
