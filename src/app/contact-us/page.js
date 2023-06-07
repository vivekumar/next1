

import ContactForm from "../components/contact/contact"
import Breadcrumb from "../components/breadcrumb"
export default function ContactUs() {
    return (
        <div>
            <Breadcrumb title={'Contact Us'} />
            <ContactForm />

            <div className="google-map-area">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne,%20Australia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}











