import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: {
    email: "romanua89@gmail.com",
    instagram: "https://www.instagram.com/rp2_design/",
    facebook: "https://www.facebook.com/",
  },
  location: {
    country: { eng: "Ukraine", rus: "Украина" },
    city: { eng: "Dnipro", rus: "Днепр" },
  },
};

export const contactsSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

// export const {} = contactsSlice.actions

export default contactsSlice.reducer;
