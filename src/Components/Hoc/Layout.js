import React from "react";
import Aux from "./_Aux";
import NavbarContainer from "../../Container/NavbarContainer";
import FooterContainer from "../../Container/FooterContainer";

const Layout = (props) => {
  return (
    <div style={{position: "relative", paddingBottom: 270}}>
        <Aux>
            <NavbarContainer />

            <> {props.children} </>
            <div style={{position: "absolute", bottom: 0, width: "100%"}}>
                <FooterContainer />
            </div>
        </Aux>
    </div>
  );
};

export default Layout;
