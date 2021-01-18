import React from "react";
import Aux from "./Aux";
import NavbarContainer from "../../Container/NavbarContainer";
import FooterContainer from "../../Container/FooterContainer";

const Layout = (props) => {
  return (
    <Aux>
      <NavbarContainer />

      <> {props.children} </>
      <FooterContainer />
    </Aux>
  );
};

export default Layout;
