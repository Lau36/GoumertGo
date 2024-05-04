import logo from "../Resources/iconPage.png";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loadingPage">
      <div className="logoContainer">
        <img src={logo} alt="Cargando..." className="logoLoading rotating" />
      </div>
    </div>
  );
}

export default LoadingPage;
