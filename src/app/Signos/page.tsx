'use client';
import React, { useState } from "react";
import {Card, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";

const SignosPage = () => {
  const [dataDeAniversario, setDataDeAniversario] = useState("");
  const [signo, setSigno] = useState("");

const getSigno = (mes: number, dia: number): string => {
  const signos = [
    { nome: "Capricórnio", inicio: { mes: 12, dia: 22 }, fim: { mes: 1, dia: 19 } },
    { nome: "Aquário", inicio: { mes: 1, dia: 20 }, fim: { mes: 2, dia: 18 } },
    { nome: "Peixes", inicio: { mes: 2, dia: 19 }, fim: { mes: 3, dia: 20 } },
    { nome: "Áries", inicio: { mes: 3, dia: 21 }, fim: { mes: 4, dia: 19 } },
    { nome: "Touro", inicio: { mes: 4, dia: 20 }, fim: { mes: 5, dia: 20 } },
    { nome: "Gêmeos", inicio: { mes: 5, dia: 21 }, fim: { mes: 6, dia: 20 } },
    { nome: "Câncer", inicio: { mes: 6, dia: 21 }, fim: { mes: 7, dia: 22 } },
    { nome: "Leão", inicio: { mes: 7, dia: 23 }, fim: { mes: 8, dia: 22 } },
    { nome: "Virgem", inicio: { mes: 8, dia: 23 }, fim: { mes: 9, dia: 22 } },
    { nome: "Libra", inicio: { mes: 9, dia: 23 }, fim: { mes: 10, dia: 22 } },
    { nome: "Escorpião", inicio: { mes: 10, dia: 23 }, fim: { mes: 11, dia: 21 } },
    { nome: "Sagitário", inicio: { mes: 11, dia: 22 }, fim: { mes: 12, dia: 21 } },
  ];

  for (const signo of signos) {
    if (
      (mes === signo.inicio.mes && dia >= signo.inicio.dia) ||
      (mes === signo.fim.mes && dia <= signo.fim.dia)
    ) {
      return signo.nome;
    }
  }
  return "Data inválida";
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const [, mes, dia] = dataDeAniversario.split('-').map(Number);
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
};

export default SignosPage;
