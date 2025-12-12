"use client";

import { useState } from "react";
import "../dashboard/dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import ServicesStatsCards from "../dashboard/ServicesStatsCards";
import ServicesFilters from "../dashboard/ServicesFilters";
import ServicesList from "../dashboard/ServicesList";

export default function ServicosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Serviços</h1>
            <p style={{ margin: 0, color: "#6B7280", fontWeight: 600 }}>Gerencie todos os serviços do salão</p>
          </div>

          <button style={{ padding: "10px 16px", borderRadius: 10, background: "linear-gradient(90deg,#9810FA,#FF4DA6)", color: "white", fontWeight: 700 }}>
            + Novo Serviço
          </button>
        </div>

        <hr style={{ border: "none", height: "1px", background: "linear-gradient(90deg, transparent, #E6E6E6, transparent)", margin: "20px 0" }} />

        <div style={{ marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Gerencie seus serviços</h2>
          <p style={{ margin: "8px 0 0 0", color: "#6B7280", fontWeight: 600 }}>Ofereça os melhores serviços para seus clientes</p>
        </div>

        <ServicesStatsCards />

        <ServicesFilters onFilterChange={handleFilterChange} />

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ flex: 1 }}>
            <ServicesList filter={activeFilter} />
          </div>
        </div>
      </main>
    </div>
  );
}