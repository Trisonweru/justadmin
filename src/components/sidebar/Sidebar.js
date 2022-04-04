import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">justadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notifications</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color-options</div>
    </div>
  );
}

export default Sidebar;
