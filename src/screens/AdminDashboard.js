// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import MonthlyRevenueChart from "../components/MonthlyRevenueChart";
import TopProductsChart from "../components/TopProductChart";
import TopProductsRatingChart from "../components/TopProductsRatingChart";
import ProductTable from "../components/ProductTable";
import axios from "axios";
import { BASE_URL } from "../actions/Api";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dashboard data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/dashboard/`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Extract data for each component
  const {
    users_count,
    orders_delivered_count,
    total_income,
    number_of_products,
    monthly_revenue,
    top_products,
    top_products_ratings,
    products_in_stock,
  } = data;

  const columns = [
    {
      Header: "Product",
      accessor: "name",
    },
    {
      Header: "In-Stock",
      accessor: "countInStock",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#e0e0e0",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {[
          { title: "Users", value: data.users_count },
          { title: "Orders Delivered", value: data.orders_delivered_count },
          {
            title: "Total Income",
            value: `$${data.total_income.toLocaleString()}`,
          },
          { title: "Number of Products", value: data.number_of_products },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.9)", // Lighter background for contrast
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              padding: "20px",
              textAlign: "center",
              border: "1px solid rgba(255, 165, 0, 0.3)", // Light orange border
              backdropFilter: "blur(10px)", // Glassmorphism effect
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              color: "#333", // Default text color for better readability
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#ff5722", // Orange color for titles
                marginBottom: "8px",
                transition: "color 0.3s ease",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#e94e77", // Deep red color for values
                fontWeight: "800",
                transition: "color 0.3s ease",
              }}
            >
              {item.value}
            </div>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.3)", // Slightly darker overlay for contrast
                zIndex: -1,
                transition: "opacity 0.3s ease",
                opacity: "0",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#ff5722" }}>
            Monthly Revenue
          </h2>
          <MonthlyRevenueChart data={data.monthly_revenue} />
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#ff5722" }}>
            Top Five Products by Quantity
          </h2>
          <TopProductsChart data={data.top_products} />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#ff5722" }}>
            Top Five Products by Rating
          </h2>
          <TopProductsRatingChart data={data.top_products_ratings} />
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#ff5722" }}>
            Product Table
          </h2>
          <ProductTable columns={columns} data={products_in_stock} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
