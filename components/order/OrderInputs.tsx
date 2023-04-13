import React, { FC, ReactComponentElement, ReactNode } from 'react'

export interface AppProps {
  activeSection?: string;
}

const OrderInputs:any = ({activeSection} : AppProps) => {

 switch(activeSection){
  case "real-representative":
  return(
    
    <div className="tab-content tab-content-order" style={{ zIndex: "5"}} id="nav-tabContent">
    <div
    className="tab-pane fade show active"
    id="nav-real-representative"
    role="tabpanel"
    aria-labelledby="nav-real-representative-tab"
  >
    <div className="row">
      <div className="col-lg-6">
        <section className="input-content">
          <div className="input-content-wrap">
            <div className="inputbox">
              <div className="inputbox-title">نام شرکت بیمه</div>
              <div className="inputbox-content">
                <select
                  className="inputbox-select"
                  name="insurance"
                  id="insurance"
                >
                  <option value="">نام شرکت بیمه</option>
                  <option value="dana">بیمه دانا</option>
                  <option value="parsian">بیمه پارسیان</option>
                  <option value="iran">بیمه ایران</option>
                </select>
              </div>
            </div>
            <div className="inputbox">
              <div className="inputbox-title">نام و نام خانوادگی</div>
              <div className="inputbox-content">
                <input id="fullname" type="text" required />
                <label htmlFor="fullname">نام و نام خانوادگی</label>
                <span className="underline" />
              </div>
            </div>
            <div className="inputbox">
              <div className="inputbox-title">تلفن ثابت</div>
              <div className="inputbox-content">
                <input id="phone" type="number" required />
                <label htmlFor="phone">تلفن ثابت</label>
                <span className="underline" />
              </div>
            </div>
            <div className="inputbox">
              <div className="inputbox-title">استان</div>
              <div className="inputbox-content">
                <select
                  className="inputbox-select"
                  name="state"
                  id="state"
                >
                  <option value="">استان</option>
                  <option value="tehran">تهران</option>
                  <option value="mazandaran">مازندران</option>
                  <option value="markazi">مرکزی</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-lg-6">
        <section className="input-content">
          <div className="input-content-wrap">
            <div className="inputbox">
              <div className="inputbox-title">کد نمایندگی</div>
              <div className="inputbox-content">
                <input
                  id="RepresentationCode"
                  type="number"
                  required
                />
                <label htmlFor="RepresentationCode">کد نمایندگی</label>
                <span className="underline" />
              </div>
            </div>
            <div className="inputbox">
              <div className="inputbox-title">تلفن همراه</div>
              <div className="inputbox-content">
                <input id="CellularPhone" type="number" required />
                <label htmlFor="CellularPhone">تلفن همراه</label>
                <span className="underline" />
              </div>
            </div>
            <div className="inputbox">
              <div className="inputbox-title">ایمیل</div>
              <div className="inputbox-content">
                <input id="Email" type="email" required />
                <label htmlFor="Email">example@gmail.com</label>
                <span className="underline" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-lg-12">
        <section
          className="input-content"
          style={{ padding: "0 12px", marginTop: "-50px" }}
        >
          <div className="input-content-wrap">
            <div className="inputbox">
              <div className="inputbox-title">آدرس</div>
              <div className="inputbox-content">
                <input id="address" type="text" required />
                <label htmlFor="address">آدرس محل سکونت</label>
                <span className="underline" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  </div>
    )
    
  case "legal-representative" :
    return(
      <div className="tab-content tab-content-order" id="nav-tabContent">
      <div
      className="tab-pane fade"
      id="nav-legal-representative"
      role="tabpanel"
      aria-labelledby="nav-legal-representative-tab"
    >
      ...
    </div>
    </div>
      )

    case "broker" :
      return(
        <div className="tab-content tab-content-order" id="nav-tabContent">
        <div
        className="tab-pane fade"
        id="nav-broker"
        role="tabpanel"
        aria-labelledby="nav-broker-tab"
      >
        ...
      </div>
      </div>
        )

    case "company" :
      return(
        <div className="tab-content tab-content-order" id="nav-tabContent">
        <div
        className="tab-pane fade"
        id="nav-company"
        role="tabpanel"
        aria-labelledby="nav-company-tab"
      >
        ...
      </div>
      </div>
        )

      case "other" :
        return(
          <div className="tab-content tab-content-order" id="nav-tabContent">
          <div
            className="tab-pane fade"
            id="nav-other"
            role="tabpanel"
            aria-labelledby="nav-other-tab"
          >
            ...
          </div>
          </div>
          )
}

}

export default OrderInputs