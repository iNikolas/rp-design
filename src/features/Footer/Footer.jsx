import React, { useContext } from "react";
import css from "./Footer.module.css";
import { LanguageContext } from "../../common/languageContext";
import { useSelector } from "react-redux";
import footerLogo from "./../../common/Logo.png";
import instLogo from "./instagram_logo1.png";
import emailLogo from "./email.png";
import facebookLogo from "./facebook.png";

function Footer() {
  const [, language] = useContext(LanguageContext);
  const footerInfo = useSelector((state) => state.footer);
  const contacts = useSelector((state) => state.contacts.links);

  return (
    <footer className={css["main-footer"]}>
      <div className={css["main-footer-container"]}>
        <div className={css["copyright-block"]}>
          <img className={css["footer-logo"]} src={footerLogo} />
          <p>{footerInfo.copyright[language]}</p>
        </div>

        <ul className={css["footer-nav"]}>
          <li>
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <img src={instLogo} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href={`mailto: ${contacts.email}`}>
              <img src={emailLogo} alt="e-mail logo" />
            </a>
          </li>
          <li>
            <a
              href={contacts.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="facebook logo" />
            </a>
          </li>
        </ul>

        <div
          className={`${css["copyright-block"]} ${css["designer-description"]}`}
        >
          <p>
            {footerInfo.designer.description[language]}{" "}
            <a
              href={footerInfo.designer.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {footerInfo.designer.name[language]}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
