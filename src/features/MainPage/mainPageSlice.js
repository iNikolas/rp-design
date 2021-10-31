import { createSlice } from "@reduxjs/toolkit";
import aboutMePhoto from "./Снимок.JPG";

const initialState = {
  aboutMe: {
    sectionHeader: {
      rus: "ОБО МНЕ",
      eng: "ABOUT ME",
    },
    description: {
      rus: [
        "Разработка ножей для меня не просто работа - это своеобразный культ, выражение себя, той глубокой и утонченной философии, которую несут в себе идеальные формы клинка, обретающие душу и индивидуальность при помощи инженерной мысли, глубокого понимания эргономики холодного оружия и личного почерка дизайнера.",
        "На данный момент готов похвастаться более чем пятью годами коммерческого опыта в индустрии разработки ножей, а также могу предложить клиентам с десяток готовых к производству и уникальных проектов. В разработке ножей я более всего ценю презентабельность, функциональность и индивидуальность изделия, отдавая всего себя без остатка каждому отдельному проекту.",
      ],
      eng: [
        "For me Knife Design is not only a job, it’s a peculiar cult, expression of myself, that deep and sophisticated philosophy, which carries into itself perfect blade shape, acquiring a soul by utilizing engineering thought, deep understanding of a cold weapon ergonomics, and personal designer’s nature.",
        "As of now, I’m able to show off more than 5 years of commercial experience in the knife development industry, and also I can offer my clients some 10 ready-for-production and unique projects. In the knife design, I mostly appreciate the presentability, functionality, and uniqueness of the product, giving all of myself without a remainder for each project.",
      ],
    },
    photo: aboutMePhoto,
  },
};

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
});

// export const {} = mainPageSlice.actions

export default mainPageSlice.reducer;
