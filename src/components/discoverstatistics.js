import React from "react";
import '../styles/discoverstatistics.css';

function DiscoverStatistics({setStatistics}) {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const newStatistics = selectedValue === "yes" ? 1 : 0;
        setStatistics(newStatistics);
    };

    return (
        <div className="discover-container">
            <p className="discover-title">Discover statistics</p>
            <select className="discover-list" onChange={handleSelectChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    );
}

export default DiscoverStatistics;
