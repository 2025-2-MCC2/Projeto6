// routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db/connection.js";

const router = express.Router();

// ----- ROTA DE CADASTRO -----
router.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  try {
    const hash = await bcrypt.hash(senha, 10);

    await db.promise().query(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hash]
    );

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    if (err.code === "ER_DUP_ENTRY") {
      res.status(400).json({ message: "Email já cadastrado" });
    } else {
      res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
  }
});

// ----- ROTA DE LOGIN -----
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const usuario = rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login realizado com sucesso!",
      user: { id: usuario.id, nome: usuario.nome, email: usuario.email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

export default router;
