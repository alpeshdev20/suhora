import './career.css'
import { Collaborate, Impact, Learn, LearnSVG } from './img-src'

export default function Career() {
  return (
    <div>
     <section className="career-banner">
  <div className="container">
    <div className="career-banner-title">
      <h3>CAREER @ SUHORA</h3>
      <p>Embrace each new opportunity as a stepping stone toward <br />your professional growth and fulfillment
      </p>
    </div>
  </div>
</section>

<section className="join-us-sec pb-5 pt-5">
  <div className="container mt-3 mb-3">
    <div className="mx-auto mb-5">
      <h2 className="text-center display-6 mb-1">JOIN US</h2>
      <p className="text-center">Building tomorrow's success, together - join our vibrant team now!</p>
    </div>
    <div className="row join-info-sec-img justify-content-center mb-5">
      <div className="col-2 col-sm-3 text-center">
        <img className="mb-5 mt-5" src={LearnSVG} alt="learn" name="learn" />                   
      </div>
      <div className="col-2 col-sm-3 text-center">
        <img className="mb-5 mt-5" src={Collaborate} alt="learn" name="Collaborate" />                   
      </div>
      <div className="col-2 col-sm-3 text-center">
        <img className="mb-5 mt-5" src={Impact} alt="learn" name="Impact" />                   
      </div>
    </div>
    <div className="row join-info-sec justify-content-center mb-5">
      <div className="col-12 col-sm-3 text-center"> 
        <img className="mb-3" src={Learn} alt="learn" name="learn" />                  
        <h4>Learn</h4>
        <p>Expand your skills and knowledge with us. We offer ongoing learning opportunities to help you
          grow
          professionally.</p>
      </div>
      <div className="col-12 col-sm-3 text-center">  
        <img className="mb-3"  src={Collaborate} alt="learn" name="Collaborate" />                 
        <h4>Collaborate</h4>
        <p>Work together in a supportive environment where your ideas matter. Join forces with talented
          individuals to create innovative solutions..</p>
      </div>
      <div className="col-12 col-sm-3 text-center">    
        <img className="mb-3" src={Impact} alt="learn" name="Impact" />                
        <h4>Make an impact</h4>
        <p>Be part of something meaningful. Make a difference by contributing to projects that matter.</p>
      </div>
    </div>
    <form>
      <div className="open-position-form mb-5">
        <div className="mx-auto mb-5">
          <h2 className="text-center display-6 mb-1">OPEN POSITIONS</h2>
          <p className="text-center">Explore exciting job opportunities at our company and join a dynamic team
            dedicated to innovation and excellence.</p>
        </div>
        <select className="form-select form-select-lg mb-5 custom-select-menu" aria-label=".form-select-lg example">
          <option selected>Select Posiotion</option>
          <option value={1}>Full Stack Developer | Engineering</option>
          <option value={2}>Graphical Designer | Marketing</option>
          <option value={3}>Full Stack Developer | Engineering</option>
        </select>
        <select className="form-select form-select-lg mb-5 custom-select-menu" aria-label=".form-select-lg example">
          <option selected>Select Posiotion</option>
          <option value={1}>Full Stack Developer | Engineering</option>
          <option value={2}>Graphical Designer | Marketing</option>
          <option value={3}>Full Stack Developer | Engineering</option>
        </select>
        <select className="form-select form-select-lg custom-select-menu" aria-label=".form-select-lg example">
          <option selected>Select Posiotion</option>
          <option value={1}>Full Stack Developer | Engineering</option>
          <option value={2}>Graphical Designer | Marketing</option>
          <option value={3}>Full Stack Developer | Engineering</option>
        </select>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary custom-btn">Contact Us</button>
      </div>
    </form>
  </div>
</section>


    </div>
  )
}
