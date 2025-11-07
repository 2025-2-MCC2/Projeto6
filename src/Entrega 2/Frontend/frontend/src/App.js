import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Menu from "./pages/menu"; // <- novo import
import DashboardWrapper from "./pages/DashboardWrapper";

function App() {
  return (
    <Router>
      <Routes>
        {/* Agora o Menu é a página inicial */}
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
