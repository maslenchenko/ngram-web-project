import React from "react";
import '../styles/discoverstatistics.css';

function DiscoverStatistics() {
  return (
    <div className="discover-container">
      <p className="discover-title">Discover some statistics</p>
      <select className="discover-list">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
}

export default DiscoverStatistics;
