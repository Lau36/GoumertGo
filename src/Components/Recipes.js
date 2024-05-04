import "./Recipes.css";

function Recipes({ recipes }) {
  return (
    <>
      <div className="recipes">
        <div className="recipe-container">
          <div className="container1">
            <div className="title-recipe">
              <h1 className="title-recipes">{recipes.title} </h1>
            </div>
            <div className="nutricional-information-recipe">
              <h1 className="title-recipes">Sobre la receta:</h1>
              <ul>{recipes.intro}</ul>
            </div>
            <div className="ingredients-recipe">
              <h1 className="title-recipes">Ingredientes:</h1>
              <ul>
                {recipes.ingredients.map((ingredient, index) => (
                  <li key={`ingredient_${index}`}>
                    <p>{ingredient}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="steps-recipe">
              <h1 className="title-recipes">Paso a paso:</h1>
              {recipes.instructions.map((step, index) => (
                <p key={`step_${index}`}>{step}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
