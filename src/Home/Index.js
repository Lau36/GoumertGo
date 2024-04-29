import Navbar from "../Components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
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
        <button className="button-go">GO</button>
        {/* <div className="container-button">
          
        </div> */}
      </div>
    </>
  );
}

export default Home;
