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
    <div className={`tecradinhu`}>
      {alfabeto.map((letras, index) => (
        <button disabled key={index}>
          {letras}
        </button>
      ))}
    </div>
  );
};

export default Letras;
