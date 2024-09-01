// src/components/TopProductsRatingChart.js
import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const TopProductsRatingChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Tooltip />
      <Pie data={data} dataKey="rating" nameKey="product" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label />
    </PieChart>
  </ResponsiveContainer>
);

export default TopProductsRatingChart;
