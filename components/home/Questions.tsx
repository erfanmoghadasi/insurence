import { FC, useState } from "react";


const Questions: FC = () => {

  const [activeClass , setActiveClass] = useState<string>("button1")

  return (
    <div className="container pt-5 question-container" id="faq">
      <div className="row">
        <div className="col-lg-5">
          <img src="images/faq.png" className="img-fluid" alt="اسپیس بیمه" />
        </div>
        <div className="col-lg-5 offset-lg-1 mt-1">
          <div className="faq" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={activeClass==="button1" ? "accordion active" : "accordion"}
                  onClick={() => setActiveClass("button1")}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{ backgroundColor: "#fff" }}
                >
                  <span id="tab-title-dimensions_tab">
                    حوزه فعالیت اسپیس بیمه در چه زمینه ای است ؟
                  </span>
                  <div className="circle-animation closed">
                    <div className="horizontal" />
                    <div className="vertical" />
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                style={{ background: "#ffffff" }}

              >
                <div
                  className="accordion-body"
                  style={{ background: "#ffffff" }}
                >
                  <p style={{ color: "#000", width: "100%" }}>
                    سفارش شما در سیستم ثبت می شود و در اسرع وقت تیم پشتیبانی جهت
                    پیگیری و تحویل محصول با شما تماس میگیرد.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={activeClass==="button2" ? "accordion active" : "accordion"}
                  onClick={() => setActiveClass("button2")}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span id="tab-title-dimensions_tab">چرا اسپیس بیمه ؟</span>
                  <div className="circle-animation closed">
                    <div className="horizontal" />
                    <div className="vertical" />
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  تیم اسپیس بیمه با بیش از ۵ سال سابقه در این حوزه فعالیت دارد و
                  متشکل از بهترین مدیران، برنامه نویسان و طراحان در این زمینه
                  است.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={activeClass==="button3" ? "accordion active" : "accordion"}
                  onClick={() => setActiveClass("button3")}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span id="tab-title-dimensions_tab">
                    بعد از ثبت سفارش چه اتفاقی میوفتد ؟
                  </span>{" "}
                  <div className="circle-animation closed">
                    <div className="horizontal" />
                    <div className="vertical" />
                  </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  سفارش شما در سیستم ثبت می شود و در اسرع وقت تیم پشتیبانی جهت
                  پیگیری و تحویل محصول با شما تماس میگیرد.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className={activeClass==="button4" ? "accordion active" : "accordion"}
                  onClick={() => setActiveClass("button4")}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span id="tab-title-dimensions_tab">
                    پشتیبانی محصولات به چه صورت است ؟
                  </span>
                  <div className="circle-animation closed">
                    <div className="horizontal" />
                    <div className="vertical" />
                  </div>{" "}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  پشتیبانی بصورت دائم انجام می شود و سالانه قابل تمدید خواهد
                  بود.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 pt-2">
            <a href="faq.html" className="btn-more-news" type="button">
              سایر سوالات متداول
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
