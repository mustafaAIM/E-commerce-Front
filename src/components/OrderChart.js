import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const data = [
    { name: 'Order 1', totalPrice: 400 },
    { name: 'Order 2', totalPrice: 300 },
    { name: 'Order 3', totalPrice: 300 },
    // More data
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function OrderTotalPricePieChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={data} dataKey="totalPrice" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default OrderTotalPricePieChart;
