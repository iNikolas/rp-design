import { createSlice } from "@reduxjs/toolkit";
import img1 from "./img/1/1.370.jpg";
import img1_1 from "./img/1/1.368.jpg";
import img1_2 from "./img/1/1.369.jpg";
import img1_3 from "./img/1/1.370.jpg";
import img1_4 from "./img/1/1.371.jpg";
import img1_5 from "./img/1/1.372.jpg";
import img1_6 from "./img/1/1.373.jpg";

import img2 from "./img/2/ЗеленыйGanzo.378.jpg";
import img2_1 from "./img/2/ЗеленыйGanzo.374.jpg";
import img2_2 from "./img/2/ЗеленыйGanzo.376.jpg";
import img2_3 from "./img/2/ЗеленыйGanzo.377.jpg";
import img2_4 from "./img/2/ЗеленыйGanzo.378.jpg";
import img2_5 from "./img/2/ЗеленыйGanzo.379.jpg";

import img3 from "./img/3/3.383.jpg";
import img3_1 from "./img/3/3.380.jpg";
import img3_2 from "./img/3/3.381.jpg";
import img3_3 from "./img/3/3.382.jpg";
import img3_4 from "./img/3/3.383.jpg";
import img3_5 from "./img/3/3.384.jpg";

const initialState = {
  knives: [
    {
      id: 1,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 1", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 2,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 2", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 3,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 3", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 4,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 4", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 5,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 5", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 6,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 6", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 7,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 7", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 8,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 8", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 9,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 9", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 10,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 10", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 11,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 11", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 12,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 12", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 13,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 13", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 14,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 14", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 15,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 15", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 16,
      image: img1,
      images: [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6],
      name: { rus: "Складной нож 16", eng: "Folding knife 1" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 17,
      image: img2,
      images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      name: { rus: "Складной нож 17", eng: "Folding knife 2" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
    {
      id: 18,
      image: img3,
      images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      name: { rus: "Складной нож 18", eng: "Folding knife 3" },
      mainDescription: {
        year: 2021,
        type: { rus: "Складной нож с замком. ", eng: "Lock folding knife. " },
        color: { rus: "Синий. ", eng: "Dark blue. " },
        handle: { rus: "Ручка (8,89 см).", eng: 'Handle (3.5").' },
      },
      verboseDescription: {
        overallLength: { rus: "204 мм", eng: '8.03"' },
        bladeLength: { rus: "87 мм", eng: '3.43"' },
        bladeThickness: { rus: "3,1 мм", eng: '0,12"' },
        handleThickness: { rus: "13,6 мм", eng: '0,53"' },
        bearing: {
          rus: "Керамический шаровый подшипник",
          eng: "Ceramic ball bearing",
        },
        lockType: { rus: "Линейный замок", eng: "Liner lock" },
        weight: { rus: "109 г", eng: "3,85 oz" },
      },
    },
  ],
};

export const licensingSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
});

// export const {} = licensingSlice.actions

export default licensingSlice.reducer;
