const Chute = () => {
  return (
    <div className="chuteBox">
      <h4>Já sei a palavra!</h4>
      <input data-test="guess-input" type="text" disabled />
      <button disabled>Chutar</button>
    </div>
  );
};

export default Chute;
