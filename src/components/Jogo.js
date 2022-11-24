const Jogo = ({ forca, setForca }) => {
  console.log(forca);
  return (
    <>
      <div className="jogobox">
        <img className="forca" src={forca} alt="Imagem da Forca" />

        <button className="chooseWord">Escolher Palavra</button>
        <h3>______</h3>
      </div>
    </>
  );
};

export default Jogo;
