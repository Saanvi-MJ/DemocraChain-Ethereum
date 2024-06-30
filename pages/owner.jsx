import React, { useEffect, useState, useContext } from "react";

import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";

import Input from "../Components/Global/Input";
import Upload from "../Components/Global/Upload";
import UploadImg from "../Components/Global/UploadImg";
import Preview from "../Components/Global/Preview";
import PreviewImg from "../Components/Global/PreviewImg";
import Loader from "../Components/Global/Loader";
import PopUp from "../Components/Global/PopUp";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const voter = () => {
  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    OWNER_ADDRESS,
    VOTING_DAPP,
    checkIfWalletIsConnected,
    REGISTER_VOTER,
    CHANGE_OWNER,
    RESET_CONTRACT,
    SET_VOTING_PREIOD,
  } = useContext(VOTING_DAPP_CONTEXT);

  ///VOTER ADDRESS
  const [currentAddress, setCurrentAddress] = useState();

  const [voteTime, setVoteTime] = useState({
    startTime: "",
    endTime: "",
  });

  const [changeOwner, setChangeOwner] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const address = await checkIfWalletIsConnected();
      setCurrentAddress(address);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <Preloader /> */}
      <ScrollToTop />
      <Cursor />

      <section className="sign nb4-bg h-100 d-flex align-items-center position-relative z-0">
        <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
          <img
            src="assets/images/star.png"
            alt="vector"
            className="position-absolute push_animat"
          />
        </div>
        <div className="container ">
          <div className="row align-items-center justify-content-center justify-content-xl-start">
            <div className="col-12 col-sm-10 col-md-6">
              <div className="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
                <h1 className="display-one">Welcome Back Admin!</h1>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto mx-auto">
              <div className="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div className="head_part">
                  <a href="/">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 className="mt-5 mt-lg-6">Import Contract Functions </h5>
                </div>

                {currentAddress == OWNER_ADDRESS.toLowerCase() && (
                  <div
                    autocomplete="off"
                    id="frmContactus"
                    className="contact__form mt-8 mt-lg-10 text-start"
                  >
                    <div className="d-flex flex-column gap-5 gap-lg-6 ">
                      <Input
                        name={"Start Time"}
                        placeholder={"startTime"}
                        type={"date"}
                        handleClick={(e) =>
                          setVoteTime({
                            ...voteTime,
                            startTime: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"End Time"}
                        placeholder={"endTime"}
                        type={"date"}
                        handleClick={(e) =>
                          setVoteTime({
                            ...voteTime,
                            endTime: e.target.value,
                          })
                        }
                      />
                      <div>
                        <button
                          className="cmn-btn py-3 px-5 px-lg-6 w-100 d-center"
                          onClick={() => SET_VOTING_PREIOD(voteTime)}
                        >
                          Set Voting Period
                        </button>
                      </div>
                      <div className="mt-lg-8"></div>
                      <Input
                        name={"New Address"}
                        placeholder={"new address"}
                        type={"text"}
                        handleClick={(e) => setChangeOwner(e.target.value)}
                      />
                      <div>
                        <button
                          className="cmn-btn py-3 px-5 px-lg-6 w-100 d-center"
                          onClick={() => CHANGE_OWNER(changeOwner)}
                        >
                          Change Owner
                        </button>
                      </div>
                    </div>

                    <div className=" mt-7 mt-lg-16">
                      <button
                        className="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                        onClick={() => RESET_CONTRACT()}
                      >
                        Reset Contract
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {loader && <Loader />}
      </section>
    </>
  );
};

export default voter;
