import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./../features/MainPage/Carousel/carouselSlice";
import footerReducer from "./../features/Footer/footerSlice";
import mainPageReducer from "./../features/MainPage/mainPageSlice";
import formReducer from "./../features/About/FormComponent/formComponentSlice";
import contactsReducer from "./../features/About/Contacts/contactsSlice";
import licensingReducer from "./../features/Licensing/licensingSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    footer: footerReducer,
    mainContent: mainPageReducer,
    requestForm: formReducer,
    contacts: contactsReducer,
    licensing: licensingReducer,
  },
});
