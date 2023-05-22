import Script from 'next/Script'
export default function footerScript() {
    return (
        <>
            <Script src="/assets/js/vendor/modernizr.min.js" strategy="beforeInteractive"></Script>
            <Script src="/assets/js/vendor/jquery.min.js" strategy="beforeInteractive"></Script>
            <Script src="/assets/js/vendor/bootstrap.min.js" strategy="beforeInteractive"></Script>
            <Script src="/assets/js/vendor/sal.min.js" strategy="beforeInteractive"></Script>
            <Script src="/assets/js/vendor/backtotop.min.js"></Script>
            <Script src="/assets/js/vendor/magnifypopup.min.js"></Script>
            <Script src="/assets/js/vendor/jquery.countdown.min.js"></Script>
            <Script src="/assets/js/vendor/odometer.min.js"></Script>
            <Script src="/assets/js/vendor/isotop.min.js"></Script>
            <Script src="/assets/js/vendor/imageloaded.min.js"></Script>
            <Script src="/assets/js/vendor/lightbox.min.js"></Script>
            <Script src="/assets/js/vendor/paralax.min.js"></Script>
            <Script src="/assets/js/vendor/paralax-scroll.min.js"></Script>
            {/*<Script src="/assets/js/vendor/jquery-ui.min.js"></Script>*/}
            <Script src="/assets/js/vendor/swiper-bundle.min.js"></Script>
            <Script src="/assets/js/vendor/svg-inject.min.js"></Script>
            {/*<Script src="/assets/js/vendor/vivus.min.js"></Script>*/}
            <Script src="/assets/js/vendor/tipped.min.js"></Script>
            <Script src="/assets/js/vendor/smooth-scroll.min.js"></Script>
            <Script src="/assets/js/vendor/isInViewport.jquery.min.js"></Script>
            <Script src="/assets/js/app.js"></Script>

        </>
    )
}
