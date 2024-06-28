import React from "react";

const BlogCard = () => {
  return (
    <section className="blog-details overflow-visible sidebar-section  pt-120 pb-120">
      <div className="container">
        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-7 col-xl-8">
            <div className="d-lg-none">
              <button className="button sidebar_toggler_btn mb-4 d-flex align-items-center gap-2">
                <i className="ti ti-layout-sidebar-left-collapse"></i>
                <span>Sidebar Toggler</span>
              </button>
            </div>
            <div className="d-flex flex-column gap-10 gap-lg-15 ">
              <div className="blog__card">
                <div className="blog__thumbs position-relative">
                  <img
                    src="assets/images/blog_details.png"
                    alt="Image"
                    className="w-100 cus-rounded-1"
                  />
                </div>
                <div className="blog_news__content mt-5">
                  <div className="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-3">
                    August 17,2023 <span>|</span> Written by jason Turner
                  </div>
                  <h2 className="mb-5">
                    Trading Pitfalls Common Mistakes and How to Avoid Them...
                  </h2>
                  <p className=" mb-7 mb-lg-8">
                    rading can be a rewarding endeavor, but it's not without its
                    challenges. Even experienced traders can fall victim to
                    common mistakes that can negatively impact their portfolios.
                    In this blog post, we'll highlight ten common trading
                    mistakes and provide insights on how to avoid them to
                    enhance your chances of success in the financial markets.
                  </p>
                  <div className="border-start border-color border-4 ps-4 ps-lg-5 py-1">
                    <em className="fs-five fw_500 nw1-color">
                      One of the most prevalent mistakes is trading without a
                      well-defined plan. Trading without clear objectives, entry
                      and exit strategies, and risk management guidelines can
                      lead to impulsive decisions and losses.
                    </em>
                  </div>
                </div>
              </div>
              <div className="blog-details__inner">
                <h3>Navigating the Trading Jungle A Beginner's Guide</h3>
                <p className="mt-3">
                  Before you venture into the trading world, it's crucial to
                  grasp the fundamentals. Trading involves the buying and
                  selling of financial assets, such as stocks, currencies,
                  commodities, or cryptocurrencies, with the goal of making a
                  profit.{" "}
                </p>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <img
                      src="assets/images/blog_details_inner.png"
                      className="cus-rounded"
                      alt="Images"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/blog_details_inner2.png"
                      className="cus-rounded"
                      alt="Images"
                    />
                  </div>
                </div>
                <p className="mt-5">
                  One of the most prevalent mistakes is trading without a
                  well-defined plan. Trading without clear objectives and risk
                  management guidelines can lead to impulsive decisions and
                  losses.
                </p>
              </div>
              <div className="tag-area border-top border-bottom border-color third py-5 d-flex justify-content-between gap-10 flex-wrap row-gap-4">
                <div className="tag d-center gap-5 gap-lg-6">
                  <span className="heading fs-four">Tags</span>
                  <div className="tag-content d-flex gap-3 ">
                    <a
                      href="#"
                      className="cmn-btn tag_btn active cus-rounded-3 py-2 px-4"
                    >
                      Trading
                    </a>
                    <a href="#" className="cmn-btn tag_btn cus-rounded-3 py-2 px-4">
                      Investor
                    </a>
                  </div>
                </div>
                <div className="tag d-center gap-5 gap-lg-6">
                  <span className="heading fs-four">Share</span>
                  <ul className="social-area d-center gap-2 gap-md-3">
                    <li>
                      <a className="d-center cus-rounded-1 fs-four" href="#">
                        <i className="ti ti-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="d-center cus-rounded-1 fs-four" href="#">
                        <i className="ti ti-brand-twitch"></i>
                      </a>
                    </li>
                    <li>
                      <a className="d-center cus-rounded-1 fs-four" href="#">
                        <i className="ti ti-brand-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="d-center cus-rounded-1 fs-four" href="#">
                        <i className="ti ti-brand-discord-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a className="d-center cus-rounded-1 fs-four" href="#">
                        <i className="ti ti-brand-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comments-area d-flex gap-7 gap-lg-8 flex-column">
                <h4 className="mb-2">
                  <span>02</span> Comment
                </h4>
                <div className="content-part d-flex flex-column flex-sm-row gap-4 gap-lg-6">
                  <div className="author__thumbs">
                    <img
                      src="assets/images/comment_author.png"
                      className="rounded-circle max-un"
                      alt="image"
                    />
                  </div>
                  <div className="author__content">
                    <div className="d-flex justify-content-between gap-10">
                      <div className="author__info">
                        <span className="fs-five fw_500 nw1-color">
                          Marvin McKinney
                        </span>
                        <p className="author__submit-time fs-seven mt-1">
                          October 07,2023
                        </p>
                      </div>
                      <div className="feedback__content">
                        <button className="reply-btn gap-2 d-center fs-six-up fw_500 nw1-color">
                          <i className="ti ti-message-dots fs-four p1-color"></i>
                          Reply
                        </button>
                      </div>
                    </div>
                    <p className="mt-3">
                      Trading is not just about making money; it's about
                      personal growth. It challenges you to become a better
                      decision-maker, strategist, and disciplined individual.
                    </p>
                    <form className="reply-form">
                      <div className="input-area d-flex p-3 px-lg-5 gap-2 cus-rounded-1 mt-4">
                        <input type="text" placeholder="Search" required />
                        <button
                          type="submit"
                          className="icon_btn d-center p1-bg rounded-circle "
                        >
                          <i className="ti ti-search fs-five nb4-color"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="content-part d-flex flex-column flex-sm-row gap-4 gap-lg-6">
                  <div className="author__thumbs">
                    <img
                      src="assets/images/comment_author2.png"
                      className="rounded-circle max-un"
                      alt="image"
                    />
                  </div>
                  <div className="author__content">
                    <div className="d-flex justify-content-between gap-10">
                      <div className="author__info">
                        <span className="fs-five fw_500 nw1-color">Robert Fox</span>
                        <p className="author__submit-time fs-seven mt-1">
                          October 05,2023
                        </p>
                      </div>
                      <div className="feedback__content">
                        <button className="reply-btn gap-2 d-center fs-six-up fw_500 nw1-color">
                          <i className="ti ti-message-dots fs-four p1-color"></i>
                          Reply
                        </button>
                      </div>
                    </div>
                    <p className="mt-3">
                      Trading is not just about making money; it's about
                      personal growth. It challenges you to become a better
                      decision-maker, strategist, and disciplined individual.
                    </p>
                    <form className="reply-form">
                      <div className="input-area d-flex p-3 px-lg-5 gap-2 cus-rounded-1 mt-4">
                        <input type="text" placeholder="Search" required />
                        <button
                          type="submit"
                          className="icon_btn d-center p1-bg rounded-circle "
                        >
                          <i className="ti ti-search fs-five nb4-color"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="comments-form cus-rounded-1 nb3-bg">
                <form
                  autocomplete="off"
                  id="frmContactus"
                  className="message__form p-4 p-lg-8"
                >
                  <h6 className="message__title mb-8 mb-lg-10">Leave A Comment</h6>
                  <div className="d-flex gap-7 gap-lg-8 flex-column">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input">
                          <label className="label fw_500 nw1-color mb-4" for="name">
                            Name
                          </label>
                          <input
                            type="text"
                            className="fs-seven"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input">
                          <label
                            className="label fw_500 nw1-color mb-4"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="fs-seven"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-single">
                      <label className="label fw_500 nw1-color mb-4" for="message">
                        Message
                      </label>
                      <textarea
                        className="fs-seven"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Enter Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <span id="msg"></span>
                  <button
                    type="submit"
                    className="cmn-btn py-3 px-5 px-lg-6 mt-8 mt-lg-10 d-flex ms-auto"
                    name="submit"
                    id="submit"
                  >
                    Submit Comments<i className="bi bi-arrow-up-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 ">
            <div className="sidebar nb4-bg cus-scrollbar sidebar-lg-section d-flex flex-column gap-5 gap-lg-6">
              <div className="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 className="mb-4">Search Here</h5>
                <form className="sidebar-search">
                  <div className="input-area d-flex p-3 gap-2 cus-rounded-1">
                    <input type="text" placeholder="Search" required />
                    <button
                      type="submit"
                      className="icon_btn d-center p1-bg rounded-circle"
                    >
                      <i className="ti ti-search fs-five nb4-color"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 className="pb-5 mb-5 border-bottom border-color four">
                  Category
                </h5>
                <ul className="category d-flex flex-column gap-4">
                  <li>
                    <a
                      href="blog.html"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Trading Strategies</span> <span>02</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Technical Analysis</span> <span>01</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Fundamental Analysis</span> <span>07</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Risk Management</span> <span>04</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Cryptocurrency Trading</span> <span>03</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 className="pb-5 mb-5 border-bottom border-color four">
                  Recent Post
                </h5>
                <div className="recent-posts d-flex flex-column gap-5">
                  <div className="recent-posts__part d-flex gap-3 align-items-center">
                    <div className="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog.png"
                        className="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div className="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>The Psychology of Trading</h5>
                      </a>
                      <p className="author__submit-time mt-3">October 07,2023</p>
                    </div>
                  </div>
                  <div className="recent-posts__part d-flex gap-3 align-items-center">
                    <div className="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog2.png"
                        className="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div className="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>The Crypto Revolution</h5>
                      </a>
                      <p className="author__submit-time mt-3">September 20,2023</p>
                    </div>
                  </div>
                  <div className="recent-posts__part d-flex gap-3 align-items-center">
                    <div className="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog3.png"
                        className="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div className="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>Building Your Trading Plan</h5>
                      </a>
                      <p className="author__submit-time mt-3">August 28,2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 className="pb-5 mb-5 border-bottom border-color four">
                  Populer Tag
                </h5>
                <div className="tag-area">
                  <div className="tag d-center gap-5 gap-lg-6">
                    <div className="tag-content d-flex gap-3 flex-wrap">
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn active cus-rounded-3 py-2 px-4"
                      >
                        Trading
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Analysis
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Research
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Mentoring
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Strategy
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Planning
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Business
                      </a>
                      <a
                        href="blog.html"
                        className="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Leadership
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
