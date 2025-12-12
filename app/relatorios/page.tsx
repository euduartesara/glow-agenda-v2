import "../dashboard/dashboard.css";
import "../dashboard/poppins.css";
import Sidebar from "../dashboard/Sidebar";
import Relatorios from "../dashboard/Relatorios";

export default function RelatoriosPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <Relatorios />
      </main>
    </div>
  );
}
