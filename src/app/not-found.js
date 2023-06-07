import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="contact-us-area">
            <div className="container text-center">
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <p>
                    View <Link href="/courses">all courses</Link>
                </p>
            </div>
        </section>
    );
}