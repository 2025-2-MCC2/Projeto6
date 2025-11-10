import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./db/connection.js"; // conexão com MySQL
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rotas
app.use("/api/auth", authRoutes); // login e registro
app.use("/", userRoutes);         // perfil e update

app.listen(process.env.PORT || 8081, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 8081}`);
});
