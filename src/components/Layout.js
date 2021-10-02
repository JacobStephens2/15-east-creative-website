/* eslint-disable quotes */
import React from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import "../css/style.css";

const Layout = (props) => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  </>
);

export default Layout;
