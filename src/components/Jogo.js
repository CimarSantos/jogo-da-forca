import Forca0 from "../assets/forca0.png";
import Forca1 from "../assets/forca1.png";
import Forca2 from "../assets/forca2.png";
import Forca3 from "../assets/forca3.png";
import Forca4 from "../assets/forca4.png";
import Forca5 from "../assets/forca5.png";
import Forca6 from "../assets/forca6.png";

const Jogo = () => {
  return (
    <>
      <div className="jogobox">
        <img className="forca" src={Forca0} alt="Imagem da Forca" />

        <button className="chooseWord">Escolher Palavra</button>
        <h3>______</h3>
      </div>
    </>
  );
};

export default Jogo;
