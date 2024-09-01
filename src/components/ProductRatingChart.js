import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Product 1', avgRating: 4.5 },
    { name: 'Product 2', avgRating: 3.8 },
    { name: 'Product 3', avgRating: 4.0 },
    // More data
];

function ProductRatingBarChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgRating" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ProductRatingBarChart;
