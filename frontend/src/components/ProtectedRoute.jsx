import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("userToken"); // verifica se está logado

  if (!token) {
    // Se não estiver logado, redireciona para login
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, permite acesso
  return children;
}
