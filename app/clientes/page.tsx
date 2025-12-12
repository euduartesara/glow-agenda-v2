import "../dashboard/dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import ClientsStatsCards from "../dashboard/ClientsStatsCards";
import ClientsList from "../dashboard/ClientsList";

export default function ClientesPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Clientes</h1>
            <p style={{ margin: 0, color: "#6B7280", fontWeight: 600 }}>Gerencie todos os clientes do salão</p>
          </div>

          <button style={{ padding: "10px 16px", borderRadius: 10, background: "linear-gradient(90deg,#9810FA,#FF4DA6)", color: "white", fontWeight: 700 }}>
            + Novo Cliente
          </button>
        </div>

        <hr style={{ border: "none", height: "1px", background: "linear-gradient(90deg, transparent, #E6E6E6, transparent)", margin: "20px 0" }} />

        <div style={{ marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Gerencie sua base de clientes</h2>
          <p style={{ margin: "8px 0 0 0", color: "#6B7280", fontWeight: 600 }}>Acompanhe de uma forma atualizada!</p>
        </div>

        <ClientsStatsCards />

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <div style={{ width: 480 }}>
            <input
              placeholder="Buscar por nome, e-mail ou telefone..."
              style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid #E6E6E6", background: "white" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ flex: 1 }}>
            <ClientsList />
          </div>
        </div>
      </main>
    </div>
  );
}