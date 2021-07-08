import React from "react";
import {Container} from "react-bootstrap";


const AdminSettings = () => {
    return (
        <>
            <div>
                <Container className="pt-4">
                    <h3>Configuraciones</h3>
                    <hr/>
                    <div className="options">
                        <div className="d-flex justify-content-between">
                            <h5>Disponibilidad del registro para pasantes: </h5>
                            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Opciones</label>
                            <select className="custom-select mr-sm-2" style={{width:"160px"}} id="inlineFormCustomSelect">
                                <option value="1">Activo</option>
                                <option value="2">Desactivado</option>
                            </select>
                        </div>
                        <hr/>
                        <button className="btn btn-lg btn-block hero-button float-right rdjf" style={{width:"100px"}}>Guardar</button>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AdminSettings;
