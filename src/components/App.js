import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import alfabeto from "../alfabeto";

function App() {
  const [numberErrors, setNumberErrors] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [palavraChute, setPalavraChute] = useState("");
  const [randomWord, setRandomWord] = useState([]);
  const [usedLetters, setUsedLetters] = useState(alfabeto);
  const [sortWord, setSortWord] = useState([]);

  function startGame() {
    setEnabled(false);
    setUsedLetters([]);
    sortRandomWord();
  }

  function sortRandomWord() {
    const i = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[i];
    const arrayWord = palavra.split("");
    setSortWord(palavra);

    let wordTraces = [];
    arrayWord.forEach(() => wordTraces.push(" _"));
    setRandomWord(wordTraces);
  }

  return (
    <>
      <GlobalStyle />
      <Jogo
        numberErrors={numberErrors}
        startGame={startGame}
        randomWord={randomWord}
        sortWord={sortWord}
      />
      <Letras
        enabled={enabled}
        setEnabled={setEnabled}
        usedLetters={usedLetters}
      />
      <Chute
        enabled={enabled}
        palavraChute={palavraChute}
        randomWord={randomWord}
      />
    </>
  );
}

export default App;
