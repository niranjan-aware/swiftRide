import React, { useState } from 'react';
import CabDetails from "./cabDetails"
import "./Home.css"
const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <CabDetails/>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
      </div>
    </div>
  );
};

export default Home;
