import { Link } from "react-router-dom";
import React from "react";
import "../styles/menu.css";
import liderancasempaticas from "../assets/liderancasempaticas.png";

export default function menu() {
  return (
    <div className="menu">
      <header className="menu-header">
        <h1>Lideranças Empáticas</h1>
        <nav>
          <a href="#sobre">Sobre o Projeto</a>
          <a href="#como-ajudar">Como Ajudar</a>
          <Link to="/dashboard" className="btn btn-dashboard">Dashboard</Link>
          <a href="/Login" className="btn btn-doar">Cadastro / Login</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Juntos, podemos combater a fome.</h2>
          <p>
            O projeto <strong>Lideranças Empáticas</strong> mobiliza pessoas e instituições
            para arrecadar alimentos e ajudar famílias em situação de vulnerabilidade.
          </p>
        </div>
        <img
          src={liderancasempaticas}
          alt="lideranças-empaticas"
          className="hero-img"
        />
      </section>

      <section id="sobre" className="sobre">
        <h2>Sobre o Projeto</h2>
        <p>
          A <strong>campanha de arrecadação de alimentos</strong> visa unir forças
          entre estudantes, empresas e comunidades para fazer a diferença na vida
          de quem mais precisa. Cada quilo arrecadado é um passo rumo a um futuro
          com mais empatia e solidariedade.
        </p>
      </section>

      <section id="como-ajudar" className="como-ajudar">
        <h2>Como Você Pode Ajudar</h2>
        <div className="ajuda-opcoes">
          <div className="ajuda-card">
            <h3>🧺 Doando Alimentos</h3>
            <p>Leve sua doação até um dos nossos pontos de coleta espalhados pela cidade.</p>
          </div>
          <div className="ajuda-card">
            <h3>🤝 Divulgando o Projeto</h3>
            <p>Compartilhe nossa iniciativa nas redes sociais e convide seus amigos a participarem.</p>
          </div>
          <div className="ajuda-card">
            <h3>💡 Sendo Voluntário</h3>
            <p>Ajude na organização e entrega dos alimentos às famílias beneficiadas.</p>
          </div>
        </div>
      </section>

      <footer className="menu-footer">
        © {new Date().getFullYear()} Lideranças Empáticas — Todos os direitos reservados
      </footer>
    </div>
  );
}
