import axios from "axios";
const URL = "https://gourmetgoapi.onrender.com";

const getRecipe = async (body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(`${URL}/get-recipes`, body, config);

  return response.data;
};

export { getRecipe };
