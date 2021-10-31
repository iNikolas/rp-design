import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  copyright: {
    rus: '© 2021 "Роман Полынкевич Дизайн".\nВсе права защищены.',
    eng: '© 2021 "Roman Polynkevych Design".\nAll rights reserved.',
  },
  designer: {
    name: {
      rus: "Николай Лебедь.",
      eng: "Nikolaj Lebed.",
    },
    description: {
      rus: "2021 год. Сайт Разработан: ",
      eng: "2021. Site Designed by ",
    },
    linkedin: "https://www.linkedin.com/in/nikolaj-lebed-570438207/",
  },
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

// export const {} = footerSlice.actions

export default footerSlice.reducer;
