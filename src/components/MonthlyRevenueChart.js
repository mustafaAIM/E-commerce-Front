// src/components/MonthlyRevenueChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyRevenueChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default MonthlyRevenueChart;
