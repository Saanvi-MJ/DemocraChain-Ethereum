import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  TermConditions,
} from "../Components/index";

const termsConditions = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <TermConditions />
      <Footer />
    </>
  );
};

export default termsConditions;
