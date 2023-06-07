import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import db from "../../utils/connectMongo"
import ContactModel from "../../models/contact"
async function saveContact(formData) {
    'use server';
    console.log(formData);
    const contactdata = await ContactModel.create(formData);
    console.log('CREATED DOCUMENT');
    return formData;
    const post = await db.post.insert({
        title: formData.get('title'),
        content: formData.get('content'),
    });

    //redirect(`/blog/${post.slug}`);
}

export default function contactForm() {

    return (
        <>

            <section className="contact-us-area">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-4 col-lg-6">
                            <div className="contact-us-info">
                                <h3 className="heading-title">We're Always Eager to Hear From You!</h3>
                                <ul className="address-list">
                                    <li>
                                        <h5 className="title">Address</h5>
                                        <p>Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p>
                                    </li>
                                    <li>
                                        <h5 className="title">Email</h5>
                                        <p><a href="mailto:edublink@example.com">edublink@example.com</a></p>
                                    </li>
                                    <li>
                                        <h5 className="title">Phone</h5>
                                        <p><a href="tel:+0914135548598">(+091) 413 554 8598</a></p>
                                    </li>
                                </ul>
                                <ul className="social-share">
                                    <li><Link href="#"><i className="icon-share-alt"></i></Link></li>
                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="icon-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="icon-linkedin2"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="offset-xl-2 col-lg-6">
                            <div className="contact-form form-style-2">
                                <div className="section-title">
                                    <h4 className="title">Get In Touch</h4>
                                    <p>Fill out this form for booking a consultant advising session.</p>
                                </div>
                                <form className="rnt-contact-form rwt-dynamic-form" id="contact-form" method="POST" action={saveContact}>
                                    <div className="row row--10">
                                        <div className="form-group col-12">
                                            <input type="text" name="contact-name" id="contact-name" placeholder="Your name" />
                                        </div>
                                        <div className="form-group col-12">
                                            <input type="email" name="contact-email" id="contact-email" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group col-12">
                                            <input type="tel" name="contact-phone" id="contact-phone" placeholder="Phone number" />
                                        </div>
                                        <div className="form-group col-12">
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="4" placeholder="Your message"></textarea>
                                        </div>
                                        <div className="form-group col-12">
                                            <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Submit Message <i className="icon-4"></i></button>
                                        </div>
                                    </div>
                                </form>
                                <ul className="shape-group">
                                    <li className="shape-1 scene"><Image data-depth="1" src="/assets/images/about/shape-13.png" alt="Shape" height={20} width={50} /></li>
                                    <li className="shape-2 scene"><Image data-depth="-1" src="/assets/images/counterup/shape-02.png" alt="Shape" height={20} width={50} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
