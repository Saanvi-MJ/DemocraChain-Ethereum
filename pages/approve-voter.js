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

  // Function to filter users by status
  function filterUsersByStatus(users, status) {
    return users?.filter((user) => user.status === status);
  }

  useEffect(() => {
    const fetchData = async () => {
      const items = await GET_REGISTER_VOTERS();

      const approvedUsers = filterUsersByStatus(items, 1);
      setCandidates(approvedUsers);
      console.log(approvedUsers);
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
