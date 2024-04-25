import React, { useState } from "react";
import SideBar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  
  return (
    <div className="home-container">
  <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    <div className={sidebarOpen ? "open-container": "closed-container"}>
    <MainPage/>
    </div>
    </div>
  );
}
