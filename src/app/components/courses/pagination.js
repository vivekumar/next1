import React from 'react'
import Link from 'next/link'
export default function pagination() {
    return (
        <ul className="edu-pagination ">
            <li><Link href="#" aria-label="Previous"><i className="icon-west"></i></Link></li>
            <li className="active"><Link href="#">1</Link></li>
            <li><Link href="#">2</Link></li>
            <li><Link href="#">3</Link></li>
            <li className="more-next"><Link href="#"></Link></li>
            <li><Link href="#">8</Link></li>
            <li><Link href="#" aria-label="Next"><i className="icon-east"></i></Link></li>
        </ul>
    )
}
