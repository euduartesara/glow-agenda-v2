"use client";

import "./sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaUser, FaCut, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { ScissorsIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="logo">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #9810FA, #FF4DA6)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ScissorsIcon style={{ width: "16px", height: "16px", color: "white" }} />
          </div>
          <div>
            <h2>GlowAgenda</h2>
            <p>Gerenciamento</p>
          </div>
        </div>
      </div>

      <nav className="menu">
        <Link href="/dashboard" className={`menu-item ${pathname === "/dashboard" ? "active" : ""}`}><FaHome /> Dashboard</Link>
        <Link href="/agendamentos" className={`menu-item ${pathname === "/agendamentos" ? "active" : ""}`}><FaCalendarAlt /> Agendamentos</Link>
        <Link href="/clientes" className={`menu-item ${pathname === "/clientes" ? "active" : ""}`}><FaUser /> Clientes</Link>
        <Link href="/servicos" className={`menu-item ${pathname === "/servicos" ? "active" : ""}`}><FaCut /> Serviços</Link>
        <Link href="#" className="menu-item"><FaChartBar /> Relatórios</Link>
        <Link href="#" className="menu-item"><FaCog /> Configurações</Link>
      </nav>

      <button className="exit">
        <FaSignOutAlt />
        Sair
      </button>
    </aside>
  );
}
