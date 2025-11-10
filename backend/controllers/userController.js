import db from "../db/connection.js";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nome, email, telefone, senha } = req.body;
    let fotoPath;

    // Salvar foto se houver
    if (req.file) {
      const tempPath = req.file.path;
      const ext = path.extname(req.file.originalname);
      const targetPath = `uploads/${userId}${ext}`;
      fs.renameSync(tempPath, targetPath);
      fotoPath = targetPath;
    }

    // Apenas campos existentes na tabela
    const validFields = ["nome", "email", "senha", "foto"]; // Adicione "telefone" se existir
    const fields = [];
    const values = [];

    if (nome) { fields.push("nome = ?"); values.push(nome); }
    if (email) { fields.push("email = ?"); values.push(email); }
    if (senha) {
      const hash = await bcrypt.hash(senha, 10);
      fields.push("senha = ?"); values.push(hash);
    }
    if (fotoPath) { fields.push("foto = ?"); values.push(fotoPath); }

    if (fields.length === 0) {
      return res.status(400).json({ message: "Nenhum dado para atualizar" });
    }

    values.push(userId);
    const sql = `UPDATE usuarios SET ${fields.join(", ")} WHERE id = ?`;

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao atualizar usuário" });
      }
      res.json({ message: "Perfil atualizado com sucesso!" });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
