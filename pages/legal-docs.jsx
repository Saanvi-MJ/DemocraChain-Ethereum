import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  LegalDocs,
} from "../Components/index";
const legalDocs = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <LegalDocs />
      <Footer />
    </>
  );
};

export default legalDocs;
