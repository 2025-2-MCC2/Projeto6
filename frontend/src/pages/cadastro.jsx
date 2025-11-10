import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth-style.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // ✅ para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setSenha("");
        navigate("/login"); // ✅ redireciona automaticamente para login
      } else {
        alert(data.message || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
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
          <button type="submit">Cadastre-se</button>
        </form>
        <p>
          Já tem conta? <Link to="/login">Fazer login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
