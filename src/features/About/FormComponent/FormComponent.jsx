import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../../../common/languageContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputField from "./InputField/InputField";
import { postFormData, setStatus } from "./formComponentSlice";
import { useDispatch, useSelector } from "react-redux";
import CSSLoader from "../../../common/Loaders/CSSLoader";
import css from "./FormComponent.module.css";
import ToastComponent from "../../../common/Toast/ToastComponent";
import useSuccessfulToastMessage from "./useSuccessfulToastMessage";
import useFailedToastMessage from "./useFailedToastMessage";
import confirmIcon from './../../../common/Toast/icon-confirm.png'

function FormComponent() {
  const initialState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      details: "",
      sendMeCopy: false,
    }),
    []
  );

  const [validated, setValidated] = useState(false);
  const [{ FormComponentTranslation }] = useContext(LanguageContext);
  const [formData, setFormData] = useState(initialState);
  const status = useSelector((state) => state.requestForm.status);
  const lastSendMeCopy = useSelector(
    (state) => state.requestForm.lastSendMeCopy
  );
  const dispatch = useDispatch();
  const toastMessage = useSuccessfulToastMessage();
  const errorToastMessage = useFailedToastMessage();
  const [submitError, setSubmitError] = useState(false);

  const handleToastClose = () => {
    dispatch(setStatus("idle"));
  };

  const handleErrorToastClose = () => {
    setSubmitError(false);
  };

  const handleSubmit = async (e) => {
    setSubmitError(false);
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) e.stopPropagation();

    setValidated(true);
    if (form.checkValidity() === true) {
      try {
        await dispatch(postFormData(formData)).unwrap();
        setFormData(initialState);
        setValidated(false);
      } catch {
        setSubmitError(true);
      }
    }
  };

  const handleChange = (fieldName) => (fieldValue) => {
    setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };

  const handleCheckboxChange = (fieldValue) => {
    setFormData((prevState) => ({ ...prevState, sendMeCopy: fieldValue }));
  };

  return (
    <div className={css["form-container"]}>
      <h3 className={css['main-slogan']}>{FormComponentTranslation.FORM_SLOGAN_MAIN}</h3>
      <h6 className={css['additional-slogan']}>{FormComponentTranslation.FORM_SLOGAN_ADDITIONAL}</h6>
      <p className={css['form-description']}>{FormComponentTranslation.FORM_DESCRIPTION}</p>
      <Form
        className={`${css["main-form"]}`}
        noValidate
        onSubmit={handleSubmit}
        validated={validated}
      >
        <InputField
          cautionMessage={FormComponentTranslation.NAME_INVALID}
          name="name"
          placeholder={FormComponentTranslation.NAME}
          value={formData.name}
          required
          pattern="([A-Za-zА-Яа-я]{2,}[\s\.]*[A-Za-zА-Яа-я]*[\s\.]*[A-Za-zА-Яа-я]*[\s\.]*)|([A-Za-zА-Яа-я]{1,}[\s\.]*[A-Za-zА-Яа-я]{1,}[\s\.]*[A-Za-zА-Яа-я]*[\s\.]*)"
          onChange={handleChange("name")}
        />
        <InputField
          cautionMessage={FormComponentTranslation.EMAIL_INVALID}
          name="email"
          value={formData.email}
          onChange={handleChange("email")}
          required
          type="email"
          placeholder={FormComponentTranslation.EMAIL}
        />
        <InputField
          cautionMessage={FormComponentTranslation.PHONE_INVALID}
          name="phone"
          pattern="^[+\d][\d\-\s\.\+]*"
          value={formData.phone}
          onChange={handleChange("phone")}
          type="tel"
          placeholder={FormComponentTranslation.PHONE}
        />
        <InputField
          name="details"
          value={formData.details}
          onChange={handleChange("details")}
          as="textarea"
          rows={3}
          placeholder={FormComponentTranslation.DETAILS}
        />
        <Form.Check
          className={css['form-check']}
          type="checkbox"
          checked={formData.sendMeCopy}
          label={FormComponentTranslation.CHECKBOX}
          onChange={(e) => handleCheckboxChange(e.nativeEvent.target.checked)}
        />
        <Button
          className={`${css["submit-button"]}`}
          variant="primary"
          type="submit"
          disabled={status === "pending"}
        >
          {status === "pending" ? (
            <CSSLoader />
          ) : (
            FormComponentTranslation.SUBMIT
          )}
        </Button>
        <ToastComponent
          img={confirmIcon}
          mainText={`${toastMessage.mainText}${
            lastSendMeCopy ? " " + toastMessage.additionalText : ""
          }`}
          show={status === "fulfilled"}
          smallText={toastMessage.smallText}
          headerText={toastMessage.headerText}
          setShow={handleToastClose}
        />
        <ToastComponent
          mainText={errorToastMessage.mainText}
          show={submitError}
          smallText={errorToastMessage.smallText}
          headerText={errorToastMessage.headerText}
          setShow={handleErrorToastClose}
        />
      </Form>
    </div>
  );
}

export default FormComponent;
