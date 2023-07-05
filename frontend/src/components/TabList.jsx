import React, { useState } from "react";
import "../css/TabList.css";
import DriverList from "./DriverList";
import CabList from "./CabList";

const TabList = () => {
  const [activeTab, setActiveTab] = useState("drivers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-list-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "drivers" ? "active" : ""}`}
          onClick={() => handleTabChange("drivers")}
        >
          Drivers
        </button>
        <button
          className={`tab-button ${activeTab === "cabs" ? "active" : ""}`}
          onClick={() => handleTabChange("cabs")}
        >
          Cabs
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "drivers" ? <DriverList /> : <CabList />}
      </div>
    </div>
  );
};

export default TabList;
