import Image from 'next/image'

export default function CtaBanner() {
  return (
    <div className="edu-cta-banner-area home-one-cta-wrapper bg-image">
      <div className="container">
        <div className="edu-cta-banner">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title section-center" data-sal-delay="150" data-sal-duration="800">
                <h2 className="title">Get Your Quality Skills <span className="color-secondary">Certificate</span> Through EduBlink</h2>
                <a href="contact-us.html" className="edu-btn">Get started now <i className="icon-4"></i></a>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <li className="shape-01 scene">
              <Image data-depth="2.5" src="/assets/images/cta/shape-10.png" alt="shape" width={102} height={102} />
            </li>
            <li className="shape-02 scene">
              <Image data-depth="-2.5" src="/assets/images/cta/shape-09.png" alt="shape" width={101} height={39} />
            </li>
            <li className="shape-03 scene">
              <Image data-depth="-2" src="/assets/images/cta/shape-08.png" alt="shape" width={158} height={174} />
            </li>
            <li className="shape-04 scene">
              <Image data-depth="2" src="/assets/images/about/shape-13.png" alt="shape" width={186} height={186} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
