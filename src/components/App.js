import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";

import Forca0 from "../assets/forca0.png";
import Forca1 from "../assets/forca1.png";
import Forca2 from "../assets/forca2.png";
import Forca3 from "../assets/forca3.png";
import Forca4 from "../assets/forca4.png";
import Forca5 from "../assets/forca5.png";
import Forca6 from "../assets/forca6.png";

function App() {
  const [forca, setForca] = useState(Forca0);
  const [enabled, setEnabled] = useState(true);
  const [palavraChute, setPalavraChute] = useState("");
  const [random, setRandom] = useState([]);

  function randomWord() {
    setEnabled(false);
    setRandom(palavras[Math.floor(Math.random() * palavras.length)].split(""));
  }

  return (
    <>
      <GlobalStyle />
      <Jogo
        forca={forca}
        setForca={setForca}
        enabled={enabled}
        setEnabled={setEnabled}
        randomWord={randomWord}
        random={random}
        setRandom={setRandom}
      />
      <Letras enabled={enabled} setEnabled={setEnabled} />
      <Chute
        enabled={enabled}
        setEnabled={setEnabled}
        palavraChute={palavraChute}
        setPalavraChute={setPalavraChute}
        random={random}
        setRandom={setRandom}
      />
    </>
  );
}

export default App;
