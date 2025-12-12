export default function CalendarBox() {
  return (
    <div className="card-box" style={{ width: "400px", marginLeft: "20px" }}>
      <h2 className="section-title">Calendário</h2>

      <div style={{ marginTop: "20px" }}>
        <p><span style={{ color: "#AD46FF" }}>●</span> Hoje</p>
        <p><span style={{ color: "#00C950" }}>●</span> Disponível</p>
        <p><span style={{ color: "#FB2C36" }}>●</span> Lotado</p>
      </div>
    </div>
  );
}
