import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth-style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // ✅ para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");
        console.log("Usuário logado:", data.user);

        // ✅ Salva o token no localStorage (mantém login ativo)
        localStorage.setItem("token", data.token);

        // ✅ Redireciona para a página principal (Menu)
        navigate("/");
      } else {
        alert(data.message || "Email ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p>
          Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
