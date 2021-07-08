import React from "react";
import Aux from "./_Aux";
import NavbarContainer from "../../Container/NavbarContainer";
import FooterContainer from "../../Container/FooterContainer";

const Layout = (props) => {
  return (
    <div className='layout' style={{ height:"100vh", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
        <Aux>
            <NavbarContainer />

            <> {props.children} </>
            <div className='footer'>
                <FooterContainer />
            </div>
        </Aux>
    </div>
  );
};

export default Layout;
