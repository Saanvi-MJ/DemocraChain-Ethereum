import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Support,
} from "../Components/index";
const support = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Support />
      <Footer />
    </>
  );
};

export default support;
