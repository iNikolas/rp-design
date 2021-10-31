import React, { useContext } from "react";
import { LanguageContext } from "../../../common/languageContext";
import { useSelector } from "react-redux";
import instLogo from "./../../Footer/instagram_logo1.png";
import facebookLogo from "./../../Footer/facebook.png";
import css from "./Contacts.module.css";

function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  const [{ ContactsBlockTranslation }, language] = useContext(LanguageContext);

  return (
    <div className={css["contacts-container"]}>
      <h3 className={css["contacts-header"]}>
        {ContactsBlockTranslation.CONTACTS}
      </h3>
      <div className={css["country-block"]}>
        <span>{ContactsBlockTranslation.COUNTRY}</span>
        <span>{contacts.location.country[language]}</span>
      </div>
      <div className={css["city-block"]}>
        <span>{ContactsBlockTranslation.CITY}</span>
        <span>{contacts.location.city[language]}</span>
      </div>
      <div className={css["email-block"]}>
        <span>{ContactsBlockTranslation.EMAIL}</span>
        <span>{contacts.links.email}</span>
      </div>
      <div className={css["social-media-block"]}>
        <h3 className={css["social-media-header"]}>
          {ContactsBlockTranslation.FOLLOW_CAPTION}
        </h3>
        <h5 className={css["social-media-sub-header"]}>
          {ContactsBlockTranslation.FOLLOW_SUB_CAPTION}
        </h5>
        <ul className={css["contacts-nav"]}>
          <li>
            <a href={contacts.instagram} target="_blank" rel="noreferrer">
              <img src={instLogo} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href={contacts.facebook} target="_blank" rel="noreferrer">
              <img src={facebookLogo} alt="facebook logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
