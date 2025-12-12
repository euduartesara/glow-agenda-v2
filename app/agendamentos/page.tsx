import "../dashboard/dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import ScheduleList from "../dashboard/ScheduleList";
import CalendarBox from "../dashboard/CalendarBox";

export default function AgendamentosPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Agendamentos</h1>
            <p style={{ margin: 0, color: "#6B7280", fontWeight: 600 }}>Gerencie todos os agendamentos do salão</p>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 480 }}>
              <input
                placeholder="Buscar por cliente ou serviço..."
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid #E6E6E6", background: "white" }}
              />
            </div>

            <button style={{ padding: "10px 16px", borderRadius: 10, background: "linear-gradient(90deg,#9810FA,#FF4DA6)", color: "white", fontWeight: 700 }}>
              + Novo Agendamento
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ flex: 1 }}>
            <ScheduleList />
          </div>

          <div style={{ width: 320 }}>
            <CalendarBox />
          </div>
        </div>
      </main>
    </div>
  );
}
