import { aboutUS01, aboutUS02, aboutUS03 } from "./source"
import './style.css'

function Event() {
  return (
    <div>
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
            <img src={aboutUS01} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">SUHORA has signed MoU with Thiagarajar College of Engineering, Madurai</h3>
              <div className="post-meta">
                <p><span>By Suhora</span> | <span>August 22,2024</span> | <span>Events &amp; News</span> | <span>Comments</span></p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dolor vitae purus dapibus ullamcorper vestibulum rutrum nisl. Mauris nisi ex, pharetra non leo eu, tempus mollis mi. Phasellus tempus erat in sapien porta interdum. Donec tristique nisl ut odio pretium, sit amet consectetur nisi sollicitudin. Nullam tristique mattis tristique. Ut sed ipsum ultricies, accumsan purus eu, posuere justo. Nullam tristique erat id nunc luctus, id ultrices ipsum placerat. Donec risus quam, faucibus ac neque non, aliquam rhoncus nisl</p>
              <a href="#" className="btn btn-light">Continue Reading</a>
            </div>
          </div>
        </div>
        <div className="col-lg-10 card-col">
          <div className="card">
            <img src={aboutUS02} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">SUHORA has signed MoU with Thiagarajar College of Engineering, Madurai</h3>
              <div className="post-meta">
                <p><span>By Suhora</span> | <span>August 22,2024</span> </p>
              </div>
              <a href="#" className="btn btn-light">Continue Reading</a>
            </div>
          </div>
        </div>
        <div className="col-lg-10 card-col">
          <div className="card">
            <img src={aboutUS03} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">SUHORA has signed MoU with Thiagarajar College of Engineering, Madurai</h3>
              <div className="post-meta">
                <p><span>By Suhora</span> | <span>August 22,2024</span> </p>
              </div>
              <a href="#" className="btn btn-light">Continue Reading</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Event
