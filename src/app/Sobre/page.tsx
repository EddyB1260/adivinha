'use client';
import React from "react";
import {Card, Button, Container } from "react-bootstrap";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";

const SobrePage = () => {
  return (
    <div>
      <header>
    <Header />
      </header>

      <Container className="mt-4">
 
<Card>
  <Card.Body>
    <Card.Title>Sobre o Adivinha</Card.Title>
    <Card.Text>
      Este é um aplicativo simples que permite aos usuários descobrir seus signos do zodíaco com base na data de nascimento.
    </Card.Text>
    <Link href="/">
      <Button variant="primary">Voltar para a Página Inicial</Button>
    </Link>
  </Card.Body>
</Card>

      </Container>
    </div>
  );
};
export default SobrePage;