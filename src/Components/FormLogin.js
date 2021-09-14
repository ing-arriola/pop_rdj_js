import React from "react";
import {Form, Button} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import {auth} from "../utils/firebase";


const FormLogin = (props) =>{
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const validateForm = (e) => {
        e.preventDefault();
        if (!email.trim()){
            setError('Datos vacíos email!')
            return;
        }
        if (!pass.trim()){
            setError('Datos vacíos contraseña!')

            return;
        }
        if (pass.length < 6){
            setError('6 o más carácteres en contraseña ')
            return;
        }
        setError(null)
        login();
    }
    const login = React.useCallback(async() => {
        try {
            await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/')
        } catch (error) {
            if(error.code === 'auth/user-not-found'){
                setError('Usuario o contraseña incorrecta')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Usuario o contraseña incorrecta')
            }
        }
    }, [email, pass, props.history ])
    return(
        <>
            <div className='pt-2'>
                <Form onSubmit={validateForm}>
                    {
                        error ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ) : null
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required placeholder="Password" onChange={e => setPass(e.target.value)}/>
                    </Form.Group>
                
                    <div className='d-flex justify-content-center pb-4'>
                        <Button variant="primary" type="submit" className='w-100 rdjf'>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}
export default withRouter(FormLogin);