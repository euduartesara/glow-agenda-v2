"use client";

import { useState } from "react";

export default function CalendarBox() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  // Gerar calendário para outubro 2025
  const getCalendarDays = () => {
    const year = 2025;
    const month = 9; // outubro (0-indexed)
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Preencher dias vazios antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Preencher dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const days = getCalendarDays();
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  // Datas especiais
  const todayDate = 17;
  const highlightedDates = [17, 19, 20, 21, 22, 23, 24, 25]; // Exemplo de datas com agendamentos

  return (
    <div className="card-box" style={{ width: "280px", marginLeft: "20px", marginTop: "20px", height: "fit-content" }}>
      <div>
        <h2 className="section-title" style={{ marginTop: 0 }}>Calendário</h2>
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 16px 0" }}>Selecione uma data</p>
      </div>

      {/* Header do mês */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#111827" }}>‹</button>
        <span style={{ fontWeight: 700, fontSize: "14px", color: "#111827" }}>October 2025</span>
        <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#111827" }}>›</button>
      </div>

      {/* Dias da semana */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", marginBottom: "12px" }}>
        {dayNames.map((day) => (
          <div key={day} style={{ textAlign: "center", fontSize: "12px", fontWeight: "bold", color: "#999", padding: "4px 0" }}>
            {day}
          </div>
        ))}
      </div>

      {/* Dias do calendário */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
        {days.map((day, index) => {
          const isToday = day === todayDate;
          const isHighlighted = day && highlightedDates.includes(day);
          
          return (
            <div
              key={index}
              onClick={() => day && setSelectedDate(day)}
              style={{
                padding: "8px 4px",
                textAlign: "center",
                fontSize: "12px",
                borderRadius: "4px",
                cursor: day ? "pointer" : "default",
                background: isToday ? "#AD46FF" : isHighlighted ? "#DCFCE7" : "transparent",
                  color: isToday ? "white" : "#111827",
                  fontWeight: isHighlighted ? 700 : 500,
                border: selectedDate === day ? "2px solid #9810FA" : "none",
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #e0e0e0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#AD46FF", fontSize: "16px" }}>●</span> Hoje
          </p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#00C950", fontSize: "16px" }}>●</span> Disponível
          </p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#FB2C36", fontSize: "16px" }}>●</span> Lotado
          </p>
        </div>
      </div>
    </div>
  );
}
