import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

import reset from "../styles/reset.css";
import app from "../styles/app.css";

import Forca0 from "../assets/forca0.png";
import Forca1 from "../assets/forca1.png";
import Forca2 from "../assets/forca2.png";
import Forca3 from "../assets/forca3.png";
import Forca4 from "../assets/forca4.png";
import Forca5 from "../assets/forca5.png";
import Forca6 from "../assets/forca6.png";
import { useState } from "react";

function App() {
  const [forca, setForca] = useState(Forca0);
  const [enabled, setEnabled] = useState("disabled");
  return (
    <>
      <Jogo forca={forca} />
      <Letras enabled={enabled} />
      <Chute />
    </>
  );
}

export default App;
