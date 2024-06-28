import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial p1-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star.png"
          alt="vector"
          className="position-absolute push_animat"
        />
        <img
          src="assets/images/vector2.png"
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
        />
        <img
          src="assets/images/sun.png"
          alt="vector"
          className="position-absolute push_animat d-none d-xxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content alt-color mb-10 mb-lg-15 text-center">
              <span className="heading fs-five mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper common-slider1 cus-rounded-1 d-center align-items-end align-items-xxl-center ">
              <div className="swiper-wrapper">
                <div className="swiper-slide cus-rounded-1 overflow-hidden cus-rounded-1 overflow-hidden">
                  <div className="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div className="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author.png"
                        className="max-xxl-un "
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial__content p-4 px-lg-7 px-xxl-8 py-lg-6 py-xxl-7">
                      <div className="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-4">Brooklyn Simmons</h5>
                        <span className="fs-seven fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide cus-rounded-1 overflow-hidden">
                  <div className="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div className="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author2.png"
                        className="max-xxl-un "
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial__content p-4 p-lg-7 p-xxl-8">
                      <div className="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-4">Chris Moore</h5>
                        <span className="fs-seven fw_500 mt-2">
                          President of Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide cus-rounded-1 overflow-hidden">
                  <div className="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div className="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author3.png"
                        className="max-xxl-un"
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial__content p-4 p-lg-7 p-xxl-8">
                      <div className="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-4">Balogh Imre</h5>
                        <span className="fs-seven fw_500 mt-2">
                          Account Executive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-btn position-absolute justify-content-end d-center justify-content-xxl-between gap-2 w-100 pb-3 pb-sm-5 pb-xxl-0 px-8 px-sm-18 px-xl-12 px-xxl-18">
                <button
                  type="button"
                  aria-label="Slide Prev"
                  className="ara-prev slide-button cmn-btn2 d-center"
                >
                  <i className="ti ti-arrow-narrow-right"></i>
                </button>
                <button
                  type="button"
                  aria-label="Slide Next"
                  className="ara-next slide-button cmn-btn2 d-center"
                >
                  <i className="ti ti-arrow-narrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
