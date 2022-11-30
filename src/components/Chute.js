import styled from "styled-components";

import "./Jogo";

const Chute = ({ desabilitarInput, palavraChute, setPalavraChute, random }) => {
  function VaiChute() {
    if (random.join("") === palavraChute) {
      console.log("Ganhou");
    } else {
      console.log("Perdeu");
    }
    setPalavraChute("");
  }

  return (
    <Chutebox>
      <h4>Já sei a palavra!</h4>
      <input
        data-test="guess-input"
        type="text"
        value={palavraChute}
        onChange={(e) => setPalavraChute(e.target.value)}
        disabled={desabilitarInput}
      />
      <button
        data-test="guess-button"
        onClick={VaiChute}
        disabled={desabilitarInput}
      >
        Chutar
      </button>
    </Chutebox>
  );
};

export default Chute;

const Chutebox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: absolute;
  bottom: 15%;

  h4 {
    font-size: 20px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    cursor: default;
  }

  input {
    font-size: 30px;
    width: 353px;
    height: 40px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    &:disabled {
      background-color: #798a9f;
      cursor: default;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    padding: 15px 25px;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    color: #7aa7c7;
    background-color: #e1ecf4;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    &:disabled {
      background-color: #798a9f;
      cursor: default;
    }
  }
`;
