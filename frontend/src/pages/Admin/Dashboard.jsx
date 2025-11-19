import React, { useEffect, useState } from "react";
import { useAuth } from "../../context-store/AuthContext";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/tours/admin/all", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setTours(data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };

    fetchTours();
  }, [user.token]);

  if (!user) return <p>Loading...</p>;

  // ========= Convert tours to monthly count =========
  const monthlyData = {};

  tours.forEach((tour) => {
    const month = new Date(tour.created_at).toLocaleString("en-US", {
      month: "short",
    });

    if (!monthlyData[month]) monthlyData[month] = 0;
    monthlyData[month]++;
  });

  // Convert to array for Chart
  const lineChartData = Object.keys(monthlyData).map((month) => ({
    month,
    count: monthlyData[month],
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2 style={{ marginTop: "30px" }}>Tours Created Per Month</h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#4CAF50"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
