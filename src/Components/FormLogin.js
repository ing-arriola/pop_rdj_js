import React from "react";
import {Form, Button} from "react-bootstrap";
import {auth} from "../firebase";
import { withRouter } from "react-router-dom";


const FormLogin = (props) =>{
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const validateForm = (e) => {
        e.preventDefault();
        if (!email.trim()){
            console.log('Invalid Email')
            setError('Datos vacíos email!')
            return;
        }
        if (!pass.trim()){
            console.log('Invalid Pass');
            setError('Datos vacíos contraseña!')

            return;
        }
        if (pass.length < 6){
            console.log('Invalid Pass lenght');
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
            console.log('in')
            props.history.push('/results')
        } catch (error) {
            if(error.code === 'auth/user-not-found'){
                setError('Usuario o contraseña incorrecta')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
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

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required placeholder="Password" onChange={e => setPass(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
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