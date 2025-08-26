import React, { useState, } from "react";
import { Button} from "react-bootstrap";

const MainContent: React.FC = () => {
  const [numeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
  const [tentativas, setTentativas] = useState(10);
  const [feedback, setFeedback] = useState("");


  const checarPalpite = () => {
    const inputElement = document.getElementById("palpite") as HTMLInputElement;
    const palpite = parseInt(inputElement.value);

    if (tentativas <= 1) {
      setFeedback(`Desculpe, sem tentativas restantes! O número era ${numeroAleatorio}.`);
      setTentativas(0);
      return;
    }

    if (palpite === numeroAleatorio) {
      setFeedback("Parabéns! Você acertou!");
    } else if (palpite < numeroAleatorio) {
      setFeedback(`🔻 Muito baixo! ${tentativas - 1} tentativas restantes.`);
      setTentativas(tentativas - 1);
    } else {
      setFeedback(`🔺 Muito alto! ${tentativas - 1} tentativas restantes.`);
      setTentativas(tentativas - 1);
    }
  };

  return (
    <div className="main-content">
      <h1>Adivinha</h1>
      <p>Adivinhe um número de 1 a 100</p>
      <input type="number" id="palpite" />
      <Button className="btn btn-secondary" onClick={checarPalpite}>Tentar</Button>
      <p id="feedback">{feedback}</p>

      <div className="tentativas">
        <p>Tentativas restantes: {tentativas}</p>
      </div>

    </div>
  );
};

export default MainContent;