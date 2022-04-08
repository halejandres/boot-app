import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Layout.css'

export const Layout = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/', {replace: true});
    }

    return (
        <main>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">Tec-verse</NavLink>
                    </Navbar.Brand>
                    <Nav activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/home/users">Users</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/home/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <div className="btn-logout" onClick={handleLogout}>Logout <i className="bi bi-box-arrow-left" /></div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <section>
                <Outlet />
            </section>
        </main>
    )
}
