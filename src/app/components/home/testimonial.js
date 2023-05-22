'use client';
import { createContext, useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Testimonial() {
  return (
    <div className="testimonial-area-1 section-gap-equal">
      <div className="container">
        <div className="row g-lg-5">
          <div className="col-lg-5">
            <div className="testimonial-heading-area">
              <div className="section-title section-left" >
                <span className="pre-title">Testimonials</span>
                <h2 className="title">What Our Students Have To Say</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                <Link href="#" className="edu-btn btn-large">View All<i className="icon-4"></i></Link>
              </div>
            </div>




          </div>
          <div className="col-lg-7">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-01.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Ray Sanchez</h5>
                      <span className="subtitle">Student</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-02.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Thomas Lopez</h5>
                      <span className="subtitle">Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-03.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Amber Page</h5>
                      <span className="subtitle">Developer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-04.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Robert Tapp</h5>
                      <span className="subtitle">Content Creator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
            {/*
            <div className="home-one-testimonial-activator swiper ">
              
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-01.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Ray Sanchez</h5>
                      <span className="subtitle">Student</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-02.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Thomas Lopez</h5>
                      <span className="subtitle">Designer</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-03.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Amber Page</h5>
                      <span className="subtitle">Developer</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-grid">
                    <div className="thumbnail">
                      <Image src="/assets/images/testimonial/testimonial-04.png" alt="Testimonial" width={70} height={70} />
                      <span className="qoute-icon"><i className="icon-26"></i></span>

                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                      <div className="rating-icon">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <h5 className="title">Robert Tapp</h5>
                      <span className="subtitle">Content Creator</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  )
}
