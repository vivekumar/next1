import Link from 'next/link';
import Head from 'next/head';
export default function HeadTop() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>EduBlink | Online Education Platform</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <Link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />

                <Link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/icomoon.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/magnifypopup.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/odometer.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/lightbox.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/animation.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/jqueru-ui-min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/swiper-bundle.min.css" />
                <Link rel="stylesheet" href="/assets/css/vendor/tipped.min.css" />

                <Link rel="stylesheet" href="/assets/css/app.css" />

            </Head>
        </>
    )
}
