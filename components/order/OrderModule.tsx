import React, { FC } from 'react'

const OrderModule:FC = () => {
  return (
    <div
  className="modal fade"
  id="ModalOrder"
  tabIndex={-1}
  aria-labelledby="ModalOrderLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content modal-order-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalOrderLabel">
          تایید کد پیامک
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <section className="input-content">
          <div className="input-content-wrap">
            <div className="inputbox">
              <div className="inputbox-title">کد پیامک</div>
              <div className="inputbox-content">
                <input
                  id="payamak"
                  type="number"
                  className=""
                  required
                  style={{ fontSize: "1.5rem" }}
                />
                <label htmlFor="payamak">کد ارسال شده را وارد نمایید</label>
                <span className="underline" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">
          تایید
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderModule