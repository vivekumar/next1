'use client';
import Image from 'next/image'
import CountUp from 'react-countup';
export default function CounterUp() {
  return (
    <div className="counterup-area-2">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-8">
            <div className="counterup-box-wrap">
              <div className="counterup-box counterup-box-1">
                <div className="edu-counterup counterup-style-2">
                  <h2 className="counter-item count-number primary-color">
                    <CountUp end={45.2} delay={0} decimals={1} /><span>K</span>
                  </h2>
                  <h6 className="title">Student Enrolled</h6>
                </div>
                <div className="edu-counterup counterup-style-2">
                  <h2 className="counter-item count-number secondary-color">
                    <CountUp end={32.4} delay={0} decimals={1} /><span>K</span>
                  </h2>
                  <h6 className="title">Class Completed</h6>
                </div>
              </div>
              <div className="counterup-box counterup-box-2">
                <div className="edu-counterup counterup-style-2">
                  <h2 className="counter-item count-number extra05-color">
                    <CountUp end={354} delay={0} decimals={0} /><span>+</span>
                  </h2>
                  <h6 className="title">Top Instructors</h6>
                </div>
                <div className="edu-counterup counterup-style-2">
                  <h2 className="counter-item count-number extra02-color">
                    <CountUp end={99.9} delay={0} decimals={1} /><span>%</span>
                  </h2>
                  <h6 className="title">Satisfaction Rate</h6>
                </div>
              </div>
              <ul className="shape-group">
                <li className="shape-1 scene">
                  <Image data-depth="-2" src="/assets/images/about/shape-13.png" alt="Shape" width={186} height={186} />
                </li>
                <li className="shape-2">
                  <Image className="rotateit" src="/assets/images/counterup/shape-02.png" alt="Shape" width={159} height={175} />
                </li>
                <li className="shape-3 scene">
                  <Image data-depth="1.6" src="/assets/images/counterup/shape-04.png" alt="Shape" width={225} height={173} />
                </li>
                <li className="shape-4 scene">
                  <Image data-depth="-1.6" src="/assets/images/counterup/shape-05.png" alt="Shape" width={174} height={174} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
