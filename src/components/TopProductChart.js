// src/components/TopProductsChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopProductsChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default TopProductsChart;
