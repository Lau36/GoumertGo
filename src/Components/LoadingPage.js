import loadingAnimation from "../Resources/loading.json";
// import loadingAnimation from "../Resources/sarten.json";
import Lottie from "lottie-react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loadingPage">
      <div className="logoContainer">
        <Lottie animationData={loadingAnimation} />
      </div>
      <div class="spinner1">
        <span>G</span>
        <span>E</span>
        <span>N</span>
        <span>E</span>
        <span>R</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
      </div>
      <div class="spinner2">
        <span>R</span>
        <span>E</span>
        <span>C</span>
        <span>E</span>
        <span>T</span>
        <span>A</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default LoadingPage;
