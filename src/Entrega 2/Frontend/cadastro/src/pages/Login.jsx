import { Link } from "react-router-dom";
import "../styles/auth-style.css";

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>
        <input placeholder="Email" />
        <input placeholder="Senha" type="password" />
        <button>Entrar</button>
        <p>
          Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
