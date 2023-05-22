import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function courseStyle1(props) {
    console.log(props, 'sdfsdf');
    return (
        <div className="col-md-6 col-lg-4 col-xl-4" >
            <div className="edu-course course-style-1 course-box-shadow hover-button-bg-white">
                <div className="inner">
                    <div className="thumbnail">
                        <Link href="/courses/{props.slug}">
                            <Image src="/assets/images/course/course-07.jpg" alt="Course Meta" width={270} height={200} />
                        </Link>
                        <div className="time-top">
                            <span className="duration"><i className="icon-61"></i>7 Weeks</span>
                        </div>
                    </div>
                    <div className="content">
                        <span className="course-level">Beginner </span>
                        <h6 className="title">
                            <Link href="/courses/{props.slug}">The Complete Camtasia Course for Content Creators </Link>
                        </h6>
                        <div className="course-rating">
                            <div className="rating">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                            </div>
                            <span className="rating-count">(5.0 /9 Rating)</span>
                        </div>
                        <div className="course-price">$49.00</div>
                        <ul className="course-meta">
                            <li><i className="icon-24"></i>15 Lessons</li>
                            <li><i className="icon-25"></i>31 Students</li>
                        </ul>
                    </div>
                </div>
                <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn"><i className="icon-22"></i></button>
                </div>
                <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn"><i className="icon-22"></i></button>
                </div>
                <div className="course-hover-content">
                    <div className="content">
                        <button className="wishlist-btn"><i className="icon-22"></i></button>
                        <span className="course-level">Advanced</span>
                        <h6 className="title">
                            <Link href="/courses/{props.slug}">The Complete Camtasia Course for Content Creators</Link>
                        </h6>
                        <div className="course-rating">
                            <div className="rating">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                            </div>
                            <span className="rating-count">(5.0 /9 Rating)</span>
                        </div>
                        <div className="course-price">$49.00</div>
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                        <ul className="course-meta">
                            <li><i className="icon-24"></i>15 Lessons</li>
                            <li><i className="icon-25"></i>31 Students</li>
                        </ul>
                        <Link href="/courses/{props.slug}" className="edu-btn btn-secondary btn-small">Enrolled <i className="icon-4"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
