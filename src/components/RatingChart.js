import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { numReviews: 100, avgRating: 4.5, name: 'Product 1' },
    { numReviews: 50, avgRating: 3.8, name: 'Product 2' },
    { numReviews: 75, avgRating: 4.0, name: 'Product 3' },
    // More data
];

function RatingVsReviewsScatterChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
                <CartesianGrid />
                <XAxis dataKey="numReviews" name="Number of Reviews" />
                <YAxis dataKey="avgRating" name="Average Rating" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Products" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
}

export default RatingVsReviewsScatterChart;
