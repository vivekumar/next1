import React from 'react'

export default function filters() {
    return (
        <div className="edu-course-sidebar">
            <div className="edu-course-widget widget-category">
                <div className="inner">
                    <h5 className="widget-title">Filter by Categories</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check1" defaultChecked />
                            <label htmlFor="cat-check1">Art &amp; Design <span>(7)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check2" />
                            <label htmlFor="cat-check2">Development <span>(2)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check3" />
                            <label htmlFor="cat-check3">Business <span>(3)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check4" />
                            <label htmlFor="cat-check4">Marketing <span>(6)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check5" />
                            <label htmlFor="cat-check5">Academics <span>(2)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="cat-check6" />
                            <label htmlFor="cat-check6">Data Science <span>(9)</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-instructor">
                <div className="inner">
                    <h5 className="widget-title">Instructor</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="inst-check1" />
                            <label htmlFor="inst-check1">Madge Alvarez <span>(2)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="inst-check2" />
                            <label htmlFor="inst-check2">Tyler Hardy <span>(14)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="inst-check3" />
                            <label htmlFor="inst-check3">Dabiv Matina <span>(10)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="inst-check4" />
                            <label htmlFor="inst-check4">Robbin Lee <span>(5)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="inst-check5" />
                            <label htmlFor="inst-check5">Donald Logan <span>(2)</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-level">
                <div className="inner">
                    <h5 className="widget-title">Level</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check1" />
                            <label htmlFor="level-check1">All Levels <span>(23)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check2" />
                            <label htmlFor="level-check2">Beginner <span>(7)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check3" />
                            <label htmlFor="level-check3">High <span>(10)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check4" />
                            <label htmlFor="level-check4">Intermediate <span>(13)</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-language">
                <div className="inner">
                    <h5 className="widget-title">Language</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="lang-check1" />
                            <label htmlFor="lang-check1">English <span>(12)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="lang-check2" />
                            <label htmlFor="lang-check2">Spanish <span>(7)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="lang-check3" />
                            <label htmlFor="lang-check3">German <span>(5)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="lang-check4" />
                            <label htmlFor="lang-check4">Russian <span>(3)</span></label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="lang-check5" />
                            <label htmlFor="lang-check5">Korean <span>(2)</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-price">
                <div className="inner">
                    <h5 className="widget-title">Price</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="price-check1" />
                            <label htmlFor="price-check1">All Price</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="price-check2" />
                            <label htmlFor="price-check2">Free</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="price-check3" />
                            <label htmlFor="price-check3">Low to High</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="price-check4" />
                            <label htmlFor="price-check4">High to Low</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="price-check5" />
                            <label htmlFor="price-check5">Paid</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-rating">
                <div className="inner">
                    <h5 className="widget-title">Rating</h5>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="rating-check1" />
                            <label htmlFor="rating-check1">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <span>(7)</span>
                            </label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="rating-check2" />
                            <label htmlFor="rating-check2">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="off icon-23"></i>
                                <span>(2)</span>
                            </label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="rating-check3" />
                            <label htmlFor="rating-check3">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <span>(3)</span>
                            </label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="rating-check4" />
                            <label htmlFor="rating-check4">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <span>(6)</span>
                            </label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="rating-check5" />
                            <label htmlFor="rating-check5">
                                <i className="icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <i className="off icon-23"></i>
                                <span>(2)</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
