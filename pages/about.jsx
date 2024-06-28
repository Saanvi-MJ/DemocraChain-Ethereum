import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  About,
} from "../Components/index";
const about = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <About />
      <Footer />
    </>
  );
};

export default about;
