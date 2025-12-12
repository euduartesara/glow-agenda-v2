"use client";

import { useState } from "react";

interface ServicesFiltersProps {
  onFilterChange: (filter: string) => void;
}

export default function ServicesFilters({ onFilterChange }: ServicesFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Cabelo", "Tratamento", "Coloração", "Barbearia", "Unhas"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="card-box" style={{
      marginTop: 20,
      marginBottom: 20,
      width: "1105px",
      height: "68px",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            background: activeFilter === filter
              ? "linear-gradient(90deg, #9810FA, #FF4DA6)"
              : "#F3F4F6",
            color: activeFilter === filter ? "white" : "#6B7280",
            minWidth: "80px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}