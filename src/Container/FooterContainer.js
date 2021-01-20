import React from "react";

export default function FooterContainer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Red de jovenes del futuro</h5>
                        <p>
                            Somos una organización ciudadana juvenil sin fines de lucro que trabaja ideas alineadas a
                            los Objetivos de Desarrollo Sostenible promulgados por la Organización de Naciones Unidas,
                            con el fin de mejorar la calidad de vida de las personas a través de programas enfocados en
                            ejes de acción como :educación, salud y medioambiente.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ml-auto">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="https://rdjfuturo.netlify.app/about/" target="_blank" className="text-dark">Pagina web</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Red-de-J%C3%B3venes-del-Futuro-101271765014839" target="_blank" className="text-dark">Facebook</a>
                            </li>
                            <li>
                                <a href="/" target="_blank" className="text-dark">Twitter</a>
                            </li>
                            <li>
                                <a href="/" target="_blank" className="text-dark">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-dark" href="https://rdjfuturo.netlify.app/">rdjfuturo.netlify.app/</a>
            </div>
        </footer>
    );
}
