import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTours: 0,
    totalPartners: 0,
    totalUsers: 0,
    totalBookings: 0,
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // =======================
    // MOCK DATA
    // =======================

    const mockTours = [
      { created_at: "2025-01-12" },
      { created_at: "2025-01-20" },
      { created_at: "2025-02-05" },
      { created_at: "2025-03-09" },
      { created_at: "2025-03-12" },
      { created_at: "2025-04-01" },
    ];

    const mockPartners = [
      { created_at: "2025-01-01" },
      { created_at: "2025-02-10" },
      { created_at: "2025-03-22" },
    ];

    const mockUsers = new Array(28).fill({}); // 28 users
    const mockBookings = new Array(12).fill({}); // 12 bookings

    // Update stats
    setStats({
      totalTours: mockTours.length,
      totalPartners: mockPartners.length,
      totalUsers: mockUsers.length,
      totalBookings: mockBookings.length,
    });

    // ===== Convert to monthly chart =====
    const monthly = {};

    mockTours.forEach((item) => {
      const m = new Date(item.created_at).toLocaleString("en-US", {
        month: "short",
      });
      if (!monthly[m]) monthly[m] = 0;
      monthly[m]++;
    });

    // Format for chart.js
    const formatted = Object.keys(monthly).map((month) => ({
      month,
      tours: monthly[month],
    }));

    setChartData(formatted);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#1B5E20" }}>Admin Dashboard</h1>

      {/* ================= KPIs Boxes ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <KPIBox title="Total Tours" value={stats.totalTours} />
        <KPIBox title="Total Partners" value={stats.totalPartners} />
        <KPIBox title="Total Users" value={stats.totalUsers} />
        <KPIBox title="Total Bookings" value={stats.totalBookings} />
      </div>

      {/* ================= Chart ================= */}
      <h2 style={{ marginTop: "40px", color: "#1B5E20", marginBottom: "25px" }}>Tours Created Per Month</h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tours"
              stroke="#4CAF50"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// KPI Box Component
const KPIBox = ({ title, value }) => (
  <div
    style={{
      padding: "20px",
      background: "#8ce97dff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    }}
  >
    <h3>{title}</h3>
    <p style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "10px" }}>
      {value}
    </p>
  </div>
);

export default Dashboard;
