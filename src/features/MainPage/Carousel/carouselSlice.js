import { createSlice } from "@reduxjs/toolkit";
import img1 from "./img/original/17D(1).jpg";
import img2 from "./img/original/17D(2).jpg";
import img3 from "./img/original/17D(3).jpg";
import img4 from "./img/original/17D(4).jpg";
import img5 from "./img/original/17D(5).jpg";
import img6 from "./img/original/17D(6).jpg";
import img7 from "./img/original/17D(7).jpg";
import img8 from "./img/original/17D(8).jpg";
import img9 from "./img/original/17D(9).jpg";
import img10 from "./img/original/17D(10).jpg";
import img11 from "./img/original/17D(11).jpg";
import img12 from "./img/original/17D(12).jpg";

const initialState = {
  slides: [
    {
      id: 1,
      img: img1,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img2,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img3,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img4,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img5,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img6,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img7,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img8,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img9,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img10,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img11,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
    {
      id: 1,
      img: img12,
      caption_rus: {
        header: "Ножи от Rp2 Дизайн",
        paragraph: "",
      },
      caption_eng: {
        header: "Knives by Rp2 Design",
        paragraph: "",
      },
    },
  ],
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
});

// export const {} = carouselSlice.actions

export default carouselSlice.reducer;
