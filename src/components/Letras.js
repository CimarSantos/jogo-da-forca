import styled from "styled-components";

const Letras = ({ enabled, setEnabled }) => {
  const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <Tecradinhu>
      {alfabeto.map((letras, index) => (
        <button data-test="letter" key={index} disabled={enabled}>
          {letras.toLowerCase()}
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
