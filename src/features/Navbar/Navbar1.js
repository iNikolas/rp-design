import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import css from "./Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LanguageContext } from "./../../common/languageContext";

// eslint-disable-next-line no-unused-vars
function Navbar1() {
  const [winWidth, setWinWidth] = useState(0);
  const [{ Navbar }, language, setLanguage] = useContext(LanguageContext);
  useEffect(() => setWinWidth(window.innerWidth), []);
  window.onresize = () => {
    setWinWidth(window.innerWidth);
  };

  const handleLanguageChange = () => {
    setLanguage(language === "eng" ? "rus" : "eng");
  };

  return (
    <>
      <Nav
        bg='dark'
        sticky="top"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className={`align-content-center justify-content-end p-2 font-monospace ${css.nav}`}
        title={
          <div className={css.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
        as={winWidth < 800 ? NavDropdown : "li"}
      >
        <Nav.Item>
          <Nav.Link eventKey="/">{Navbar.HOME}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/licensing">
            {Navbar.KNIVES_AVAILABLE_FOR_LICENSING}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/serial">{Navbar.SERIAL_KNIVES}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contacts">{Navbar.CONTACT_US}</Nav.Link>
        </Nav.Item>
        <button onClick={handleLanguageChange}>Change Language</button>
      </Nav>
    </>
  );
}
