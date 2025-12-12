import "../dashboard.css";
import "../poppins.css";
import Sidebar from "../Sidebar";
import Configuracoes from "../Configuracoes";

export default function ConfiguracoesPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <Configuracoes />
      </main>
    </div>
  );
}
