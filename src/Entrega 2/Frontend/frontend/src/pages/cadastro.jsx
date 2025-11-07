import { Link } from "react-router-dom";
import "../styles/auth-style.css";

function cadastro() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Cadastro</h2>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Senha" type="password" />
        <button>Cadastre-se</button>
        <p>
          Já tem conta? <Link to="/login">Fazer login</Link>
        </p>
      </div>
    </div>
  );
}

export default cadastro;
