import Image from 'next/image'
import Link from 'next/link';
export default function Header() {
  return (
    <header className="edu-header header-style-1 header-fullwidth">
      <div className="header-top-bar">
        <div className="container-fluid">
          <div className="header-top">
            <div className="header-top-left">
              <div className="header-notify">
                First 20 students get 50% discount. <Link href="#">Hurry up!</Link>
              </div>
            </div>
            <div className="header-top-right">
              <ul className="header-info">
                <li><Link href="/my-account">Login</Link></li>
                <li><Link href="/my-account">Register</Link></li>
                <li><Link href="tel:+011235641231"><i className="icon-phone"></i>Call: 123 4561 5523</Link></li>
                <li><Link href="mailto:info@edublink.com" target="_blank"><i className="icon-envelope"></i>Email: info@edublink.com</Link></li>
                <li className="social-icon">
                  <Link href="#"><i className="icon-facebook"></i></Link>
                  <Link href="#"><i className="icon-instagram"></i></Link>
                  <Link href="#"><i className="icon-twitter"></i></Link>
                  <Link href="#"><i className="icon-linkedin2"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="edu-sticky-placeholder"></div>
      <div className="header-mainmenu">
        <div className="container-fluid">
          <div className="header-navbar">
            <div className="header-brand">
              <div className="logo">
                <Link href="#">
                  <Image className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" width={158} height={50} />
                  <Image className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" width={158} height={50} />
                </Link>
              </div>
              <div className="header-category">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="has-droupdown">
                      <Link href="#"><i className="icon-1"></i>Category</Link>
                      <ul className="submenu">
                        <li><Link href="course-one">Design</Link></li>
                        <li><Link href="course-one">Development</Link></li>
                        <li><Link href="course-one">Architecture</Link></li>
                        <li><Link href="course-one">Life Style</Link></li>
                        <li><Link href="course-one">Data Science</Link></li>
                        <li><Link href="course-one">Marketing</Link></li>
                        <li><Link href="course-one">Music</Link></li>
                        <li><Link href="course-one">Photography</Link></li>
                        <li><Link href="course-one">Finance</Link></li>
                        <li><Link href="course-one">Motivation</Link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-mainnav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li className="has-droupdown"><Link href="#">Home</Link>
                    <ul className="mega-menu mega-menu-one">
                      <li>
                        <ul className="submenu mega-sub-menu mega-sub-menu-01">
                          <li><Link href="index">EduBlink Education <span className="badge-1">hot</span></Link></li>
                          <li><Link href="index-distant-learning">Distant Learning</Link></li>
                          <li><Link href="index-university">University</Link></li>
                          <li><Link href="index-online-academy">Online Academy <span className="badge-1">hot</span></Link></li>
                          <li><Link href="index-modern-schooling">Modern Schooling</Link></li>
                          <li><Link href="index-kitchen">Kitchen Coach</Link></li>
                          <li><Link href="index-yoga">Yoga Instructor</Link></li>
                        </ul>
                      </li>
                      <li>
                        <ul className="submenu mega-sub-menu mega-sub-menu-01">
                          <li><Link href="index-kindergarten">Kindergarten</Link></li>
                          <li><Link href="index-health-coach">Health Coch <span className="badge">new</span></Link></li>
                          <li><Link href="index-language-academy">Language Academy <span className="badge">new</span></Link></li>
                          <li><Link href="index-remote-training">Remote Training <span className="badge">new</span></Link></li>
                          <li><Link href="index-photography">Photography <span className="badge">new</span></Link></li>
                          <li><Link href="" target="_blank">Dark Version</Link></li>
                          <li><Link href="index-landing">Landing Demo</Link></li>
                        </ul>
                      </li>
                      <li>
                        <ul className="submenu mega-sub-menu-01">
                          <li>
                            <Link href="#">
                              <Image src="/assets/images/others/mega-menu-image.webp" alt="advertising Image" width={100} height={100} />
                            </Link >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-droupdown"><Link href="#">Pages</Link></li>
                  <li className="has-droupdown"><Link href="/courses">Courses</Link> </li>
                  <li className="has-droupdown"><Link href="#">Blog</Link> </li>
                  <li className="has-droupdown"><Link href="/contact-us">Contact</Link> </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <ul className="header-action">
                <li className="search-bar">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <button className="search-btn" type="button"><i className="icon-2"></i></button>
                  </div>
                </li>
                <li className="icon search-icon">
                  <Link href="" className="search-trigger">
                    <i className="icon-2"></i>
                  </Link>
                </li>
                <li className="icon cart-icon">
                  <Link href="cart" className="cart-icon">
                    <i className="icon-3"></i>
                    <span className="count">0</span>
                  </Link>
                </li>
                <li className="header-btn">
                  <Link href="/contact-us" className="edu-btn btn-medium">Try for free <i className="icon-4"></i></Link>
                </li>
                <li className="mobile-menu-bar d-block d-xl-none">
                  <button className="hamberger-button">
                    <i className="icon-54"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="#">
                <Image className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" width={158} height={50} />
                <Image className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" width={158} height={50} />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i className="icon-73"></i>
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            <li className="has-droupdown"><Link href="#">Home</Link>
              <ul className="mega-menu mega-menu-one">
                <li>
                  <ul className="submenu mega-sub-menu mega-sub-menu-01">
                    <li><Link href="index">EduBlink Education <span className="badge-1">hot</span></Link></li>
                    <li><Link href="index-distant-learning">Distant Learning</Link></li>
                    <li><Link href="index-university">University</Link></li>
                    <li><Link href="index-online-academy">Online Academy <span className="badge-1">hot</span></Link></li>
                    <li><Link href="index-modern-schooling">Modern Schooling</Link></li>
                    <li><Link href="index-kitchen">Kitchen Coach</Link></li>
                    <li><Link href="index-yoga">Yoga Instructor</Link></li>
                  </ul>
                </li>
                <li>
                  <ul className="submenu mega-sub-menu mega-sub-menu-01">
                    <li><Link href="index-kindergarten">Kindergarten</Link></li>
                    <li><Link href="index-health-coach">Health Coch <span className="badge">new</span></Link></li>
                    <li><Link href="index-language-academy">Language Academy <span className="badge">new</span></Link></li>
                    <li><Link href="index-remote-training">Remote Training <span className="badge">new</span></Link></li>
                    <li><Link href="index-photography">Photography <span className="badge">new</span></Link></li>
                    <li><Link href="" target="_blank">Dark Version</Link></li>
                    <li><Link href="index-landing">Landing Demo</Link></li>
                  </ul>
                </li>
                <li>
                  <ul className="submenu mega-sub-menu-01">
                    <li>
                      <Link href="">
                        <Image src="/assets/images/others/mega-menu-image.webp" alt="advertising Image" width={534} height={315} layout="responsive" objectFit="contain" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-droupdown"><Link href="#">Pages</Link>
              <ul className="mega-menu">
                <li>
                  <h6 className="menu-title">Inner Pages</h6>
                  <ul className="submenu mega-sub-menu-01">
                    <li><Link href="about-one">About Us 1</Link></li>
                    <li><Link href="about-two">About Us 2</Link></li>
                    <li><Link href="about-three">About Us 3</Link></li>
                    <li><Link href="team-one">Instructor 1</Link></li>
                    <li><Link href="team-two">Instructor 2</Link></li>
                    <li><Link href="team-three">Instructor 3</Link></li>
                    <li><Link href="team-details">Instructor Profile</Link></li>
                    <li><Link href="faq">Faq's</Link></li>
                    <li><Link href="404">404 Error</Link></li>
                    <li><Link href="coming-soon">Coming Soon</Link></li>
                  </ul>
                </li>
                <li>
                  <h6 className="menu-title">Inner Pages</h6>
                  <ul className="submenu mega-sub-menu-01">
                    <li><Link href="gallery-grid">Gallery Grid</Link></li>
                    <li><Link href="gallery-masonry">Gallery Masonry</Link></li>
                    <li><Link href="event-grid">Event Grid</Link></li>
                    <li><Link href="event-list">Event List</Link></li>
                    <li><Link href="event-details">Event Details</Link></li>
                    <li><Link href="pricing-table">Pricing Table</Link></li>
                    <li><Link href="purchase-guide">Purchase Guide</Link></li>
                    <li><Link href="privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="terms-condition">Terms & Condition</Link></li>
                    <li><Link href="my-account">Sign In</Link></li>
                  </ul>
                </li>
                <li>
                  <h6 className="menu-title">Shop Pages</h6>
                  <ul className="submenu mega-sub-menu-01">
                    <li><Link href="shop">Shop</Link></li>
                    <li><Link href="product-details">Product Details</Link></li>
                    <li><Link href="cart">Cart</Link></li>
                    <li><Link href="wishlist">Wishlist</Link></li>
                    <li><Link href="checkout">Checkout</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li ><Link href="/courses">Courses</Link>

            </li>

            <li className="has-droupdown"><Link href="#">Blog</Link>
              <ul className="submenu">
                <li><Link href="blog-standard">Blog Standard</Link></li>
                <li><Link href="blog-masonry">Blog Masonry</Link></li>
                <li><Link href="blog-list">Blog List</Link></li>
                <li><Link href="blog-details">Blog Details</Link></li>
              </ul>
            </li>
            <li className="has-droupdown"><Link href="/contact-us">Contact</Link>
              <ul className="submenu">
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/contact-me">Contact Me</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="edu-search-popup">
        <div className="content-wrap">
          <div className="site-logo">
            <Image className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" width={158} height={50} />
            <Image className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" width={158} height={50} />
          </div>
          <div className="close-button">
            <button className="close-trigger"><i className="icon-73"></i></button>
          </div>
          <div className="inner">
            <form className="search-form" action="#">
              <input type="text" className="edublink-search-popup-field" placeholder="Search Here..." />
              <button className="submit-button"><i className="icon-2"></i></button>
            </form>
          </div>
        </div>
      </div>

    </header>

  )
}
