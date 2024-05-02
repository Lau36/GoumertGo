import "./Recipes.css";

function Recipes() {
  return (
    <>
      <div className="recipes">
        <div className="recipe-container">
          <div className="title-recipe">
            <h1 className="title-recipes">Pasta con salsa al pesto</h1>
          </div>
          <div className="ingredients-recipe">
            <h1 className="title-recipes">Ingredientes:</h1>
            <ul>
              <li>300 g de pasta</li>
              <li>Aceite de oliva virgen extra</li>
              <li>Sal</li>
              <li>Pimienta</li>
              <li>​Para la salsa pesto: </li>
              <li>1 ramita de albahaca fresca</li>
              <li>50 g de queso Parmesano</li>
              <li>50 g de piñones</li>
              <li> 2 dientes de ajo</li>
              <li>80 ml de aceite de oliva virgen</li>
              <li>extra Sal</li>
            </ul>
          </div>
          <div className="steps-recipe">
            <h1 className="title-recipes">Paso a paso:</h1>
            <ul>
              <li>
                Tuesta ligeramente los piñones en el horno a 180 ºC durante 10
                minutos.
              </li>
              <li>
                Para la salsa pesto: pela los dientes de ajo. Lava las hojas
                albahaca y sécalas bien. Tritura las hojas de albahaca con los
                dientes de ajo, los piñones y el Parmesano. Añade poco a poco el
                aceite de oliva virgen extra hasta que la salsa quede con una
                textura granulosa. Rectifica de sal y reserva.
              </li>
              <li>
                Cuece la pasta en una cazuela con agua hirviendo y sal el tiempo
                indicado por el fabricante.
              </li>
              <li>
                Escúrrela cuando esté al dente y sírvela con la salsa pesto, ya
                sea mezclada o por encima.
              </li>
            </ul>
          </div>
          <div className="nutricional-information-recipe">
            <h1 className="title-recipes">Información nutricional:</h1>
            <ul>
              <li>
                Tuesta ligeramente los piñones en el horno a 180 ºC durante 10
                minutos.
              </li>
              <li>
                Para la salsa pesto: pela los dientes de ajo. Lava las hojas
                albahaca y sécalas bien. Tritura las hojas de albahaca con los
                dientes de ajo, los piñones y el Parmesano. Añade poco a poco el
                aceite de oliva virgen extra hasta que la salsa quede con una
                textura granulosa. Rectifica de sal y reserva.
              </li>
              <li>
                Cuece la pasta en una cazuela con agua hirviendo y sal el tiempo
                indicado por el fabricante.
              </li>
              <li>
                Escúrrela cuando esté al dente y sírvela con la salsa pesto, ya
                sea mezclada o por encima.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
