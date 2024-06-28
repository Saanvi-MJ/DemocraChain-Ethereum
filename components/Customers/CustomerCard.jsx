import React from "react";

const CustomerCard = () => {
  return (
    <section className="customers position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector6.png"
          alt="vector"
          className="position-absolute rotate d-none d-xxxl-flex start-0 top-0 pt-20 mt-5 ps-20 ms-5"
        />
        <img
          src="assets/images/vector8.png"
          alt="vector"
          className="position-absolute bottom-0 pb-20 mb-4 d-none d-xxl-flex"
        />
        <img
          src="assets/images/earth.png"
          alt="vector"
          className="position-absolute d-none d-xl-flex bottom-0 end-0 rotate"
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center align-items-xxl-end">
          <div className="col-lg-6 col-xxl-5 pb-0 pt-120 pb-lg-120">
            <div className="customers__content me-xxl-18">
              <h3 className="mb-4">We help our customers.</h3>
              <p className="mx-ch">
                The rise of cryptocurrencies has opened up new trading In this
                beginner's guide to cryptocurrency trading we demystify the
                world of digital currencies
              </p>
              <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Charts
                  trading
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Supreme
                  Authority
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Worldly
                  Power
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Global
                  Dominance
                </li>
              </ul>
              <div className="pt-7 pt-lg-8 mt-7 mt-lg-8 border-top border-color four">
                <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                  <div className="counter-part">
                    <span className="box_15 p1-bg rounded-circle d-center mb-5">
                      <i className="ti ti-send fs-four nb4-color"></i>
                    </span>
                    <div className="counters d-flex">
                      <span
                        className="odometer display-four"
                        data-odometer-final="35200"
                      >
                        0
                      </span>
                    </div>
                    <span className="mt-4">Investor engaged</span>
                  </div>
                  <div className="counter-part">
                    <span className="box_15 p1-bg rounded-circle d-center mb-5">
                      <i className="ti ti-user fs-four nb4-color"></i>
                    </span>
                    <div className="counters d-flex">
                      <span
                        className="odometer display-four"
                        data-odometer-final="4700"
                      >
                        0
                      </span>
                    </div>
                    <span className="mt-4">Business launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 col-xxl-6 ">
            <div className="customers__thumb">
              <img
                src="assets/images/customers.png"
                className="w-100 max-xxl-un cus-rounded-2"
                alt="video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCard;
