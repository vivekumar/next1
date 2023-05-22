import React from 'react'
import Link from 'next/link';
export default function sorting() {
    return (
        <div className="edu-sorting-area">
            <div className="sorting-left">
                <h6 className="showing-text">We found <span>71</span> courses available for you</h6>
            </div>
            <div className="sorting-right">
                <div className="layout-switcher">
                    <label>Grid</label>
                    <ul className="switcher-btn">
                        <li><Link href="course-one.html" className=""><i className="icon-53"></i></Link></li>
                        <li><Link href="course-four.html" className="active"><i className="icon-54"></i></Link></li>
                    </ul>
                </div>
                <div className="edu-sorting">
                    <div className="icon"><i className="icon-55"></i></div>
                    <select className="edu-select">
                        <option>Filters</option>
                        <option>Low To High</option>
                        <option>High Low To</option>
                        <option>Last Viewed</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
