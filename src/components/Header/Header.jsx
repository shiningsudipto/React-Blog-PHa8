import React from 'react';
import Icon from '../../assets/Icon.png'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><h2>React World</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '170px' }}
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Gallery</Nav.Link>
                        <Nav.Link href="#">
                            Contact
                        </Nav.Link>
                        <img className='header-icon' src={Icon} alt="" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;