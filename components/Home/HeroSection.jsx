import React from "react";

const HeroSection = ({ initialData, higest }) => {
  return (
    <section class="hero-section position-relative z-0 ">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/hero_vector.png"
          alt="vector"
          class="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX"
        />
      </div>
      <div class="container pt-20 mt-12 mt-lg-20">
        <div class="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center justify-content-lg-between align-items-center">
          <div class="col-lg-6 col-xxl-7">
            <div class="hero-card p1-xxl-bg pt-xl-20 pb-xl-20 position-relative">
              <div class="pt-xxl-10 pb-xxl-10">
                <div class="circle-text first d-center cus-z1 position-absolute end-0 top-0 d-none d-xxl-flex  me-lg-10 mt-lg-10">
                  <div class="text d-center">
                    <p class="fs-six">Innovate, Invest, Influence</p>
                  </div>
                  <img
                    src="assets/images/circle_star.png"
                    alt="star"
                    class="push_animat"
                  />
                </div>
                <span class="heading p1-max-xxl nb4-xxl-color fs-five mb-3">
                  Decentralized Voting
                </span>
                <h1 class="display-two nb4-xxl-color mb-5 mb-lg-6">
                  Vote For Prime Minister
                </h1>
                <p class="fs-six-up fw_500 nb4-xxl-color">
                  Now you can ellected your first prime minister through the
                  decentralized voting system
                </p>
                {initialData?.startDateN != 0 && initialData?.endDateN != 0 && (
                  <>
                    <span class="heading mt-3 p1-max-xxl nb4-xxl-color fs-five mb-3">
                      Starting: {initialData?.startDate}
                    </span>
                    <span class="heading p1-max-xxl nb4-xxl-color fs-five mb-3">
                      Ending: {initialData?.endDate}
                    </span>
                  </>
                )}

                <div class="d-inline-flex flex-wrap gap-4 gap-lg-10 align-items-center mt-8 mt-lg-10">
                  <a
                    href="/approve-candidate"
                    class="cmn-btn alt-xxl-bg fs-five nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6"
                  >
                    All Candidates <i class="ti ti-trending-up"></i>
                  </a>
                  {higest ? (
                    <a
                      href={`/candidate-details?address=${higest?.address}`}
                      class="cmn-btn link link-xxl-color fs-five  gap-2 gap-lg-3 align-items-center "
                    >
                      <i class="ti ti-arrow-narrow-right fs-four"></i>
                      Current Higest Voter
                    </a>
                  ) : (
                    <a
                      href="/register-voter"
                      class="cmn-btn link link-xxl-color fs-five  gap-2 gap-lg-3 align-items-center "
                    >
                      <i class="ti ti-arrow-narrow-right fs-four"></i> All
                      Voters
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-10 col-lg-6 col-xxl-5">
            <div class="hero-section__thumbs pb-xxl-10">
              <img
                src="assets/images/hero-image.png"
                class="max-auto max-xxl-un"
                alt="img"
              />
            </div>
          </div>
          <ul class="list_items col-12 d-flex row-gap-6 gap-lg-15 justify-content-between flex-wrap pt-2 pt-lg-15 pt-xl-2 pt-xxl-15 pb-15">
            <li class="d-flex gap-3 align-items-center">
              <span class="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <i class="ti ti-tools fs-three nb4-color"></i>
              </span>
              <h4 class="nw1-color">Register as Voter</h4>
            </li>
            <li class="d-flex gap-3 align-items-center">
              <span class="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <i class="ti ti-trending-up fs-three nb4-color"></i>
              </span>
              <h4 class="nw1-color"> Candidate</h4>
            </li>
            <li class="d-flex gap-3 align-items-center">
              <span class="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <i class="ti ti-broadcast fs-three nb4-color"></i>
              </span>
              <h4 class="nw1-color">Get Approvel</h4>
            </li>
            <li class="d-flex gap-3 align-items-center">
              <span class="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <i class="ti ti-percentage fs-three nb4-color"></i>
              </span>
              <h4 class="nw1-color">Give Vote</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
