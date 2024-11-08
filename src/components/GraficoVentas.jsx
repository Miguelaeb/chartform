// src/components/GraficoVentas.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GraficoVentas = ({ data }) => {
  return (
    <div className="chart-container">
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ventas" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default GraficoVentas;
