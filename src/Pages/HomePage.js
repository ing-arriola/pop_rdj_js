import React from "react";
import NavbarContainer from "../Container/NavbarContainer";
import {Button, Container} from "react-bootstrap";
import imgLop from "../Resources/undraw_investment_data_yfvt.svg"
import imtAbout from "../Resources/undraw_Business_decisions_re_84ag.svg"
import imtOurMission from "../Resources/undraw_Social_ideas_re_j5v4.svg"

import {Link} from "react-router-dom";
import FooterContainer from "../Container/FooterContainer";
import HomeSection from "../Container/HomeSection";

const HomePage = () => {
    return (
        <>
            <div>
                <NavbarContainer/>
                <HomeSection/>
                <FooterContainer/>
            </div>
        </>
    );
};

export default HomePage;
