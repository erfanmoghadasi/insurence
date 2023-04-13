import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



const HomeHeader:FC = () => {
  return (
    <>
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>
                          {" "}
                          <span>اسپیس بیمه</span> ، تحولی نوین در هوشمندسازی
                          صنعت کسب و کار بیمه
                        </h2>
                        <p>
                          اسپیس بیمه چیست؟ با نگاهی اجمالی می توان گفت سامانه
                          اسپیس بیمه می تواند بستر راه اندازی کسب وکار آنلاین
                          برای فعالان و علاقه مندان به صنعت بیمه را فراهم کند که
                          بتوانند با حداقل سرمایه گذاری به درآمد بالایی برسند.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <Link href="/contact">
                          <a >نمونه کارها </a>
                          </Link>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#pricing">تعرفه ها </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-icons">
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "58vw",
                        fontSize: "8vw",
                        transform: "rotate(163deg)",
                        animationDelay: "1s",
                        animationDuration: "10s",
                      }}
                    />
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "69vw",
                        fontSize: "9vw",
                        transform: "rotate(227deg)",
                        animationDelay: "5s",
                        animationDuration: "9s",
                      }}
                    />
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "87vw",
                        fontSize: "10vw",
                        transform: "rotate(115deg)",
                        animationDelay: "5s",
                        animationDuration: "14s",
                      }}
                    />
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "9vw",
                        fontSize: "9vw",
                        transform: "rotate(106deg)",
                        animationDelay: "5s",
                        animationDuration: "8s",
                      }}
                    />
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "54vw",
                        fontSize: "9vw",
                        transform: "rotate(329deg)",
                        animationDelay: "3s",
                        animationDuration: "10s",
                      }}
                    />
                    <i
                      className="bx bxs-circle"
                      style={{
                        left: "41vw",
                        fontSize: "9vw",
                        transform: "rotate(334deg)",
                        animationDelay: "2s",
                        animationDuration: "13s",
                      }}
                    />
                  </div>
                  <div
                    className="right-image wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <Image src="/images/slider-dec.png" alt="" width={710} height={710} />
                    {/* <img src="images/slider-dec.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
