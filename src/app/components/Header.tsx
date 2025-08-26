import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Link href="/" >
                <Navbar.Brand>Adivinha</Navbar.Brand>
            </Link>
            <Link href="/Signos">
                <Navbar.Brand>Signos</Navbar.Brand>
            </Link>
                <Link href="/Sobre">
                <Navbar.Brand>Sobre</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;