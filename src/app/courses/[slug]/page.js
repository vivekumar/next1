"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
async function getData(id) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        };
        const res = await fetch('http://localhost:3034/api/course/' + id, options);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export default function CourseDetals(id) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const course = await getData(id.params.slug);
            // Set the fetched course data to the state variable
            console.log(course);
            setData(course.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className="edu-section-gap course-details-area">
                <div className="container">
                    <div className="row row--30">
                        <div className="col-lg-8">
                            <div className="course-details-content">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="carriculam-tab" data-bs-toggle="tab" data-bs-target="#carriculam" type="button" role="tab" aria-controls="carriculam" aria-selected="false">Carriculam</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="instructor" aria-selected="false">Instructor</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Reviews</button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                        <div className="course-tab-content">
                                            <div className="course-overview">
                                                <h3 className="heading-title">Course Description</h3>
                                                {data.content}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="carriculam" role="tabpanel" aria-labelledby="carriculam-tab">
                                        <div className="course-tab-content">
                                            <div className="course-curriculam">
                                                <h3 className="heading-title">Course Curriculum</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.</p>
                                                <div className="course-lesson">
                                                    <h5 className="title">Week 1-4</h5>
                                                    <p>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
                                                    <ul>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Introduction</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Course Overview</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Local Development Environment Tools</div>
                                                            <div className="badge-list">
                                                                <span className="badge badge-primary">0 Question</span>
                                                                <span className="badge badge-secondary">10 Minutes</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Course Exercise / Reference Files</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Code Editor Installation (Optional if you have one)</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Embedding PHP in HTML</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-lesson">
                                                    <h5 className="title">Week 5-8</h5>
                                                    <p>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
                                                    <ul>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Defining Functions</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i>Function Parameters</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Return Values From Functions</div>
                                                            <div className="badge-list">
                                                                <span className="badge badge-primary">0 Question</span>
                                                                <span className="badge badge-secondary">10 Minutes</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Global Variable and Scope</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i>Newer Way of creating a Constant</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                        <li>
                                                            <div className="text"><i className="icon-65"></i> Constants</div>
                                                            <div className="icon"><i className="icon-68"></i></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                        <div className="course-tab-content">
                                            <div className="course-instructor">
                                                <div className="thumbnail">
                                                    <Image src="/assets/images/course/author-01.png" alt="Author Images" height={170} width={170} />
                                                </div>
                                                <div className="author-content">
                                                    <h6 className="title">Edward Norton</h6>
                                                    <span className="subtitle">Founder & CEO</span>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <ul className="social-share">
                                                        <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                        <li><Link href="#"><i className="icon-twitter"></i></Link></li>
                                                        <li><Link href="#"><i className="icon-linkedin2"></i></Link></li>
                                                        <li><Link href="#"><i className="icon-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <div className="course-tab-content">
                                            <div className="course-review">
                                                <h3 className="heading-title">Course Rating</h3>
                                                <p>5.00 average rating based on 7 rating</p>
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="rating-box">
                                                            <div className="rating-number">5.0</div>
                                                            <div className="rating">
                                                                <i className="icon-23"></i>
                                                                <i className="icon-23"></i>
                                                                <i className="icon-23"></i>
                                                                <i className="icon-23"></i>
                                                                <i className="icon-23"></i>
                                                            </div>
                                                            <span>(7 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="review-wrapper">

                                                            <div className="single-progress-bar">
                                                                <div className="rating-text">
                                                                    5 <i className="icon-23"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="rating-value">7</span>
                                                            </div>

                                                            <div className="single-progress-bar">
                                                                <div className="rating-text">
                                                                    4 <i className="icon-23"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="rating-value">0</span>
                                                            </div>

                                                            <div className="single-progress-bar">
                                                                <div className="rating-text">
                                                                    4 <i className="icon-23"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="rating-value">0</span>
                                                            </div>

                                                            <div className="single-progress-bar">
                                                                <div className="rating-text">
                                                                    4 <i className="icon-23"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="rating-value">0</span>
                                                            </div>

                                                            <div className="single-progress-bar">
                                                                <div className="rating-text">
                                                                    4 <i className="icon-23"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="rating-value">0</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="comment-area">
                                                    <h3 className="heading-title">Reviews</h3>
                                                    <div className="comment-list-wrapper">

                                                        <div className="comment">
                                                            <div className="thumbnail">
                                                                <Image src="/assets/images/blog/comment-01.jpg" alt="Comment Images" height={80} width={80} />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="rating">
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                </div>
                                                                <h5 className="title">Haley Bennet</h5>
                                                                <span className="date">Oct 10, 2021</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </div>
                                                        </div>

                                                        <div className="comment">
                                                            <div className="thumbnail">
                                                                <Image src="/assets/images/blog/comment-02.jpg" alt="Comment Images" height={80} width={80} />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="rating">
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                </div>
                                                                <h5 className="title">Simon Baker</h5>
                                                                <span className="date">Oct 10, 2021</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </div>
                                                        </div>

                                                        <div className="comment">
                                                            <div className="thumbnail">
                                                                <Image src="/assets/images/blog/comment-03.jpg" alt="Comment Images" height={80} width={80} />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="rating">
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                    <i className="icon-23"></i>
                                                                </div>
                                                                <h6 className="title">Richard Gere</h6>
                                                                <span className="date">Oct 10, 2021</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="comment-form-area">
                                                    <h3 className="heading-title">Write a Review</h3>
                                                    <div className="rating-icon">
                                                        <h6 className="title">Rating Here</h6>
                                                        <div className="rating">
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                        </div>
                                                    </div>
                                                    <form className="comment-form">
                                                        <div className="row g-5">
                                                            <div className="form-group col-lg-6">
                                                                <input type="text" name="comm-title" id="comm-title" placeholder="Review Title" />
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <input type="text" name="comm-name" id="comm-name" placeholder="Reviewer name" />
                                                            </div>
                                                            <div className="form-group col-12">
                                                                <input type="email" name="comm-email" id="comm-email" placeholder="Reviewer email" />
                                                            </div>
                                                            <div className="form-group col-12">
                                                                <textarea name="comm-message" id="comm-message" cols="30" rows="5" placeholder="Review summary"></textarea>
                                                            </div>
                                                            <div className="form-group col-12">
                                                                <button type="submit" className="edu-btn submit-btn">Submit Review <i className="icon-4"></i></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="course-sidebar-3 sidebar-top-position">
                                <div className="edu-course-widget widget-course-summery">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Image src="/assets/images/course/course-46.jpg" alt="Courses" height={235} width={320} />
                                            <Link href="https://www.youtube.com/watch?v=PICj5tr9hcc" className="play-btn video-popup-activation"><i className="icon-18"></i></Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="widget-title">Course Includes:</h4>
                                            <ul className="course-item">
                                                <li>
                                                    <span className="label"><i className="icon-60"></i>Price:</span>
                                                    <span className="value price">${data.price}</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-62"></i>Instrutor:</span>
                                                    <span className="value">{data.instrutor}</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-61"></i>Duration:</span>
                                                    <span className="value">{data.duration} weeks</span>
                                                </li>
                                                <li>
                                                    <span className="label">
                                                        <i className="icon-62"></i>
                                                        Lessons:</span>
                                                    <span className="value">{data.lessons}</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-63"></i>Enrolled:</span>
                                                    <span className="value">65 students</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-59"></i>Language:</span>
                                                    <span className="value">{data.language}</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-64"></i>Certificate:</span>
                                                    <span className="value">{data.certificate}</span>
                                                </li>
                                            </ul>
                                            <div className="read-more-btn">
                                                <Link href="#" className="edu-btn">Start Now <i className="icon-4"></i></Link>
                                            </div>
                                            <div className="share-area">
                                                <h4 className="title">Share On:</h4>
                                                <ul className="social-share">
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-twitter"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-linkedin2"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-youtube"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gap-bottom-equal">
                <div className="container">
                    <div className="section-title section-left" >
                        <h3 className="title">More Courses for You</h3>
                    </div>
                    <div className="row g-5">

                        <div className="col-12 col-xl-4 col-lg-6 col-md-6" >
                            <div className="edu-course course-assets-5 inline" data-tipped-options="inline: 'inline-tooltip-1'">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link href="#">
                                            <Image src="/assets/images/course/course-15.jpg" alt="Course Meta" height={250} width={370} />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <div className="course-price price-round">$30</div>
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Healthy Sushi Roll - Japanese Popular Cooking className</Link>
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
                                        <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.</p>
                                        <ul className="course-meta">
                                            <li><i className="icon-24"></i>15 Lessons</li>
                                            <li><i className="icon-25"></i>42 Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="inline-tooltip-1" style={{ display: 'none' }}>
                                <div className="course-layout-five-tooltip-content">
                                    <div className="content">
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Healthy Sushi Roll - Japanese Popular Cooking className</Link>
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
                                            <li>15 Lessons</li>
                                            <li>35 hrs</li>
                                            <li>Beginner</li>
                                        </ul>
                                        <div className="course-feature">
                                            <h6 className="title">What You’ll Learn?</h6>
                                            <ul>
                                                <li>Professional Japanese cooking from beginners to experts</li>
                                                <li>Will be able to cook authentic Italian recipes in their own kitchen</li>
                                                <li>Understand the HOW of cooking, before thinking of the WHAT to cook.</li>
                                            </ul>
                                        </div>
                                        <div className="button-group">
                                            <Link href="#" className="edu-btn btn-medium">Add to Cart</Link>
                                            <Link href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4 col-lg-6 col-md-6" >
                            <div className="edu-course course-style-5 inline" data-tipped-options="inline: 'inline-tooltip-2'">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link href="course-details.html">
                                            <Image src="/assets/images/course/course-16.jpg" alt="Course Meta" height={250} width={370} />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <div className="course-price price-round">$40</div>
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Nutrition Kitchen - Basics of Cooking for Busy People</Link>
                                        </h5>
                                        <div className="course-rating">
                                            <div className="rating">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                            </div>
                                            <span className="rating-count">(4.8)</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.</p>
                                        <ul className="course-meta">
                                            <li><i className="icon-24"></i>35 Lessons</li>
                                            <li><i className="icon-25"></i>80 Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="inline-tooltip-2" style={{ display: "none" }}>
                                <div className="course-layout-five-tooltip-content">
                                    <div className="content">
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Nutrition Kitchen - Basics of Cooking for Busy People</Link>
                                        </h5>
                                        <div className="course-rating">
                                            <div className="rating">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                            </div>
                                            <span className="rating-count">(4.8)</span>
                                        </div>
                                        <ul className="course-meta">
                                            <li>35 Lessons</li>
                                            <li>28 hrs</li>
                                            <li>Advanced</li>
                                        </ul>
                                        <div className="course-feature">
                                            <h6 className="title">What You’ll Learn?</h6>
                                            <ul>
                                                <li>Prepare a huge variety of simple, delicious, healthy recipes.</li>
                                                <li>Professional Indian cooking from beginners to experts</li>
                                                <li>Serve delicious and healthy meals for your loved ones.</li>
                                            </ul>
                                        </div>
                                        <div className="button-group">
                                            <Link href="#" className="edu-btn btn-medium">Add to Cart</Link>
                                            <Link href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 col-lg-6 col-md-6" >
                            <div className="edu-course course-style-5 inline" data-tipped-options="inline: 'inline-tooltip-3'">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link href="course-details.html">
                                            <Image src="/assets/images/course/course-17.jpg" alt="Course Meta" height={250} width={370} />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <div className="course-price price-round">$50</div>
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Vegan Thai Cooking classNamees Popular Vegan Recipes</Link>
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
                                        <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.</p>
                                        <ul className="course-meta">
                                            <li><i className="icon-24"></i>8 Lessons</li>
                                            <li><i className="icon-25"></i>20 Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="inline-tooltip-3" style={{ display: "none" }}>
                                <div className="course-layout-five-tooltip-content">
                                    <div className="content">
                                        <span className="course-level">Cooking</span>
                                        <h5 className="title">
                                            <Link href="course-details.html">Vegan Thai Cooking classNamees Popular Vegan Recipes</Link>
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
                                                <ul>
                                                    <li>Cook much loved recipes like ravioli, pizza and pesto from scratch</li>
                                                    <li>Cook better than restaurant Thai food at home</li>
                                                    <li>Keep your food safe from harmful bacteria and disease.</li>
                                                </ul>
                                            </ul>
                                        </div>
                                        <div className="button-group">
                                            <Link href="#" className="edu-btn btn-medium">Add to Cart</Link>
                                            <Link href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
