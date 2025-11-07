import React from "react";
import "./DashboardWrapper.css"; // vamos criar esse arquivo

export default function DashboardWrapper() {
  return (
    <div className="dashboard-wrapper">
      <iframe
        src="/dashboard/dashboard.html"
        title="Dashboard"
        className="dashboard-iframe"
      ></iframe>
    </div>
  );
}
