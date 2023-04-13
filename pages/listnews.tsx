import { NextPage } from "next"
import Head from "next/head"

const listnews:NextPage = () => {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="css/index.css" />
      
    </Head>
    <div id="news" className="section news">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div
          className="section-heading  wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <h4>
            جدیدترین <em>اخبار و مقالات</em> حوزه فناوری اطلاعات
          </h4>
          <p>
            آخرین اخبار و بروزترین مقالات حوزه فناوری اطلاعات و فضای صنعت بیمه
            را می توانید دنبال نمایید.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-news">اخبار</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/life-insurance.jpg")' }}
          />
          <div className="content-card-news">
            <h3>نوآوری در خدمات بیمه‌ای ضروری است</h3>
            <p>
              ­وزیر امور اقتصادی و دارایی در دیدار با مدیران صنعت بیمه کشور با
              تشریح انتظارات این وزارتخانه از این صنعت گفت: برای نوآوری در
              محصولات و خدمات بیمه ای، حتمأ باید مسیر فعلی را تغییر دهیم.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-article">مقاله</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/close-up.jpg")' }}
          />
          <div className="content-card-news">
            <h3>ماموریت اصلی بیمه مرکزی رفع موانع خدمات رسانی است</h3>
            <p>
              رئیس کل بیمه مرکزی ماموریت اصلی بیمه مرکزی را مانع زدایی در ارایه
              خدمات بیمه ای دانست و گفت: این روند در سال ۱۴۰۰ شتاب بیشتری خواهد
              گرفت.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-news">اخبار</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/Health.jpg")' }}
          />
          <div className="content-card-news">
            <h3>حق بیمه تولیدی ۵۲.۹ هزار میلیارد تومان شد</h3>
            <p>
              آمارهای منتشر شده از عملکرد ۱۱ ماهه صنعت بیمه در سال ۱۳۹۸ نشان
              می‌دهد که حق بیمه تولیدی با ۳۸.۱ درصد رشد نسبت به مدت مشابه سال
              قبل از آن، به ۵۲.۹ هزار میلیارد تومان رسیده است.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-news">اخبار</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/life-insurance.jpg")' }}
          />
          <div className="content-card-news">
            <h3>نوآوری در خدمات بیمه‌ای ضروری است</h3>
            <p>
              ­وزیر امور اقتصادی و دارایی در دیدار با مدیران صنعت بیمه کشور با
              تشریح انتظارات این وزارتخانه از این صنعت گفت: برای نوآوری در
              محصولات و خدمات بیمه ای، حتمأ باید مسیر فعلی را تغییر دهیم.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-article">مقاله</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/close-up.jpg")' }}
          />
          <div className="content-card-news">
            <h3>ماموریت اصلی بیمه مرکزی رفع موانع خدمات رسانی است</h3>
            <p>
              رئیس کل بیمه مرکزی ماموریت اصلی بیمه مرکزی را مانع زدایی در ارایه
              خدمات بیمه ای دانست و گفت: این روند در سال ۱۴۰۰ شتاب بیشتری خواهد
              گرفت.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-news">
          <span className="label-news">اخبار</span>
          <div
            className="img-card-news"
            style={{ backgroundImage: 'url("images/Health.jpg")' }}
          />
          <div className="content-card-news">
            <h3>حق بیمه تولیدی ۵۲.۹ هزار میلیارد تومان شد</h3>
            <p>
              آمارهای منتشر شده از عملکرد ۱۱ ماهه صنعت بیمه در سال ۱۳۹۸ نشان
              می‌دهد که حق بیمه تولیدی با ۳۸.۱ درصد رشد نسبت به مدت مشابه سال
              قبل از آن، به ۵۲.۹ هزار میلیارد تومان رسیده است.{" "}
            </p>
            <div className="news-button">
              <a href="articledetails.html">
                ادامه مطلب <i className="bx bx-chevron-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default listnews
