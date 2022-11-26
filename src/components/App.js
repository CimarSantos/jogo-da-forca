import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";


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
  
  return (
    <>
      <GlobalStyle />
      <Jogo
        forca={forca}
        setForca={setForca}
        enabled={enabled}
        setEnabled={setEnabled}
      />
      <Letras enabled={enabled} setEnabled={setEnabled} />
      <Chute enabled={enabled} setEnabled={setEnabled} />
    </>
  );
}

export default App;
