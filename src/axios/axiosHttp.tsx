import axios from "axios";

// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=4a350f7d&app_key=cfdae792d4d158adae1d93c999ae6517

export const recipeInstance = axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_id: "4a350f7d",
    app_key: "cfdae792d4d158adae1d93c999ae6517",
  },
});



export const foodDatabaseInstance = axios.create({
  baseURL: "https://api.edamam.com/api/food-database/v2/parser",
  params: {
    type: "public",
    app_id: "82261e99",
    app_key: "76dc1f6622bc72f622efe18fc0d1db7e	",
  },
});