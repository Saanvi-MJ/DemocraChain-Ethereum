import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Privacy,
} from "../Components/index";

const privacyPolicy = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Privacy />
      <Footer />
    </>
  );
};

export default privacyPolicy;
