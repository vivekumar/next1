import Image from 'next/image'

export default function Banner() {
  return (
    <>
      <div className="hero-banner hero-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Get <span className="color-secondary">2500+</span> <br />Best Online Courses From EduBlink</h1>
                <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                  <a href="course-one.html" className="edu-btn">Find courses <i className="icon-4"></i></a>
                </div>
                <ul className="shape-group">
                  <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" width={101} height={39} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                  <Image src="/assets/images/banner/girl-1.webp" alt="Girl Image" width={101} height={39} />
                </div>
                <div className="instructor-info" data-sal-delay="600" data-sal="slide-up" data-sal-duration="1000">
                  <div className="inner">
                    <h5 className="title">Instrunctor</h5>
                    <div className="media">
                      <div className="thumb">
                        <Image src="/assets/images/banner/author-1.png" alt="Images" width={538} height={605} />
                      </div>
                      <div className="content">
                        <span>200+</span> Instactors
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="shape-group">
                  <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="1.5" src="/assets/images/about/shape-15.png" alt="Shape" width={101} height={39} />
                  </li>
                  <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="-1.5" src="/assets/images/about/shape-16.png" alt="Shape" width={186} height={186} />
                  </li>
                  <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="3" className="circle-shape"></span>
                  </li>
                  <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="-1" src="/assets/images/counterup/shape-02.png" alt="Shape" width={159} height={175} />
                  </li>
                  <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="1.5" src="/assets/images/about/shape-13.png" alt="Shape" width={186} height={186} />
                  </li>
                  <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <Image data-depth="-2" src="/assets/images/about/shape-18.png" alt="Shape" width={71} height={71} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-7">
          <Image src="/assets/images/about/h-1-shape-01.png" alt="Shape" width={48} height={123} />
        </div>
      </div>
    </>
  )
}
