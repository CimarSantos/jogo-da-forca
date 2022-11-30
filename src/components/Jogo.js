import styled from "styled-components";


import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

const Jogo = ({ startGame, numberErrors, palavraJogo, corPalavra }) => {
  const forcaNumber = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  return (
    <>
      <Jogobox>
        <Forca src={forcaNumber[numberErrors]} alt="Imagem da Forca" />
        <Chooseword data-test="choose-word" onClick={startGame}>
          Escolher Palavra
        </Chooseword>
        <h3 data-test="word" className={corPalavra}>
          {palavraJogo}
        </h3>
      </Jogobox>
    </>
  );
};

export default Jogo;

const Jogobox = styled.div`
  h3 {
    position: absolute;
    right: 22%;
    bottom: 45%;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 15px;
  }
`;

const Forca = styled.img`
  position: absolute;
  top: 50px;
  left: 10%;
  width: 400px;
`;

const Chooseword = styled.button`
  position: absolute;
  top: 90px;
  right: 20%;
  padding: 20px 50px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
