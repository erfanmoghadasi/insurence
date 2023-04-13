import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import Script from 'next/script';
import "../public/css/about.css";
import "../public/css/animated.css";
import "../public/css/articledetails.css";
import "../public/css/bootstrap.min.css";
import "../public/css/bootstrap.rtl.min.css";
import "../public/css/contact.css";
import "../public/css/faq.css";
import "../public/css/fontawesome.min.css";
import "../public/css/main.css";
import "../public/css/owl.css";
import "../public/css/index.css";
import "../public/css/order.css";
import "../public/css/boxicons.min.css";
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
    </Head>

    <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossOrigin="anonymous"></Script>
    <Layout>
  <Component {...pageProps} />
  </Layout>

<Script src="js/jquery.min.js"></Script>
<Script src="js/bootstrap.bundle.min.js"></Script>
<Script src="js/animation.js"></Script>
<Script src="js/imagesloaded.js"></Script>
{/* <Script src="js/popup.js"></Script> */}
{/* <Script src="js/custom.js"></Script> */}
<Script src="js/index.js"></Script>
{/* <Script src="js/owl-carousel.js"></Script> */}
</>
  )
}

export default MyApp
