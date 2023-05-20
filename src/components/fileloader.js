import React, { useState } from "react";
import "../styles/fileloader.css";

function FileLoader(props) {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileSelection = (event) => {
    const files = event.target.files;
    const maxSize = props.maxSize || Infinity;
    const validFiles = Array.from(files).filter((file) => file.size <= maxSize);
    setSelectedFiles(validFiles);
  };

  const handleFileUpload = () => {
    console.log("Selected files:", selectedFiles);
    // Add your file upload logic or API call here
  };

  return (
    <div className="file-load">
      <button onClick={() => document.getElementById("file-input").click()}>
        Load Files
      </button>
      {props.maxSize && <p>Maximum file size: {props.maxSize} bytes</p>}
      <div className="selected-files">
        <p>Selected files: {selectedFiles ? selectedFiles.length : 0}</p>
      </div>
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFileSelection}
        accept=".txt"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default FileLoader;
