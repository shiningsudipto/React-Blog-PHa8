import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><h2>React Cafe</h2></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img className='header-icon' src="../../../public/Ellipse 1 (1).png" alt="" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;