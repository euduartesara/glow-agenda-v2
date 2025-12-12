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
      width: "258.25px",
      height: "108px",
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      alignContent: "flex-start"
    }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            background: activeFilter === filter
              ? "linear-gradient(90deg, #9810FA, #FF4DA6)"
              : "#F3F4F6",
            color: activeFilter === filter ? "white" : "#6B7280",
            minWidth: "70px"
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}