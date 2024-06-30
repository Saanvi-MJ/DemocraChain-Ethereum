import { useContext } from "react";
import Link from "next/link";

// IMPORTING CONTRACT DATA
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
      <div className="container d-center">
        <nav className="navbar a2-lg-bg py-5 p-lg-5 rounded-3 navbar-expand-lg w-100 justify-content-between">
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
            <Link href="/" className="navbar-brand m-0 p-0 d-flex align-items-center gap-5 gap-xl-5 me-2">
              <a>
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
            </Link>
          </div>
          <div className="nav_alt">
            <div className="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-lg-none">
              {address ? (
                <>
                  <div className="single-item">
                    <Link href="/voter">
                      <a className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color">
                        Voter <i className="ti ti-arrow-right fs-six-up"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="single-item">
                    <Link href="/candidate">
                      <a className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1">
                        Candidate <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                      </a>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="single-item">
                  <button
                    onClick={() => clickConnect()}
                    className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    Connect Wallet <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="collapse navbar-collapse justify-content-center" id="navbar-content">
            <ul className="navbar-nav gap-2 gap-lg-3 gap-xxl-8 align-self-center mx-auto mt-4 mt-lg-0">
              <li className="dropdown show-dropdown">
                <Link href="/">
                  <a className="dropdown-nav active">Home</a>
                </Link>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                >
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/register-candidate">
                      <a className="dropdown-item">All Candidate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/approve-candidate">
                      <a className="dropdown-item">Approve Candidate</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                >
                  Voter
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/register-voter">
                      <a className="dropdown-item">All Voters</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/approve-voter">
                      <a className="dropdown-item">Approve Voters</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-voters-voted">
                      <a className="dropdown-item">All Voted Voters</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {address == OWNER_ADDRESS?.toLowerCase() && (
                <li>
                  <Link href="/owner">
                    <a className="dropdown-item">Owner</a>
                  </Link>
                </li>
              )}
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                >
                  Resources
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/about">
                      <a className="dropdown-item">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-docs">
                      <a className="dropdown-item">Legal Docs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="dropdown-item">Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/roadmap">
                      <a className="dropdown-item">Roadmap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support">
                      <a className="dropdown-item">Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a className="dropdown-item">Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a className="dropdown-item">Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-none d-lg-flex">
            {address ? (
              <>
                <div className="single-item">
                  <Link href="/voter">
                    <a className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color">
                      Voter <i className="ti ti-arrow-right fs-six-up"></i>
                    </a>
                  </Link>
                </div>
                <div className="single-item">
                  <Link href="/candidate">
                    <a className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1">
                      Candidate <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                    </a>
                  </Link>
                </div>
              </>
            ) : (
              <div className="single-item">
                <button
                  onClick={() => clickConnect()}
                  className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                >
                  Connect Wallet <i className="ti ti-arrow-right fw-semibold fs-six-up"></i>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
