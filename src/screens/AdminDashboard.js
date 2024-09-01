// src/pages/Dashboard.js
import React from "react";
import MonthlyRevenueChart from "../components/MonthlyRevenueChart";
import TopProductsChart from "../components/TopProductChart";
import TopProductsRatingChart from "../components/TopProductsRatingChart";
import ProductTable from "../components/ProductTable";

const Dashboard = () => {
  // Mock data
  const monthlyRevenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4500 },
    { month: "May", revenue: 6000 },
    { month: "Jun", revenue: 5500 },
    { month: "Jul", revenue: 7000 },
    { month: "Aug", revenue: 6500 },
    { month: "Sep", revenue: 6200 },
    { month: "Oct", revenue: 6800 },
    { month: "Nov", revenue: 7200 },
    { month: "Dec", revenue: 7500 },
  ];

  const topProductsData = [
    { product: "Product A", quantity: 120 },
    { product: "Product B", quantity: 100 },
    { product: "Product C", quantity: 80 },
    { product: "Product D", quantity: 70 },
    { product: "Product E", quantity: 60 },
  ];

  const topProductsRatingData = [
    { product: "Product A", rating: 4.8 },
    { product: "Product B", rating: 4.6 },
    { product: "Product C", rating: 4.5 },
    { product: "Product D", rating: 4.3 },
    { product: "Product E", rating: 4.2 },
  ];

  const productTableData = [
    { product: "Product A", inStock: 30 },
    { product: "Product B", inStock: 20 },
    { product: "Product C", inStock: 15 },
    { product: "Product D", inStock: 10 },
    { product: "Product E", inStock: 5 },
  ];

  const columns = [
    {
      Header: "Product",
      accessor: "product",
    },
    {
      Header: "In-Stock",
      accessor: "inStock",
    },
  ];

  // Mock overall data
  const data = {
    users: 500,
    ordersDelivered: 450,
    totalIncome: 70000,
    numberOfProducts: 25,
  };

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
          { title: "Users", value: data.users },
          { title: "Orders Delivered", value: data.ordersDelivered },
          {
            title: "Total Income",
            value: `$${data.totalIncome.toLocaleString()}`,
          },
          { title: "Number of Products", value: data.numberOfProducts },
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
          <MonthlyRevenueChart data={monthlyRevenueData} />
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
          <TopProductsChart data={topProductsData} />
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
          <TopProductsRatingChart data={topProductsRatingData} />
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
          <ProductTable columns={columns} data={productTableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
