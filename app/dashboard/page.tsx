import "./dashboard.css";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import ScheduleList from "./ScheduleList";
import CalendarBox from "./CalendarBox";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader />
        <StatsCards />

        <div style={{ display: "flex", marginTop: "0px", gap: 0 }}>
          <ScheduleList />
          <CalendarBox />
        </div>
      </main>
    </div>
  );
}
