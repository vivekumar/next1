import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from "../components/breadcrumb"
export default function Cart() {
    return (
        <>
            <Breadcrumb title={"My Account"} />
            <section className="account-page-area section-gap-equal">
                <div className="container position-relative">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-5">
                            <div className="login-form-box">
                                <h3 className="title">Sign in</h3>
                                <p>Don’t have an account? <Link href="#">Sign up</Link></p>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="current-log-email">Username or email*</label>
                                        <input type="email" name="current-log-email" id="current-log-email" placeholder="Email or username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="current-log-password">Password*</label>
                                        <input type="password" name="current-log-password" id="current-log-password" placeholder="Password" />
                                        <span className="password-show"><i className="icon-76"></i></span>
                                    </div>
                                    <div className="form-group chekbox-area">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="remember-me" />
                                            <label htmlFor="remember-me">Remember Me</label>
                                        </div>
                                        <Link href="#" className="password-reset">Lost your password?</Link>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="login-form-box registration-form">
                                <h3 className="title">Registration</h3>
                                <p>Already have an account? <Link href="#">Sign in</Link></p>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="reg-name">Name*</label>
                                        <input type="text" name="reg-name" id="reg-name" placeholder="Full name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="log-email">Username or email*</label>
                                        <input type="email" name="log-email" id="log-email" placeholder="Email or username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="log-password">Password*</label>
                                        <input type="password" name="log-password" id="log-password" placeholder="Password" />
                                        <span className="password-show"><i className="icon-76"></i></span>
                                    </div>
                                    <div className="form-group chekbox-area">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="terms-condition" />
                                            <label htmlFor="terms-condition">I agree the User Agreement and <Link href="terms-condition.html">Terms & Condition.</Link> </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="edu-btn btn-medium">Create Account <i className="icon-4"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1 scene"><Image data-depth="2" src="/assets/images/about/shape-07.png" alt="Shape" width={123} height={193} /></li>
                        <li className="shape-2 scene"><Image data-depth="-2" src="/assets/images/about/shape-13.png" alt="Shape" width={186} height={186} /></li>
                        <li className="shape-3 scene"><Image data-depth="2" src="/assets/images/counterup/shape-02.png" alt="Shape" width={159} height={175} /></li>
                    </ul>
                </div>
            </section>
        </>
    )
}
