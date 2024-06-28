import React, { useEffect, useState, useContext } from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Team,
} from "../Components/index";
import Loader from "../Components/Global/Loader";
//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const registerCandidate = () => {
  const [candidates, setCandidates] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();
  const [user, setUser] = useState();

  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    GET_REGISTER_CANDIDATES,
    GIVE_VOTE,
    checkVote,
    ALL_VOTERS_VOTED,
    INITIAL_CONTRACT_DATA,
    GET_SINGLE_VOTER,
    address,
    checkIfWalletIsConnected,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      const items = await GET_REGISTER_CANDIDATES();
      setCandidates(items);

      const allVotedVoter = await ALL_VOTERS_VOTED();

      const votingStatus = await INITIAL_CONTRACT_DATA();
      setVotingTime(votingStatus);

      const nowInMilliseconds = Date.now();
      const nowInSeconds = Math.floor(nowInMilliseconds / 1000);
      setCurrentVotingTime(nowInSeconds);

      const address = await checkIfWalletIsConnected();

      if (address) {
        const user = await GET_SINGLE_VOTER(address);
        setUser(user);
        console.log(user);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Team
        candidates={candidates}
        path={"candidate"}
        GIVE_VOTE={GIVE_VOTE}
        checkVote={checkVote}
        votingTime={votingTime}
        currentVotingTime={currentVotingTime}
        user={user}
      />
      {loader && <Loader />}
      <Footer />
    </>
  );
};

export default registerCandidate;
