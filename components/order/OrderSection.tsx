import React, { FC, useState } from 'react'
import OrderInputs from './OrderInputs'



const OrderSection:FC = () => {
  const [activeSection, setActiveSection] = useState<React.ReactNode>("real-representative")
  return (
    <>
    <div className="section section-order">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div
          className="section-heading  wow fadeInDown text-center"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <h4>
            ثبت <em>سفارش محصول</em> در سریع ترین زمان ممکن{" "}
          </h4>
          <p>
            کاربر گرامی ؛ شما می توانید یکی از پنل های ذیل را با توجه به نیاز و
            فعالیت مورد نظرتان انتخاب کنید و سفارش دهید.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div
        className="col-lg-10 offset-lg-1 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1.5s"
      >
        <nav className="position-relative">
          <div className="nav nav-tabs nav-order" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-real-representative-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-real-representative"
              type="button"
              role="tab"
              aria-controls="nav-real-representative"
              aria-selected="true"
              onClick={() => setActiveSection("real-representative")}
            >
              نماینده حقیقی بیمه
            </button>
            <button
              className="nav-link"
              id="nav-legal-representative-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-legal-representative"
              type="button"
              role="tab"
              aria-controls="nav-legal-representative"
              aria-selected="false"
              onClick={() => setActiveSection("legal-representative")}

            >
              نماینده حقوقی بیمه
            </button>
            <button
              className="nav-link"
              id="nav-broker-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-broker"
              type="button"
              role="tab"
              aria-controls="nav-broker"
              aria-selected="false"
              onClick={() => setActiveSection("broker")}
            >
              کارگزار بیمه
            </button>
            <button
              className="nav-link"
              id="nav-company-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-company"
              type="button"
              role="tab"
              aria-controls="nav-company"
              aria-selected="false"
              onClick={() => setActiveSection("company")}

            >
              شرکت کارگزاری بیمه
            </button>
            <button
              className="nav-link"
              id="nav-other-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-other"
              type="button"
              role="tab"
              aria-controls="nav-other"
              aria-selected="false"
              onClick={() => setActiveSection("other")}

            >
              سایر
            </button>
          </div>
        </nav>
        <OrderInputs activeSection={activeSection} />
        <div className="text-center mt-3">
          <button
            className="btn-sub-order"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalOrder"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>

  )
}

export default OrderSection