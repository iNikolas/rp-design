import React, { createContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import PropTypes from "prop-types";

export const LanguageContext = createContext([{}, "eng", (lang) => lang]);

function LanguageProvider(props) {
  const [language, setLanguage] = useLocalStorage("lang", "eng");

  const translation = {
    NavbarTranslation: {
      HOME: language === "eng" ? "HOME" : "ГЛАВНАЯ",
      KNIVES_AVAILABLE_FOR_LICENSING:
        language === "eng"
          ? "KNIVES: AVAILABLE FOR LICENSING"
          : "НОЖИ: ДОСТУПНО ДЛЯ ЛИЦЕНЗИРОВАНИЯ",
      SERIAL_KNIVES: language === "eng" ? "SERIAL KNIVES" : "СЕРИЙНЫЕ НОЖИ",
      CONTACT_US: language === "eng" ? "CONTACT US" : "КОНТАКТЫ",
    },
    FormComponentTranslation: {
      FORM_SLOGAN_MAIN:
        language === "eng"
          ? "Are You looking for snazzy and unique knife designs?"
          : "Ищете броские и уникальные дизайны ножей?",
      FORM_SLOGAN_ADDITIONAL:
        language === "eng"
          ? "Now You can get them easily quickly and affordably."
          : "Теперь вы можете получить их легко, быстро и недорого.",
      FORM_DESCRIPTION:
        language === "eng"
          ? "Just fill out the form below and press 'Submit' button"
          : "Просто заполните форму ниже и нажмите кнопку 'Отправить':",
      NAME: language === "eng" ? "Name" : "Имя",
      NAME_INVALID:
        language === "eng"
          ? "The name must consist of at least two characters"
          : "Имя должно состоять как минимум с двух символов",
      EMAIL: language === "eng" ? "Email Address" : "Адрес электронной почты",
      EMAIL_INVALID:
        language === "eng"
          ? "Email must be valid"
          : "Электронная почта должна быть корректной",
      PHONE: language === "eng" ? "Phone number" : "Номер телефона",
      PHONE_INVALID:
        language === "eng"
          ? "Phone number must contain only digits and special symbols ('.', '+', '-') and starts with digit or '+' symbol"
          : "Номер телефона должен содержать только цифры и специальные символы ('.', '+', '-'), начинаться с цифры или '+' символа",
      DETAILS: language === "eng" ? "Details of the request" : "Детали запроса",
      CHECKBOX:
        language === "eng"
          ? "Send me a copy of the request"
          : "Отправить мне копию запроса",
      SUBMIT: language === "eng" ? "Submit" : "Отправить",
    },
    FormSuccessfulToastTranslation: {
      HEADER:
        language === "eng"
          ? "Successful form sending!"
          : "Форма успешно отправлена!",
      MAIN_TEXT:
        language === "eng"
          ? "Thank You for Your interest. We will for sure contact You."
          : "Спасибо Вам за проявленный интерес. Мы обязательно свяжемся с Вами.",
      ADDITIONAL_TEXT_SUCCESS:
        language === "eng"
          ? "Form copy has been sent to Your email."
          : "Копия формы отправлена на вашу электронную почту.",
      ADDITIONAL_TEXT_ERROR:
        language === "eng"
          ? "Unfortunately unable to set the form copy to your email due to email service overloading."
          : "К сожалению, невозможно отправить копию формы Вам на почту по причине перегруженности почтового сервиса.",
    },
    FormErrorToastTranslation: {
      HEADER:
        language === "eng"
          ? "Failed form sending!"
          : "Отправка формы неудачна!",
      MAIN_TEXT:
        language === "eng"
          ? "Network error. Please try again."
          : "Ошибка сети. Пожалуйста, попробуйте снова.",
    },
    ContactsBlockTranslation: {
      CONTACTS: language === "eng" ? "Contacts" : "Контакты",
      COUNTRY: language === "eng" ? "Country: " : "Страна: ",
      CITY: language === "eng" ? "City: " : "Город: ",
      EMAIL: language === "eng" ? "Email: " : "Электронная почта: ",
      FOLLOW_CAPTION:
        language === "eng"
          ? "Follow me on social media"
          : "Подписывайся в социальных сетях",
      FOLLOW_SUB_CAPTION:
        language === "eng"
          ? "Connect, follow and have a conversation with me"
          : "Подключайтесь, подписывайтесь и общайтесь",
    },
    KnivesParametersTranslation: {
      DESCRIPTION: language === "eng" ? "Description" : "Описание",
      OVERALL_LENGTH:
        language === "eng" ? "Overall length: " : "Общая длинна: ",
      BLADE_LENGTH: language === "eng" ? "Blade length: " : "Длинна лезвия: ",
      BLADE_THICKNESS:
        language === "eng" ? "Blade thickness: " : "Толщина лезвия: ",
      HANDLE_THICKNESS:
        language === "eng" ? "Handle thickness: " : "Толщина ручки: ",
      BEARING: language === "eng" ? "Bearing: " : "Подшипник: ",
      LOCK_TYPE: language === "eng" ? "Lock type: " : "Тип замка: ",
      WEIGHT: language === "eng" ? "Weight: " : "Вес: ",
    },
    KnifePageTranslation: {
      BACK: language === "eng" ? "back" : "назад",
      RECENTLY_VIEWED: language === "eng" ? "Recently viewed products" : "Недавно просмотренные продукты",
    },
  };

  return (
    <LanguageContext.Provider value={[translation, language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

LanguageProvider.propTypes = {
  children: PropTypes.element,
};
