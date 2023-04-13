import { FC } from "react";

const Services: FC = () => {
  return (
    <>
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  خدمات شگفت انگیز <em >اسپیس بیمه</em> برای شما
                </h4>
                <p>
                  سامانه اسپیس بیمه برای کارگزاران، نمایندگی ها و بازاریاب ها
                  خدمات ویژه ای را در نظر گرفته است که در زیر با بخشی از آنها
                  آشنا می شوید.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon" />
                <h4>طراحی سایت اختصاصی</h4>
                <p>
                  طراحی وبسایت فروش بیمه بصورت اختصاصی برای فروش آنلاین بیمه با
                  قابلیت مقایسه قیمت ها، ثبت سفارش و پرداخت آنلاین
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon" />
                <h4>مدیریت شبکه فروش</h4>
                <p>
                  ثبت نامحدود مدیر فروش ، سفارش فروش توسط بازاریاب ها و قابلیت
                  تسهیم کارمزد شبکه فروش به دلخواه
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon" />
                <h4>محاسبات دقیق و سریع</h4>
                <p>
                  اسپیس بیمه با پردازشگرهای قدرتمند درکمترین زمان و پرداخت
                  کمترین تعرفه ها، پیچیده ترین فرمولهای محساباتی را پردازش می
                  کند
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon" />
                <h4>سهولت در مدیریت</h4>
                <p>
                  امکانات و قابلیت های اسپیس بیمه موجب سهولت در مدیریت کسب و کار
                  بیمه ی شما خواهد شد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
