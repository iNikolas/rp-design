import { useContext } from "react";
import { LanguageContext } from "../../../common/languageContext";
import { useSelector } from "react-redux";

function useSuccessfulToastMessage() {
  const status = useSelector((state) => state.requestForm.data?.result);
  const [{ FormSuccessfulToastTranslation }] = useContext(LanguageContext);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
  const additionalText =
    status === "success"
      ? FormSuccessfulToastTranslation.ADDITIONAL_TEXT_SUCCESS
      : FormSuccessfulToastTranslation.ADDITIONAL_TEXT_ERROR;

  return {
    headerText: FormSuccessfulToastTranslation.HEADER,
    smallText: time,
    mainText: FormSuccessfulToastTranslation.MAIN_TEXT,
    additionalText: additionalText,
  };
}

export default useSuccessfulToastMessage;
