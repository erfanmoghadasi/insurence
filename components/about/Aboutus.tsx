import { FC } from 'react'

const AboutHeader:FC = () => {
  return (
    <div
  className="header-area header-sticky wow slideInDown"
  data-wow-duration="0.75s"
  data-wow-delay="0s"
>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/*  Logo Start  */}
          <a href="index.html" className="logo">
            <img src="images/logo_space.png" alt="اسپیس بیمه" />
          </a>
          {/*  Logo End  */}
          {/*  Menu Start  */}
          <ul className="nav">
            <li>
              <div className="gradient-button">
                <a href="order.html"> ثبت سفارش</a>
              </div>
            </li>
            <li className="scroll-to-section">
              <a href="index.html" className="active">
                صفحه اصلی
              </a>
            </li>
            <li className="scroll-to-section">
              <a href="#news">وبلاگ</a>
            </li>
            <li className="scroll-to-section">
              <a href="#faq">سوالات متداول</a>
            </li>
            <li className="scroll-to-section">
              <a href="#">درباره ما</a>
            </li>
            <li className="scroll-to-section">
              <a href="#pricing">تعرفه ها</a>
            </li>
            <li className="scroll-to-section">
              <a href="#">تماس با ما</a>
            </li>
          </ul>
          <a className="menu-trigger">
            <span>منو</span>
          </a>
          {/* Menu End */}
        </nav>
      </div>
    </div>
  </div>
</div>

  )
}

export default AboutHeader