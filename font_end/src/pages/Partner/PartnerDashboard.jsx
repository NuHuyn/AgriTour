import React from "react";
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

const PartnerDashboard = () => {
  // Dữ liệu giả lập
  const data = [
    { name: "Jan", tours: 12, customers: 30 },
    { name: "Feb", tours: 18, customers: 45 },
    { name: "Mar", tours: 25, customers: 60 },
    { name: "Apr", tours: 15, customers: 50 },
  ];

  return (
    <div className="partner-dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="dashboard-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="tours" stroke="#8884d8" />
            <Line type="monotone" dataKey="customers" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Tổng số Tour</h3>
          <p>70</p>
        </div>
        <div className="summary-card">
          <h3>Tổng số Khách hàng</h3>
          <p>185</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
