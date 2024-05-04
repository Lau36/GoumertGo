import { useState } from "react";
import { getRecipe } from "../Service/Ingredients";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
import Recipes from "../Components/Recipes";
import "./Home.css";
import LoadingPage from "../Components/LoadingPage";

function Home() {
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [recipePage, setRecipePage] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  const ingredientsPage = () => {
    setCurrentRecipeIndex(0);
    setRecipePage(false);
  };

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const ingredientsList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    const data = {
      ingredients: ingredientsList,
    };
    console.log("los ingredientes", data);
    getRecipe(data).then((response) => {
      try {
        setLoading(false);
        if (response.length !== 0) {
          console.log("Estos son los ingredientes", response);
          setRecipes(response);
          setRecipePage(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocurrió un error con los ingredientes",
            text: "Los ingredientes que colocaste no son válidos",
          });
        }
      } catch (error) {
        console.log("Ocurrio un erro al mandar los ingredientes :(", error);
      }
    });
  };

  const generateNextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => prevIndex + 1);
  };

  const prevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingPage />
      ) : recipePage ? (
        <>
          <Recipes recipes={recipes[currentRecipeIndex]} />
          <div className="buttons">
            {currentRecipeIndex > 0 && (
              <button className="button-generate-recipe" onClick={prevRecipe}>
                Receta anterior
              </button>
            )}
            {currentRecipeIndex < recipes.length - 1 && (
              <button
                className="button-generate-recipe"
                onClick={generateNextRecipe}
              >
                Generar otra receta
              </button>
            )}
            {currentRecipeIndex === recipes.length - 1 && (
              <button
                className="button-others-ingredients"
                onClick={ingredientsPage}
              >
                Nuevos ingredientes
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="home-container">
          <form onSubmit={handleSubmit}>
            <div className="Text-ingredients-container">
              <label className="label-input">Ingresa los ingredientes</label>
            </div>
            <div className="Input-Container">
              <textarea
                rows="4"
                type="text"
                className="Input"
                placeholder="Tomate, Cebolla"
                name="ingredients"
                onChange={handleChange}
              />
            </div>
            <div className="button-start">
              <button className="button-go">GO</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Home;
