'use client';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Bem-vindo ao nosso site!</h1>
        <p>Divirta-se e boa sorte!</p>
        <div className="row">
          <div className="col-md-4">
          </div>
        </div>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}