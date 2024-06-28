import React from "react";

const BlogNew = () => {
  return (
    <section className="blog_news pb-120 position-relative z-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="heading__content d-flex row-gap-7 gap-20 flex-wrap justify-content-between align-items-center mb-10 mb-lg-15 ">
            <div className="heading__part">
              <span className="heading s1-color fs-five mb-5">Blog</span>
              <h3>News & Analysis</h3>
            </div>
            <a
              href="blog.html"
              className="cmn-btn link fs-six-up  gap-2 gap-lg-3 align-items-center"
            >
              {" "}
              Learn more <i className="ti ti-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row gy-6">
          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg rounded-3 overflow-hidden">
              <div className="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news.png"
                  alt="Image"
                  className="w-100"
                />
                <a
                  href="#"
                  className="border-color-s1 nw1-color fs-seven rounded-2 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  News
                </a>
              </div>
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 className="mb-4 mb-lg-5">
                    Trading Psychology: Mastering Your Mind for Profit
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex row-gap-0 flex-wrap gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                  Trading in financial markets involves a wide employ to make
                  informed decisions.
                </p>
                <a
                  href="blog-details.html"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  {" "}
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg rounded-3 overflow-hidden">
              <div className="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news2.png"
                  alt="Image"
                  className="w-100"
                />
                <a
                  href="#"
                  className="border-color-s1 nw1-color fs-seven rounded-2 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  Features
                </a>
              </div>
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 className="mb-4 mb-lg-5">
                    Trading Pitfalls Common Mistakes and How to Avoid Them...
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                  Trading in financial markets involves a wide employ to make
                  informed decisions.
                </p>
                <a
                  href="blog-details.html"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  {" "}
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg rounded-3 overflow-hidden">
              <div className="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news3.png"
                  alt="Image"
                  className="w-100"
                />
                <a
                  href="#"
                  className="border-color-s1 nw1-color fs-seven rounded-2 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  News
                </a>
              </div>
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 className="mb-4 mb-lg-5">
                    Trading Platforms: Tools for Success in Financial Markets
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                  Trading in financial markets involves a wide employ to make
                  informed decisions.
                </p>
                <a
                  href="blog-details.html"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  {" "}
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNew;
