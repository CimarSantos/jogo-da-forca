import styled from "styled-components";

import alfabeto from "../alfabeto";

const Letras = ({ usedLetters }) => {
  return (
    <Tecradinhu>
      {alfabeto.map((letra, index) => (
        <button
          data-test="letter"
          key={index}
          disabled={usedLetters.includes(letra)}
        >
          {letra}
        </button>
      ))}
    </Tecradinhu>
  );
};

export default Letras;

const Tecradinhu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 28%;
  position: absolute;
  bottom: 21%;

  button {
    display: flex;
    justify-content: center;
    width: 40px;
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
