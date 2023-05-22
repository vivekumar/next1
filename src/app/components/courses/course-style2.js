import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function courseStyle2() {
    return (
        <div className="edu-course course-style-4 course-style-14">
            <div className="inner">
                <div className="thumbnail">
                    <Link href="course-details.html">
                        <Image src="/assets/images/course/course-12.jpg" alt="Course Meta" height={200} width={200} />
                    </Link>
                    <div className="time-top">
                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                    </div>
                </div>
                <div className="content">
                    <div className="course-price">$29.00</div>
                    <h6 className="title">
                        <Link href="course-details.html">Java Programming MasterclassName for Software Developers</Link>
                    </h6>
                    <div className="course-rating">
                        <div className="rating">
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                        </div>
                        <span className="rating-count">(5.0 /7 Rating)</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                    <ul className="course-meta">
                        <li><i className="icon-24"></i>8 Lessons</li>
                        <li><i className="icon-25"></i>20 Students</li>
                    </ul>
                </div>
            </div>
            <div className="hover-content-aside">
                <div className="content">
                    <span className="course-level">Engineering</span>
                    <h5 className="title">
                        <Link href="course-details.html">Java Programming MasterclassName for Software Developers</Link>
                    </h5>
                    <div className="course-rating">
                        <div className="rating">
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                        </div>
                        <span className="rating-count">(5)</span>
                    </div>
                    <ul className="course-meta">
                        <li>8 Lessons</li>
                        <li>20 hrs</li>
                        <li>All Levels</li>
                    </ul>
                    <div className="course-feature">
                        <h6 className="title">What You’ll Learn?</h6>
                        <ul>
                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                        </ul>
                    </div>
                    <div className="button-group">
                        <Link href="#" className="edu-btn btn-medium">Add to Cart</Link>
                        <Link href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
