import React, {useState} from "react";
import "../styles/fileloader.css";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

function FileLoader({onSuccess}) {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFileSelection = (event) => {
        const files = event.target.files;
        const allowedExtensions = [".txt"];
        const maxSize = 5242880; // Maximum file size in bytes (5MB)
        const selectedFiles = Array.from(files).filter((file) => {
            const fileName = file.name;
            const fileExtension = fileName.substring(
                fileName.lastIndexOf(".")
            ).toLowerCase();
            const isAllowedExtension = allowedExtensions.includes(fileExtension);
            const isWithinMaxSize = file.size <= maxSize;
            return isAllowedExtension && isWithinMaxSize;
        });

        setSelectedFiles(selectedFiles);
        if (selectedFiles.length === 0) {
            toast.error("Invalid file format or size. Only .txt files up to 5MB are allowed.");
        } else {
            toast.success("Files added successfully!");
        }
    };

    const handleFileUpload = () => {
        if (selectedFiles) {
            const data = new FormData();

            for (let i = 0; i < selectedFiles.length; i++) {
                data.append("file", selectedFiles[i]);
            }

            axios
                .post("//localhost:8000/upload", data)
                .then((response) => {
                    toast.success("Files uploaded successfully!");
                    onSuccess(response.data);
                })
                .catch((e) => {
                    toast.error("Upload Error");
                });
        } else {
            toast.error("No files selected.");
        }
    };

    return (
        <div className="file-load">
            <div className="selected-files">
                <p>Files: {selectedFiles ? selectedFiles.length : 0}</p>
            </div>
            <button className="select-button" onClick={() => document.getElementById("file-input").click()}>
                Select
            </button>
            <input
                id="file-input"
                type="file"
                multiple
                onChange={handleFileSelection}
                accept=".txt"
                style={{display: "none"}}
            />
            <button className="upload-button" onClick={handleFileUpload}>
                Upload
            </button>
            <div className="notification"><ToastContainer/></div>
        </div>
    );
}

export default FileLoader;

