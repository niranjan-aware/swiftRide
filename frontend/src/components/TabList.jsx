import React, { useState } from "react";
import "../css/TabList.css";
import TabDriverList from "./TabDriverList";
import TabCabList from "./TabCabList";

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
        {activeTab === "drivers" ? <TabDriverList /> : <TabCabList />}
      </div>
    </div>
  );
};

export default TabList;
