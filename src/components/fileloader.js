import React, { useState } from "react";
import "../styles/fileloader.css";

function FileLoader(props) {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileSelection = (event) => {
    const files = event.target.files;
    // Check the size of each file and reject any files that exceed the maximum size (in bytes)
    const maxSize = props.maxSize || Infinity; // Set a default maximum size of Infinity if not provided
    const validFiles = Array.from(files).filter((file) => file.size <= maxSize);
    setSelectedFiles(validFiles);
  };

  const handleFileUpload = () => {
    // Do something with the selected files, e.g. index them
    console.log("Selected files:", selectedFiles);
  };

  const handleFileLoadClick = () => {
    // Programmatically click the hidden file input element when the container is clicked
    document.getElementById("file-input").click();
  };

  let selectedFilesCount;
  if (selectedFiles) {
    selectedFilesCount = selectedFiles.length;
  } else {
    selectedFilesCount = 0;
  }

  return (
    <div className="file-load" onClick={handleFileLoadClick}>
      {/* <label>Files to Index</label> */}
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFileSelection}
        accept=".txt"
        style={{ display: "none" }}
      />
      <button disabled={!selectedFiles} onClick={handleFileUpload}>
        Load Files
      </button>
      {props.maxSize && <p>Maximum file size: {props.maxSize} bytes</p>}
      <div className="selected-files">
        <p>Selected files: {selectedFilesCount}</p>
      </div>
    </div>
  );
}

export default FileLoader;
