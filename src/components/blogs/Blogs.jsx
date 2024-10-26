import './blogs.css'
import { aboutUS01,aboutUS02,aboutUS03 } from './img-src'

export default function Blogs() {
  return (
   <div>
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
              <img src={aboutUS01} className="card-img-top" alt="..." />
              <div className="category">
                <p> Events and News</p> 
              </div>
              <div className="card-body">
                <h3 className="card-title">SUHORA has signed MoU with Thiagarajar College of Engineering, Madurai</h3>
                <div className="post-meta">
                  <p><span>By Suhora</span> | <span>August 22,2024</span> </p>
                </div>
                <a href="#" className="btn btn-light">Continue Reading</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 card-col">
            <div className="card">
              <img src={aboutUS02} className="card-img-top" alt="..." />
              <div className="category">
                <p> Events and News</p> 
              </div>
              <div className="card-body">
                <h3 className="card-title">SUHORA has signed MoU with Thiagarajar College of Engineering, Madurai</h3>
                <div className="post-meta">
                  <p><span>By Suhora</span> | <span>August 22,2024</span> </p>
                </div>
                <a href="#" className="btn btn-light">Continue Reading</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 card-col">
            <div className="card">
              <img src={aboutUS03} className="card-img-top" alt="..." />
              <div className="category">
                <p> Events and News</p> 
              </div>
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
