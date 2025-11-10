import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "../styles/menu.css";
import liderancasempaticas from "../assets/liderancasempaticas.png";
import perfilIcone from "../assets/perfil.png"; // 👈 ícone padrão

export default function Menu() {
  const [logado, setLogado] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Verifica login ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogado(!!token);
  }, []);

  // Fecha o menu se clicar fora da bolinha
  useEffect(() => {
    const handleClickFora = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMostrarMenu(false);
      }
    };

    document.addEventListener("click", handleClickFora);
    return () => document.removeEventListener("click", handleClickFora);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogado(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setMostrarMenu((prev) => !prev);
  };

  return (
    <div className="menu">
      <header className="menu-header">
        <h1>Lideranças Empáticas</h1>
        <nav>
          <a href="#sobre">Sobre o Projeto</a>
          <a href="#como-ajudar">Como Ajudar</a>
          <Link to="/dashboard" className="btn btn-dashboard">
            Dashboard
          </Link>

          {!logado ? (
            <Link to="/login" className="btn btn-doar">
              Cadastro / Login
            </Link>
          ) : (
            <div className="perfil-wrapper" ref={dropdownRef}>
              <img
                src={perfilIcone}
                alt="Perfil"
                className="perfil-icone"
                onClick={toggleMenu}
              />

              {mostrarMenu && (
                <div className="dropdown-menu">
                  <button
                    onClick={() =>
                      (window.location.href = "/dashboard/configurações.html")}>Meu Perfil
                  </button>
                  <button onClick={handleLogout}>Sair</button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Juntos, podemos combater a fome.</h2>
          <p>
            O projeto <strong>Lideranças Empáticas</strong> mobiliza pessoas e
            instituições para arrecadar alimentos e ajudar famílias em situação
            de vulnerabilidade.
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
          A <strong>campanha de arrecadação de alimentos</strong> visa unir
          forças entre estudantes, empresas e comunidades para fazer a diferença
          na vida de quem mais precisa. Cada quilo arrecadado é um passo rumo a
          um futuro com mais empatia e solidariedade.
        </p>
      </section>

      <section id="como-ajudar" className="como-ajudar">
        <h2>Como Você Pode Ajudar</h2>
        <div className="ajuda-opcoes">
          <div className="ajuda-card">
            <h3>🧺 Doando Alimentos</h3>
            <p>
              Leve sua doação até um dos nossos pontos de coleta espalhados pela
              cidade.
            </p>
          </div>
          <div className="ajuda-card">
            <h3>🤝 Divulgando o Projeto</h3>
            <p>
              Compartilhe nossa iniciativa nas redes sociais e convide seus
              amigos a participarem.
            </p>
          </div>
          <div className="ajuda-card">
            <h3>💡 Sendo Voluntário</h3>
            <p>
              Ajude na organização e entrega dos alimentos às famílias
              beneficiadas.
            </p>
          </div>
        </div>
      </section>
      <footer className="menu-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Sobre</h4>
            <p>
              Lideranças Empáticas mobiliza pessoas e instituições para ajudar
              famílias em vulnerabilidade.
            </p>
          </div>

          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#como-ajudar">Como Ajudar</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/liderancasempaticas/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/projeto-lideran%C3%A7as-emp%C3%A1ticas/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Lideranças Empáticas — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
