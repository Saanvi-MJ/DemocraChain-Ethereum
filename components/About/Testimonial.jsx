import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial-secondary te pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex"
        />
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five s1-color mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper testimonial_swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author10.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Brooklyn Simmons</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author11.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Cody Fisher</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Account Executive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author12.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Wade Warren</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Medical Assistant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author13.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Esther Howard</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author14.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Brooklyn Simmons</h5>
                        <span className="fs-eight fw_500 mt-2">
                          President of Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination mt-8 mt-md-10 mt-lg-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
