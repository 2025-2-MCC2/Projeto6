// routes/userRoutes.js
import express from "express";
import db from "../db/connection.js";
import bcrypt from "bcrypt";
import multer from "multer";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // pasta temporária para fotos

// ----- Buscar dados do usuário logado -----
router.get("/perfil", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.promise().query(
      "SELECT id, nome, email, telefone, foto FROM usuarios WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar dados do usuário" });
  }
});

// ----- Atualizar perfil -----
router.post("/update", authMiddleware, upload.single("foto"), async (req, res) => {
  const userId = req.user.id;
  const { nome, email, telefone, senha } = req.body;
  const foto = req.file ? req.file.path : null;

  try {
    // Se houver senha, hash
    const senhaHash = senha ? await bcrypt.hash(senha, 10) : null;

    let query = "UPDATE usuarios SET nome = ?, email = ?, telefone = ?";
    const params = [nome, email, telefone];

    if (senhaHash) {
      query += ", senha = ?";
      params.push(senhaHash);
    }

    if (foto) {
      query += ", foto = ?";
      params.push(foto);
    }

    query += " WHERE id = ?";
    params.push(userId);

    await db.promise().query(query, params);

    res.json({ message: "Perfil atualizado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao atualizar perfil" });
  }
});

// ----- Excluir conta -----
router.delete("/delete-account", authMiddleware, async (req, res) => {
  console.log("Rota /delete-account chamada");
  console.log("req.user.id:", req.user.id);

  const userId = req.user.id;

  try {
    const [result] = await db.promise().query(
      "DELETE FROM usuarios WHERE id = ?",
      [userId]
    );

    console.log("Resultado do DELETE:", result);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json({ message: "Conta excluída com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao excluir conta" });
  }
});

export default router;
