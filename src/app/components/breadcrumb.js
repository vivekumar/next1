import Link from 'next/link';
import Image from 'next/image'
export default function Footer(props) {
    return (
        <div className="edu-breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="page-title">
                        <h1 className="title">{props.title}</h1>
                    </div>
                    <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item"><Link href="index-one.html">Home</Link></li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <li className="shape-2 scene"><Image data-depth="2" src="/assets/images/about/shape-13.png" alt="shape" height={186} width={186} /></li>
                <li className="shape-3 scene"><Image data-depth="-2" src="/assets/images/about/shape-15.png" alt="shape" width={101} height={39} /></li>
                <li className="shape-4">
                    <span></span>
                </li>
                <li className="shape-5 scene"><Image data-depth="2" src="/assets/images/about/shape-07.png" alt="shape" width={139} height={193} /></li>
            </ul>
        </div>
    )
}
