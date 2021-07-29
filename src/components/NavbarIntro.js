import React, { useState } from "react"
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {

    const [toggleClick, setToggleClick] = useState(false);

    return (
        <>
        <div id="navbar-box">
            <Navbar bg="none" expand="lg" >
                <Navbar.Brand href="#home"><img id="logo-header" src="images/logo.svg" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" onClick={() => setToggleClick(!toggleClick)} />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-item-clp" bg="dark">
                    <Nav className="mr-auto nav-items">
                        <Nav.Link href="#feature" id="feature" className="nav-text">Feature</Nav.Link>
                        <Nav.Link href="#pricing" id="pricing" className="nav-text">Pricing</Nav.Link>
                        <Nav.Link href="#resources" id="resources" className="nav-text">Resources</Nav.Link>
                    </Nav>
                    <hr />
                    <Nav className="nav-items">
                        <Nav.Link href="#login" id="login" className="nav-text">Login</Nav.Link>
                        <Nav.Link href="#sign-up" id="sign-up" className="nav-text">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
         <section id="intro-box">
            <img id="intro-bg-img" className={ `${toggleClick && "imgDisplay-mobile"} imageDisplay`} src="images/illustration-working.svg" alt="working illustration" />
            <div id="intro-text-box">
                <h1 id="intro-title"> More than just shorter links</h1>
                <p id="intro-paragraph" className="text">  Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className="intro-btn" >Get Started</button>
            </div>
        </section>
        </>
    )
}

export default NavBar;