import { FC } from "react";

const Pricing: FC = () => {
  return (
    <div id="pricing" className="pricing-tables">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-heading">
              <h4>
                انتخاب طرح و <em>تعرفه</em> مناسب، با توجه به نیازهای شما
              </h4>
              {/* <img src="/images/heading-line-dec.png" alt="" /> */}
              <p>
                اگر به دنبال ابزارهای مدیریتی برای شبکه فروش ، طراحی سایتها یا
                اپلیکیشنهای بیمه هستید ، اسپیس بیمه می تواند با توجه به نوع کسب
                و کار و فعالیت شما متناسب با بودجه مد نظر شما طرح های مختلفی را
                ارائه دهد.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs">
              <input type="radio" id="tab1" name="tab-control" defaultChecked />
              <input type="radio" id="tab2" name="tab-control" />
              <input type="radio" id="tab3" name="tab-control" />
              <input type="radio" id="tab4" name="tab-control" />
              <ul className="ul-tabs-price">
                <li title="Features">
                  <label htmlFor="tab1" role="button">
                    <br />
                    <span>بازاریاب</span>
                  </label>
                </li>
                <li title="Delivery Contents">
                  <label htmlFor="tab2" role="button">
                    <br />
                    <span>نماینده</span>
                  </label>
                </li>
                <li title="Shipping">
                  <label htmlFor="tab3" role="button">
                    <br />
                    <span>کارگزار</span>
                  </label>
                </li>
                <li title="Returns">
                  <label htmlFor="tab4" role="button">
                    <svg viewBox="0 0 24 24"></svg>
                    <br />
                    <span>سازمانی</span>
                  </label>
                </li>
              </ul>
              <div className="slider">
                <div className="indicator" />
              </div>
              <div className="content">
                <section>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                          <a href="#">توضیحات کامل</a>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                          <a href="#">توضیحات کامل</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                            <a href="#">توضیحات کامل</a>
                          </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                            <a href="#">توضیحات کامل</a>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                            <a href="#">توضیحات کامل</a>
                          </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                            <a href="#">توضیحات کامل</a>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                        <a href="#">توضیحات کامل</a>
                      </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-item-pro">
                        <span className="price">یکساله</span>
                        <h4>
                          بازاریابی ( <span>M1</span> )
                        </h4>
                        <h3>
                          ۲,۸۰۰,۰۰۰ <span>تومان</span>
                        </h3>
                        <div className="icon">
                          <img src="images/4412.jpg" alt="" />
                        </div>
                        <ul className="pricing-list">
                          <li>وبسایت فروش آنلاین بیمه</li>
                          <li>قابلیت فروش اقساطی بیمه</li>
                          <li>قابلیت فروش مستقیم بیمه در یک شرکت بیمه</li>
                          <li>دامنه ir. رایگان</li>
                          <li>طراحی وبسایت به صورت Visual</li>
                          <li className="non-function">
                            امکان تولید نرم افزار تلفن همراه (Android)
                          </li>
                        </ul>
                        {/* <div class="border-button">
                        <a href="#">توضیحات کامل</a>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
