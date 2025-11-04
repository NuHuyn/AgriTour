import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./PartnerLayout.css";

const PartnerDashboard = ({ user }) => {
  const [tours, setTours] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.user_id) return;

    // 📦 Lấy danh sách tour của partner
    const url = `http://localhost:8081/api/tours?role=${user.role}&created_by=${user.user_id}`;
    console.log("📡 Fetching tours for dashboard:", url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Tours received:", data);
        setTours(data);

        // 👉 Gom dữ liệu theo tháng (dựa vào start_date)
        const grouped = {};

        data.forEach((tour) => {
          const date = new Date(tour.start_date);
          const month = date.toLocaleString("en-US", { month: "short" }); // ví dụ: Jan, Feb
          grouped[month] = (grouped[month] || 0) + 1;
        });

        // Chuyển về dạng biểu đồ
        const chartArr = Object.entries(grouped).map(([month, count]) => ({
          name: month,
          tours: count,
        }));

        setChartData(chartArr);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch tours error:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="partner-dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="dashboard-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="tours" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Number of Tours</h3>
          <p>{tours.length}</p>
        </div>
        <div className="summary-card">
          <h3>Number of tours are pending</h3>
          <p>{tours.filter((t) => t.status === "pending").length}</p>
        </div>
        <div className="summary-card">
          <h3>Number of tours are approved by admin</h3>
          <p>{tours.filter((t) => t.status === "approved").length}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
