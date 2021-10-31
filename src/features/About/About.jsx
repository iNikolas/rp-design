import React from "react";
import FormComponent from "./FormComponent/FormComponent";
import Contacts from "./Contacts/Contacts";
import css from './About.module.css'

function About() {
  return (
    <div className={css['about-container']}>
      <FormComponent />
      <Contacts />
    </div>
  );
}

export default About;
