import React from "react";

const Provide = () => {
  return (
    <section className="provide-world bg nb4-bg pt-120 pb-120  position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <img
          src="assets/images/button.png"
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading p1-color fs-five mb-5">
                We Provide World’s
              </span>
              <h3 className="mb-5 mb-lg-6">
                Join a club of more than <span className="s1-color">480,000</span>{" "}
                traders
              </h3>
              <p className="fs-six-up mx-ch mx-auto">
                Trading is the art and science of buying and selling financial
                instruments, such as stocks bonds currencies commodities
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-award-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Best Reputation</h4>
              <p>
                transformed the trading landscape. Online trading platforms and
                mobile apps have made it easier than ever for individuals
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-users fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">480,000+ Clients</h4>
              <p>
                One of the fundamental principles of trading is risk management.
                Successful traders carefully manage their capital,
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-shield-check-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Trusted and Secure</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
