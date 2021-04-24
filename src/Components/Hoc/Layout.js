import React from "react";
import Aux from "./_Aux";
import NavbarContainer from "../../Container/NavbarContainer";
import FooterContainer from "../../Container/FooterContainer";

const Layout = (props) => {
    const location = window.location.pathname;
  return (
    <div>
        <Aux>
            <NavbarContainer />

            <> {props.children} </>
            <div className='footer' style={{position: location==='/login' ? 'Fixed':'Static', bottom: 0, width: '100%'}}>
                <FooterContainer />
            </div>
        </Aux>
    </div>
  );
};

export default Layout;
