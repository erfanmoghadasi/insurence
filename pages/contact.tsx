import { NextPage } from "next"
import Head from "next/head"

const contact:NextPage = () => {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="css/contact.css" />
    </Head>

    <div className="container container-contact">
  <div className="row">
    <div className="col-md-6">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="section-heading heading-contact wow fadeInDown animated"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              WebkitAnimationDuration: "1s",
              MozAnimationDuration: "1s",
              animationDuration: "1s",
              WebkitAnimationDelay: "0.5s",
              MozAnimationDelay: "0.5s",
              animationDelay: "0.5s"
            }}
          >
            <h4>
              ارتباط با <em>اسپیس بیمه</em> بدون واسطه
            </h4>
            <p>
              شما مشتری عزیز می توانید هرگونه سوال، انتقاد و یا پیشنهاد خود را
              از طریق فرم پیش رو، و یا سایر راه های ارتباطی که در اختیارتان قرار
              دارد با ما در میان بگذارید. همکاران ما آماده پاسخگویی به شما مشتری
              عزیز می باشند.
            </p>
          </div>
        </div>
      </div>
      <section className="input-content">
        <div className="input-content-wrap">
          <div className="row">
            <div className="col-md-6">
              <div
                className="inputbox wow fadeInUp animated inputbox-pad"
                // style={{padding:"0"}}
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div className="inputbox-content">
                  <input id="fullname" type="text" required />
                  <label htmlFor="fullname">نام و نام خانوادگی</label>
                  <span className="underline" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div 
                className="inputbox wow fadeInUp animated inputbox-pad"
                data-wow-duration="1s"
                data-wow-delay="1.1s"
              >
                <div className="inputbox-content">
                  <input id="phone" type="number" required />
                  <label htmlFor="phone">شماره همراه</label>
                  <span className="underline" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="inputbox wow fadeInUp animated inputbox-pad"
                data-wow-duration="1s"
                data-wow-delay="1.2s"
              >
                <div className="inputbox-content">
                  <input id="email" type="email" required />
                  <label htmlFor="email">ایمیل</label>
                  <span className="underline" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="inputbox wow fadeInUp animated inputbox-pad"
                data-wow-duration="1s"
                data-wow-delay="1.3s"
              >
                <div className="inputbox-content">
                  <input id="title-message" type="text" required />
                  <label htmlFor="title-message">موضوع پیام</label>
                  <span className="underline" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="inputbox wow fadeInUp animated inputbox-pad"
                data-wow-duration="1s"
                data-wow-delay="1.4s"
              >
                <div className="inputbox-content inputbox-pad">
                  <textarea
                    id="title-message"
                    rows={4}
                    required
                    defaultValue={""}
                  />
                  <label htmlFor="title-message inputbox-pad">متن پیام</label>
                  <span className="underline" />
                </div>
              </div>
            </div>
            <div
              className="text-center mt-1 wow fadeInUp animated "
              data-wow-duration="1s"
              data-wow-delay="1.5s"
            >
              <button
                className="btn-sub-comment"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#ModalOrder"
              >
                ارسال پیام
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="col-md-6 pt-4">
      <img
        src="images/contact.png"
        className="wow fadeInLeft animated"
        data-wow-duration="1s"
        data-wow-delay="1.8s"
        alt="ارتباط با ما"
      />
    </div>
  </div>
  {/* support numbers */}
  <div className="row mt-5">
    <div className="col-md-6">
      <div
        className="card-support wow fadeInUp animated"
        data-wow-duration="1s"
        data-wow-delay="1.5s"
      >
        <h4>واحد فروش و مالی</h4>
        <div className="row">
          <div className="col-md-6">
            <p className="support-title">مدیریت</p>
            <p className="support-description">خانم حسینی</p>
          </div>
          <div className="col-md-6">
            <p className="support-title">ساعات پاسخگویی</p>
            <p className="support-description">روزهای کاری ۹ الی ۱۷</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="support-title">ایمیل</p>
            <p className="support-description">
              {" "}
              <a href="mailto:spacebimeh.support@gmail.com">
                spacebimeh.support@gmail.com
              </a>{" "}
            </p>
          </div>
          <div className="col-md-6">
            <p className="support-title">تلفن تماس</p>
            <p className="support-description">۲۶۴۵ - ۰۲۱</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div
        className="card-support wow fadeInUp animated"
        data-wow-duration="1s"
        data-wow-delay="1.8s"
      >
        <h4>واحد پشتیبانی</h4>
        <div className="row">
          <div className="col-md-6">
            <p className="support-title">مدیریت</p>
            <p className="support-description">خانم مسعودی</p>
          </div>
          <div className="col-md-6">
            <p className="support-title">ساعات پاسخگویی</p>
            <p className="support-description">روزهای کاری ۹ الی ۱۷</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="support-title">ایمیل</p>
            <p className="support-description">
              {" "}
              <a href="mailto:spacebimeh.support@gmail.com">
                spacebimeh.support@gmail.com
              </a>{" "}
            </p>
          </div>
          <div className="col-md-6">
            <p className="support-title">تلفن تماس</p>
            <p className="support-description">۲۶۴۵ - ۰۲۱</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="button-container">
  <a
    href="#"
    className="glass-btn blue-btn wow fadeInUp animated"
    data-wow-duration="1s"
    data-wow-delay="0.2s"
  >
    <img
      src="images/icons/instagram.png"
      alt="instagram"
      style={{ width: "2.5em" }}
    />
  </a>
  <a
    href="#"
    className="glass-btn red-btn wow fadeInUp animated"
    data-wow-duration="1s"
    data-wow-delay="0.5s"
  >
    <img
      src="images/icons/whatsapp.png"
      alt="whatsapp"
      style={{ width: "2.5em" }}
    />
  </a>
  <a
    href="#"
    className="glass-btn amber-btn wow fadeInUp animated"
    data-wow-duration="1s"
    data-wow-delay="0.8s"
  >
    <img
      src="images/icons/telegram.png"
      alt="telegram"
      style={{ width: "2.5em" }}
    />
  </a>
</div>


    </>
  )
}

export default contact