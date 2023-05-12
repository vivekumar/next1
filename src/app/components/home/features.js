import Image from 'next/image'

export default function Features() {
  return (
    <div className="features-area-2">
      <div className="container">
        <div className="features-grid-wrap">
          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <Image className="svgInject" src="/assets/images/animated-svg-icons/online-class.svg" alt="animated icon" width="26" height="38" />
            </div>
            <div className="content">
              <h5 className="title"><span>3020</span> Online Courses</h5>
            </div>
          </div>
          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <Image className="svgInject" src="/assets/images/animated-svg-icons/instructor.svg" alt="animated icon" width="26" height="40" />
            </div>
            <div className="content">
              <h5 className="title"><span>Top</span>Instructors</h5>
            </div>
          </div>
          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon certificate">
              <Image className="svgInject" src="/assets/images/animated-svg-icons/certificate.svg" alt="animated icon" width="27" height="30" />
            </div>
            <div className="content">
              <h5 className="title"><span>Online</span>Certifications</h5>
            </div>
          </div>
          <div className="features-box features-style-2 edublink-svg-animate">
            <div className="icon">
              <Image className="svgInject" src="/assets/images/animated-svg-icons/user.svg" alt="animated icon" width="38" height="40" />
            </div>
            <div className="content">
              <h5 className="title"><span>6000</span>Members</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
