import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import imgLop from "../Resources/undraw_investment_data_yfvt.svg";
import imtAbout from "../Resources/undraw_Business_decisions_re_84ag.svg";
import imtOurMission from "../Resources/undraw_Social_ideas_re_j5v4.svg";

export default function HomeSection() {
    return (
        <div>
            <Container className="d-flex align-items-center justify-content-around mt-5">
                <div className="d-flex flex-column align-items-center mr-3">
                    <h1 className="text-center">Programa de oportunidades profesionales</h1>
                    <Button className="btn btn-primary btn-lg btn-block">Unirme</Button>
                    <p>¿Ya tienes cuenta?<Link> Iniciar Sesion</Link></p>
                </div>
                <img src={imgLop} width={800}/>
            </Container>
            <Container className="d-flex justify-content-around pt-5">
                <div className="w-25">
                    <h1>Sobre nosotros</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste nemo praesentium
                        repellat. Assumenda, harum, veniam? Amet consequatur cumque cupiditate minus molestias quaerat
                        voluptatum? Accusamus aut hic iste tempore temporibus!</p>
                </div>
                <div>
                    <img src={imtAbout} width={450}/>
                </div>
            </Container>
            <Container className="d-flex justify-content-around pt-5 pb-5">
                <div>
                    <img src={imtOurMission} width={450}/>
                </div>
                <div className="w-25">
                    <h1>Nuestra mision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid consequuntur debitis
                        dolore ducimus eaque eius exercitationem ipsam ipsum labore laudantium neque nisi omnis quam
                        quia quidem quo, repudiandae?</p>
                </div>

            </Container>
        </div>
    );
}