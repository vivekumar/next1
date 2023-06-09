'use client';
import Image from 'next/image'

export default function CTA() {
  return (
    <div className="home-one-cta-two cta-area-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="home-one-cta edu-cta-box bg-image">
              <div className="inner">
                <div className="content text-md-end">
                  <span className="subtitle">Get In Touch:</span>
                  <h3 className="title"><a href="mailto:info@edublink">info@edublink</a></h3>
                </div>
                <div className="sparator">
                  <span>or</span>
                </div>
                <div className="content">
                  <span className="subtitle">Call Us Via:</span>
                  <h3 className="title"><a href="tel:+011235641231">+01 123 5641 231</a></h3>
                </div>
              </div>
              <ul className="shape-group">
                <li className="shape-01 scene">
                  <Image data-depth="2" src="/assets/images/cta/shape-06.png" alt="shape" width={106} height={106} />
                </li>
                <li className="shape-02 scene">
                  <Image data-depth="-2" src="/assets/images/cta/shape-12.png" alt="shape" width={132} height={101} />
                </li>
                <li className="shape-03 scene">
                  <Image data-depth="-3" src="/assets/images/cta/shape-04.png" alt="shape" width={106} height={106} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
