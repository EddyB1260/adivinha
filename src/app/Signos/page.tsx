'use client';
import React, { useState } from "react";
import {Card, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";

const SignosPage = () => {
  const [dataDeAniversario, setDataDeAniversario] = useState("");
  const [signo, setSigno] = useState("");

  const getSigno = (mes: number, dia: number): string => {
if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Aquário";
if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Peixes";
if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Áries";
if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Touro";
if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Gêmeos";
if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Câncer";
if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leão";
if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgem";
if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpião";
if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitário";
if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricórnio";
return "Data inválida";
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const [mes, dia] = dataDeAniversario.split('-').map(Number);
    const signoCalculado = getSigno(mes, dia);
    setSigno(signoCalculado);
    console.log("Data:", dataDeAniversario, "| Signo:", signoCalculado);
  };

  const descricoesDosSignos: { [key: string]: string } = {
    "Aquário": "Criativo, independente e visionário. Gosta de inovação e liberdade.",
    "Peixes": "Sensível, intuitivo e sonhador. Valoriza conexões profundas.",
    "Áries": "Determinado, corajoso e impulsivo. Adora desafios e ação.",
    "Touro": "Confiável, paciente e teimoso. Busca conforto e estabilidade.",
    "Gêmeos": "Comunicativo, curioso e versátil. Ama aprender e conversar.",
    "Câncer": "Emocional, protetor e leal. É muito ligado à família.",
    "Leão": "Confiante, generoso e dramático. Brilha naturalmente e ama ser o centro.",
    "Virgem": "Detalhista, prático e perfeccionista. Gosta de organização.",
    "Libra": "Diplomático, gentil e equilibrado. Busca harmonia e beleza.",
    "Escorpião": "Intenso, misterioso e leal. Tem emoções profundas.",
    "Sagitário": "Aventureiro, otimista e sincero. Ama explorar e descobrir.",
    "Capricórnio": "Ambicioso, disciplinado e responsável. Foca em metas de longo prazo."
  };


  return (
    <div>
      <header>
       <Header />
        
        </header>

      <main>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Signos do Zodíaco</Card.Title>
            <Card.Text>
              Descubra mais sobre o seu signo do zodíaco e suas características.
              <div className="mt-3">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="dataDeAniversario">Selecione sua data de aniversário:</label>
                  <input
                    type="date"
                    id="dataDeAniversario"
                    value={dataDeAniversario}
                    onChange={(e) => setDataDeAniversario(e.target.value)}
                    required
                  />
                  <Button type="submit" className="btn btn-primary mt-2">Enviar</Button>
                </form>
                {signo && <p className="mt-3">✨ Seu signo é <strong>{signo}</strong>!</p>}
                {signo && (
                  <div className="mt-3">
                    <h5>Descrição do Signo:</h5>
                    <p>{descricoesDosSignos[signo]}</p>
                  </div>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </main>

      <footer>
        <div className="text-center mt-4">
          <Container className="py-3 bg-dark text-white">
        <p>Feito com ❤️ por Edson Basilio</p>
        <p>&copy; {new Date().getFullYear()} Adivinha. Todos os direitos reservados.</p>
        </Container>
        </div>
      </footer>
    </div>
  );
}
export default SignosPage;
