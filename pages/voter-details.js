import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  TeamDetail,
} from "../Components/index";
import Loader from "../Components/Global/Loader";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const voterDetails = () => {
  const router = useRouter();
  //VOTER ADDRESS
  const [currentAddress, setCurrentAddress] = useState();
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const [candidate, setCandidate] = useState();

  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    checkIfWalletIsConnected,
    GET_SINGLE_VOTER,
    APPROVE_VOTER,
    address,
    OWNER_ADDRESS,
    REJECT_VOTER,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;

      const items = await GET_SINGLE_VOTER(router?.query.address);
      setCandidate(items);
      console.log(items);
    };
    //
    fetchData();
  }, [router.isReady]);

  const approveVoter = async (address, message) => {
    await APPROVE_VOTER(address, message);
  };
  const rejectVoter = async (address, message) => {
    await REJECT_VOTER(address, message);
  };
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <TeamDetail
        candidate={candidate}
        path={"voter"}
        handleClickApprove={approveVoter}
        handleClickReject={rejectVoter}
        address={address}
        OWNER_ADDRESS={OWNER_ADDRESS}
      />
      {loader && <Loader />}
      <Footer />
    </>
  );
};

export default voterDetails;
