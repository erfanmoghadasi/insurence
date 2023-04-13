
import React, { FC, useState } from "react";
import Link from 'next/link'
import Head from "next/head";

const Navbar: FC = () => {

  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
    {/* <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
    </Head> */}
    
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/*  Logo Start  */}
                <Link href="/">
                <a className="logo">
                  <img src="images/logo_space.png" alt="اسپیس بیمه" />
                </a>                
                </Link>
                {/*  Logo End  */}
                {/*  Menu Start  */}
                <ul className="nav" style={isToggled ? {display: "block"} : {}} >
                  <li>
                    <div className="gradient-button">
                      <Link href="/order">
                       ثبت سفارش
                      </Link>
                    </div>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/">
                    <a >
                      صفحه اصلی
                    </a>
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/listnews">
                    وبلاگ
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/faq">
                   سوالات متداول
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/about">
                    درباره 
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/#pricing">
                    تعرفه ها
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/contact">
                    تماس با ما
                    </Link>
                  </li>
                </ul>
                <a  className={!isToggled ? "menu-trigger" : "menu-trigger active"} onClick={()=> setIsToggled(!isToggled)}>
                  <span>منو</span>
                </a>
                {/* Menu End */}
              </nav>
            </div>
          </div>
        </div>
      </header>


    </>
  );
};

export default Navbar;
