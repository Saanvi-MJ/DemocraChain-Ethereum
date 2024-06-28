import React, { useEffect, useState, useContext } from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Team,
} from "../Components/index";
//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const registerVoters = () => {
  const [candidates, setCandidates] = useState();

  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    GET_REGISTER_VOTERS,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      const items = await GET_REGISTER_VOTERS();
      setCandidates(items);
      console.log(items);
    };

    fetchData();
  }, []);
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Team candidates={candidates} path={"voter"} />
      <Footer />
    </>
  );
};

export default registerVoters;
