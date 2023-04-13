import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading section-heading-footer">
                <h4>
                  برای اطلاع از آخرین اخبار و جدیدترین بروزرسانی ها در خبرنامه
                  عضو شوید
                </h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="آدرس ایمیل ..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        عضویت در خبرنامه <i className="bx bx-chevron-left" />
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>اسپیس بیمه</h4>
                <div className="logo">
                  {/* <Image src="images/logo_footer.png" alt="اسپیس بیمه" width={} /> */}
                  <img src="images/logo_footer.png" alt="اسپیس بیمه" />
                </div>
                <p>
                  سامانه اسپیس بیمه می تواند بستر راه اندازی کسب وکار آنلاین
                  برای فعالان و علاقه مندان به صنعت بیمه را فراهم کند که بتوانند
                  به آسانی ، در کمترین زمان ممکن و حداقل سرمایه گذاری به درآمد
                  بالایی برسند.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>ارتباط با ما</h4>
                <p>تهران - خیابان کارگر شمالی</p>
                <p>
                  <a href="">۰۲۱۲۳۴۱۲۳۴۳</a>
                </p>
                <p>
                  <a href="">info@spacebimeh.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>دسترسی سریع</h4>
                <ul>
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                  <li>
                    <a href="#">شرایط و قوانین</a>
                  </li>
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="#">وبلاگ</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">تعرفه ها</a>
                  </li>
                  <li>
                    <a href="#">نمونه کارها</a>
                  </li>
                  <li>
                    <a href="#">ثبت سفارش</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
