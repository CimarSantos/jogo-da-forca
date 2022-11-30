import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import alfabeto from "../alfabeto";

function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true); // Habilita o input e botão de chute
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto); // Letras que vão ficar desabilitadas
  const [numberErrors, setNumberErrors] = useState(0); // Quantidade de erros
  const [palavraEscolhida, setPalavraEscolhida] = useState([]); // Palavra que foi sorteada
  const [palavraJogo, setPalavraJogo] = useState([]); // Palavra que está sendo adivinhada
  const [palavraChute, setPalavraChute] = useState(""); // Input controlado do chute
  const [corPalavra, setCorPalavra] = useState("preto"); // Cor que a palavra aparece na tela

  function startGame() {
    setDesabilitarInput(false);
    setLetrasUsadas([]);
    sortearPalavra();
    setNumberErrors(0);
    setCorPalavra("preto");
  }

  function sortearPalavra() {
    const i = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[i];
    const palavraArray = palavra.split("");
    setPalavraEscolhida(palavraArray);
    console.log(palavra);

    let tracinhos = [];
    palavraArray.forEach(() => tracinhos.push(" _"));
    setPalavraJogo(tracinhos);
  }

  function clicarLetra(letraClicada) {
    setLetrasUsadas([...letrasUsadas, letraClicada]);
    if (palavraEscolhida.includes(letraClicada)) {
      acertouLetra(letraClicada);
    } else {
      errouLetra();
    }
  }

  function acertouLetra(letraClicada) {
    const novaPalavraJogo = [...palavraJogo];

    palavraEscolhida.forEach((letraEscolhida, i) => {
      if (palavraEscolhida[i] === letraClicada) {
        novaPalavraJogo[i] = letraEscolhida;
      }
    });
    setPalavraJogo(novaPalavraJogo);

    if (!novaPalavraJogo.includes(" _")) {
      setCorPalavra("verde");
      jogoFinalizado();
    }
  }

  function errouLetra() {
    const novosErros = numberErrors + 1;
    setNumberErrors(novosErros);
    if (novosErros === 6) {
      setCorPalavra("vermelho");
      setPalavraJogo(palavraEscolhida);
      jogoFinalizado();
    }
  }

  function jogoFinalizado() {
    setLetrasUsadas(alfabeto);
    setDesabilitarInput(true);
  }

  return (
    <>
      <GlobalStyle />
      <Jogo
        numberErrors={numberErrors}
        startGame={startGame}
        palavraJogo={palavraJogo}
        palavraEscolhida={palavraEscolhida}
        corPalavra={corPalavra}
      />
      <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra} />
      <Chute
        desabilitarInput={desabilitarInput}
        palavraChute={palavraChute}
        palavraJogo={palavraJogo}
      />
    </>
  );
}

export default App;
