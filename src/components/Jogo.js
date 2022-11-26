import styled from "styled-components";

import palavras from "../palavras";

let random = [];

const Jogo = ({ enabled, setEnabled, forca, setForca }) => {
  function randomWord() {
    setEnabled(false);
    random = palavras[Math.floor(Math.random() * palavras.length)].split("");
  }
  console.log(random);
  return (
    <>
      <Jogobox>
        <Forca src={forca} alt="Imagem da Forca" />

        <Chooseword data-test="choose-word" onClick={randomWord}>
          Escolher Palavra
        </Chooseword>
        <h3 data-test="word">{random}</h3>
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
