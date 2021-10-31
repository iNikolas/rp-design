import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../common/languageContext";
import logo from "./Loga2+Фон_75.png";
import css from "./Navbar.module.css";
import { Container } from "react-bootstrap";

function NavbarComponent() {
  const [{ NavbarTranslation }] = useContext(LanguageContext);

  return (
    <>
      <Navbar
        variant="light"
        expand="xxl"
        className={`p-2 pb-1 pt-1 fs-6 justify-content-between font-monospace ${css.nav}`}
      >
        <Container className="w-auto m-0 flex-grow-0 justify-content-center">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Navbar.Text as="div" className={`fs-4 ${css.authorText}`}>
            Roman Polynkevych Design
          </Navbar.Text>
        </Container>
        <Navbar.Toggle
          style={{
            marginLeft: "auto",
          }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className={`${css.links}`} id="responsive-navbar-nav">
          <Nav.Link as={Link} to="/">
            {NavbarTranslation.HOME}
          </Nav.Link>
          <Nav.Link as={Link} to="/licensing">
            {NavbarTranslation.KNIVES_AVAILABLE_FOR_LICENSING}
          </Nav.Link>
          <Nav.Link as={Link} to="/serial">
            {NavbarTranslation.SERIAL_KNIVES}
          </Nav.Link>
          <Nav.Link as={Link} to="/contacts">
            {NavbarTranslation.CONTACT_US}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
