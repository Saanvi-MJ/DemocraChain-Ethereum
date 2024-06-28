import React, { useState, useEffect, useContext } from "react";

//INTERNAL INPORT
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  HeroSection,
  WhyVote,
  Blog,
  Provide,
  Trust,
  Vote,
} from "../Components/index";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const index = () => {
  const [initialData, setInitialData] = useState();
  const [higest, setHigest] = useState();

  const {
    connectWallet,
    address,
    setAddress,
    HIGHEST_VOTED_CANDIDATE,
    WINNER,
    INITIAL_CONTRACT_DATA,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      const items = await HIGHEST_VOTED_CANDIDATE();
      const initialData = await INITIAL_CONTRACT_DATA();

      setHigest(items);
      setInitialData(initialData);
      console.log(items);
      console.log(initialData);
    };

    fetchData();
  }, []);
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <HeroSection initialData={initialData} higest={higest} />
      <WhyVote />
      <Provide />
      <Vote />
      <Trust />
      <Blog />
      <Footer />
    </>
  );
};

export default index;
