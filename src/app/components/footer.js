import Link from 'next/link';
import Head from 'next/head';
export default function Footer() {
    return (
        <>
            <footer className="edu-footer footer-lighten bg-image footer-style-1">
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <img className="logo-light" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                            <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo" />
                                        </Link>
                                    </div>
                                    <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Add:</span>70-80 Upper St Norwich NR2</li>
                                            <li><span>Call:</span><Link href="tel:+011235641231">+01 123 5641 231</Link></li>
                                            <li><span>Email:</span><Link href="mailto:info@edublink.com" target="_blank">info@edublink.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="edu-footer-widget explore-widget">
                                    <h4 className="widget-title">Online Platform</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link href="about-one.html">About</Link></li>
                                            <li><Link href="course-one.html">Courses</Link></li>
                                            <li><Link href="team-one.html">Instructor</Link></li>
                                            <li><Link href="event-grid.html">Events</Link></li>
                                            <li><Link href="team-details.html">Instructor Profile</Link></li>
                                            <li><Link href="purchase-guide.html">Purchase Guide</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link href="contact-us.html">Contact Us</Link></li>
                                            <li><Link href="gallery-grid.html">Gallery</Link></li>
                                            <li><Link href="blog-standard.html">News & Articles</Link></li>
                                            <li><Link href="faq.html">FAQ's</Link></li>
                                            <li><Link href="my-account.html">Sign In/Registration</Link></li>
                                            <li><Link href="coming-soon.html">Coming Soon</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="edu-footer-widget">
                                    <h4 className="widget-title">Contacts</h4>
                                    <div className="inner">
                                        <p className="description">Enter your email address to register to our newsletter subscription</p>
                                        <div className="input-group footer-subscription-form">
                                            <input type="email" className="form-control" placeholder="Your email" />
                                            <button className="edu-btn btn-medium" type="button">Subscribe <i className="icon-4"></i></button>
                                        </div>
                                        <ul className="social-share icon-transparent">
                                            <li><Link href="#" className="color-fb"><i className="icon-facebook"></i></Link></li>
                                            <li><Link href="#" className="color-linkd"><i className="icon-linkedin2"></i></Link></li>
                                            <li><Link href="#" className="color-ig"><i className="icon-instagram"></i></Link></li>
                                            <li><Link href="#" className="color-twitter"><i className="icon-twitter"></i></Link></li>
                                            <li><Link href="#" className="color-yt"><i className="icon-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <p>Copyright 2023 <Link href="https://1.envato.market/5bQ022" target="_blank">EduBlink</Link> Designed By <Link href="https://1.envato.market/YgGJbj" target="_blank">DevsBlink</Link>. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
