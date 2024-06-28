import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Link from "./Link";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../../../context/context";
const Header = () => {
  const { connectWallet, address, setAddress, OWNER_ADDRESS } =
    useContext(VOTING_DAPP_CONTEXT);

  const clickConnect = async () => {
    const userAddress = await connectWallet();
    setAddress(userAddress);
  };

  return (
    <header className="header-section a2-bg-0 header-section--secondary header-menu w-100">
      <div className="container d-center ">
        <nav className="navbar a2-lg-bg py-5 p-lg-5 rounded-3 navbar-expand-lg w-100 justify-content-between ">
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler ms-4"
              type="button"
              data-bs-toggle="collapse"
              aria-label="Navbar Toggler"
              data-bs-target="#navbar-content"
              aria-expanded="true"
              id="nav-icon3"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a
              href="/"
              className="navbar-brand m-0 p-0 d-flex align-items-center gap-5 gap-xl-5 me-2"
            >
              <img
                src="assets/images/fav.png"
                className="logo small_logo d-sm-none"
                alt="logo"
              />
              <img
                src="assets/images/logo.png"
                className="logo d-none d-sm-flex"
                alt="logo"
              />
            </a>
          </div>
          <div className="nav_alt">
            <div className="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-lg-none">
              {address ? (
                <>
                  <div className="single-item">
                    <a
                      href="/voter"
                      className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                    >
                      {" "}
                      Voter <i className="ti ti-arrow-right fs-six-up"></i>
                    </a>
                  </div>
                  <div className="single-item">
                    <a
                      href="/candidate"
                      className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                    >
                      {" "}
                      Candidate{" "}
                      <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                    </a>
                  </div>
                </>
              ) : (
                <div className="single-item">
                  <a
                    onClick={() => clickConnect()}
                    className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    {" "}
                    Connect Wallet{" "}
                    <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbar-content"
          >
            <ul className="navbar-nav gap-2 gap-lg-3 gap-xxl-8  align-self-center mx-auto mt-4 mt-lg-0">
              <li className="dropdown show-dropdown">
                <a href="/" className=" dropdown-nav active">
                  home
                </a>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className=" dropdown-nav"
                >
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/register-candidate">
                      All Candidate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/approve-candidate">
                      Approve Candidate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className=" dropdown-nav"
                >
                  Voter
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/register-voter">
                      All Voters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/approve-voter">
                      Approve Voters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/all-voters-voted">
                      All Voted Voters
                    </a>
                  </li>
                </ul>
              </li>

              {address == OWNER_ADDRESS?.toLowerCase() && (
                <li>
                  <a className="dropdown-item" href="/owner">
                    Owner
                  </a>
                </li>
              )}
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className=" dropdown-nav"
                >
                  Resources
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/legal-docs">
                      legal docs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/roadmap">
                      roadmap
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/support">
                      support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/terms-conditions">
                      terms conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/privacy-policy">
                      privacy-policy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right-area position-relative  ms-0 d-center gap-1 gap-xl-4 d-none d-lg-flex">
            {address ? (
              <>
                <div className="single-item">
                  <a
                    href="/voter"
                    className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                  >
                    {" "}
                    Voter <i className="ti ti-arrow-right fs-six-up"></i>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    href="/candidate"
                    className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    {" "}
                    Candidate{" "}
                    <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                  </a>
                </div>
              </>
            ) : (
              <div className="single-item">
                <a
                  onClick={() => clickConnect()}
                  className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                >
                  {" "}
                  Connet Wallet{" "}
                  <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
