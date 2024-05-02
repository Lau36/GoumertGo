import { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import Recipes from "../Components/Recipes";

function Home() {
  const [recipePage, setRecipePage] = useState(false);
  const recipesPage = () => {
    setRecipePage(true);
  };

  const ingredientsPage = () => {
    setRecipePage(false);
  };
  return (
    <>
      <Navbar />
      {recipePage ? (
        <>
          <Recipes />
          <div className="buttons">
            <button className="button-generate-recipe">
              Generar otra receta
            </button>
            <button
              className="button-others-ingredients"
              onClick={ingredientsPage}
            >
              Nuevos ingredientes
            </button>
          </div>
        </>
      ) : (
        <div className="home-container">
          <div className="Text-ingredients-container">
            <label className="label-input">Ingresa los ingredientes</label>
          </div>
          <div className="Input-Container">
            <textarea
              rows="9"
              type="text"
              className="Input"
              placeholder="Ej: Tomate, Cebolla"
              name="ingredients"
            />
          </div>
          <button className="button-go" onClick={recipesPage}>
            GO
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
