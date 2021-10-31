import { useContext } from "react";
import { LanguageContext } from "../../../common/languageContext";

function useFailedToastMessage() {
  const [{ FormErrorToastTranslation }] = useContext(LanguageContext);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  return {
    headerText: FormErrorToastTranslation.HEADER,
    smallText: time,
    mainText: FormErrorToastTranslation.MAIN_TEXT,
  };
}

export default useFailedToastMessage;
