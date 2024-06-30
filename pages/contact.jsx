import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Contact,
} from "../components/index";

const contact = () => {
  return (
    <>
      {/* <Preloader /> */}
      <ScrollToTop />
      <Cursor />
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default contact;
