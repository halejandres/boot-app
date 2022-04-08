import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { InformativeModal } from './InformativeModal';

export const LoginForm = () => {
    //d-grid display:grid, h-100 height: 100%, w-100 width:100%
    //https://getbootstrap.com/docs/5.0/utilities/spacing/
    //mb-4 margin-bottom: 1.5rem
    //https://getbootstrap.com/docs/5.0/utilities/text/
    //fs-3 font-size: 3..  -> font-weight, line-height <h></h>
    //fw-normal font-weight: normal
    const [modalShow, setModalShow] = React.useState(false);

    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        const response = await fetch('http://localhost:4000/login', { method: 'POST', body: formData });
        const data = await response.json();

        if (data.token !== '') {
            localStorage.setItem('token', data.token);
            sessionStorage.setItem('token', data.token);

            var date = new Date();
            date.setTime(date.getTime() + (30 * 60 * 1000));

            document.cookie = `token=${data.token}; expires=${date.toUTCString()}`;
            navigate('/home', { replace: true });
        } else {
            setModalShow(true);
        }
    }

    return (
        <Container id="main-container" className="d-grid h-100">
            <Form ref={form}
                id="sign-in-form" className="text-center w-100"
                onSubmit={handleSubmit}>
                <img className="mb-4 bootstrap-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg"
                    alt="Tec" />
                <h1 className="mb-3 fs-3 fw-normal">Tec-verse</h1>
                <Form.Group controlId="signing-email">
                    <Form.Control type="text" size="lg" className="position-relative"
                        placeholder="Correo electrónico" autoComplete="username"
                        name="user" required />
                </Form.Group>
                <Form.Group controlId="signing-password" className="mb-4">
                    <Form.Control type="password" size="lg" className="position-relative"
                        placeholder="Contraseña" autoComplete="current-password"
                        name="password" />
                </Form.Group>
                {/* <Form.Group controlId="remember-me" className="d-flex justify-content-center">
          <Form.Check label="Remember me" />
        </Form.Group> */}
                <Button variant="primary" size="lg" className="w-100" type="submit">Iniciar sesión</Button>
                <p className="mt-4 text-muted">&copy; 2022-2023</p>
            </Form>
            <InformativeModal show={modalShow}
                              onHide={() => setModalShow(false)}
                              headerText="Login"
                              messageText="Usuario o contraseña incorrectos"/>
        </Container>
    )
}
