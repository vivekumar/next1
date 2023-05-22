import Image from 'next/image'

export default function Brand() {
  return (
    <div className="edu-brand-area brand-area-1 gap-top-equal">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="brand-section-heading">
              <div className="section-title section-left" data-sal-delay="150" data-sal-duration="800">
                <span className="pre-title">Our Partners</span>
                <h2 className="title">Learn with Our Partners</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="brand-grid-wrap">
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-01.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-02.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-03.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-04.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-05.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-06.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-07.png" alt="Brand Logo" width={120} height={120} />
              </div>
              <div className="brand-grid">
                <Image src="/assets/images/brand/brand-08.png" alt="Brand Logo" width={120} height={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
