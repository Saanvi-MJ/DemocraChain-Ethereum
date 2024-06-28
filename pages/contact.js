import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Contact,
} from "../Components/index";

const contact = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default contact;
