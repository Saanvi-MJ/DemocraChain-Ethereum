import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";
const roadmap = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <RoadMap />
      <Footer />
    </>
  );
};

export default roadmap;
