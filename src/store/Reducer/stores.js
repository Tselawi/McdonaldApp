import x3beef from "../../assets/img-1.png";
import smallburger from "../../assets/img-2.png";
import xxbeef from "../../assets/img-3.png";
import Crunchy from "../../assets/img-4.png";
import Phil from "../../assets/img-6.png";
import steak from "../../assets/img-5.png";
import beef from "../../assets/img-7.png";
import tomate from "../../assets/png/001-tomato.png";
import chesse from "../../assets/png/002-cheese.png";
import cucumber from "../../assets/png/003-cucumber.png";
import garlic from "../../assets/png/004-garlic.png";
import papper from "../../assets/png/006-chilli-pepper.png";
import hamburger from "../../assets/png/009-hamburger.png";
import sandwich from "../../assets/png/008-sandwich.png";
import sandwich1 from "../../assets/png/008-sandwich.png";
const initiaState = {
  products: [
    {
      id: 1,
      title: "Tibus' Boss Burger",
      description:
        "Big burger with 2x beef, barbecue sauce, cheese, pickle, onion & salat.",
      price: "4.80$",
      discount: "20%",
      size: "Big",
      weight: "500g",
      preparedTime: "9min",
      image: xxbeef,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 2,
      title: "Leny's Crunchy Bicky",
      description:
        "Medium burger with 1x beef, triple bycky sauce, cheese, pickle, fried onion & salat.",
      price: "4.15$",
      size: "Medium",
      weight: "370g",
      prepareTime: "5 min",
      image: Crunchy,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 3,
      title: "The Phil's O'sophy",
      description:
        "Medium burger with 1x beef, bacon, triple ketchup sauce, cheese, salat.",
      price: "4.00$",
      size: "Medium",
      Weight: "380g",
      prepareTime: "6 min",
      image: Phil,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 4,
      title: "Aless double steak",
      description:
        "Big burger with 2x beef, bacon, andalouse sauce, onion, salat.",
      price: "4.60$",
      discount: "10%",
      size: "Big",
      weight: "425g",
      preparTime: "8 min",
      image: steak,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 5,
      title: 'The "Bald & bold"',
      description: "Big burger with 3x beef, pickle sauce, fried onion, salat.",
      price: "5.00$",
      discount: "33%",
      size: "Big",
      weight: "475g",
      prepareTime: "8 min",
      image: x3beef,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 6,
      title: "The Rafaëlo (kid burger)",
      description:
        "Small burger with 1x beef, cheese, ketchup sauce, pickle, salat.",
      price: "2.00$",
      size: "Small",
      weight: "175g",
      prepareTime: "3 min",
      image: smallburger,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
    {
      id: 7,
      title: 'The "Eiffel Tour Burjer"',
      description:
        "Medium burger with 2x beef, camembert cheese, tartare & wine sauce, pickle, salat.",
      price: "4.33$",
      discount: "15%",
      size: "Medium",
      weight: "250g",
      prepareTime: "6 min",
      image: beef,
      ingrdients: [tomate, cucumber, garlic, papper, chesse],
      bread: [sandwich, hamburger, sandwich1],
    },
  ],
};
// console.log(initiaState);
const productReducer = (state = initiaState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
