import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { ReactNode, useEffect, useState } from "react";
import Preloader from "../Preloader";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 1000);
  },[])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>سامانه اسپیس بیمه</title>
      </Head>
      {isLoading ? (<><Navbar /><div> {children}</div><Footer /></>) : <Preloader />}
      

      {/* <Script src="js/jquery.min.js"></Script>
      <Script src="js/bootstrap.bundle.min.js"></Script>
      <Script src="js/animation.js"></Script>
      <Script src="js/imagesloaded.js"></Script>
      <Script src="js/popup.js"></Script>
      <Script src="js/custom.js"></Script>
      <Script src="js/index.js"></Script>
      <Script src="js/owl-carousel.js"></Script> */}
    </>
  );
};

export default Layout;
