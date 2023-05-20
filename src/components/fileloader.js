import React, { useState } from "react";
import "../styles/fileloader.css";
import axios from "axios";
import {toast} from "react-toastify";

function FileLoader({onSuccess, props}) {
    // const [selectedFiles, setSelectedFiles] = useState(null);

    // const handleFileSelection = (event) => {
    //     const files = event.target.files;
    //     const maxSize = props.maxSize || Infinity;
    //     const validFiles = Array.from(files).filter((file) => file.size <= maxSize);
    //     setSelectedFiles(validFiles);
    // };
    //
    // const handleFileUpload = () => {
    //     console.log("Selected files:", selectedFiles);
    //     // Add your file upload logic or API call here
    // };

    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    };


    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit} className={'file-form'}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>
            <button class={"submit-button"}>Submit</button>
        </form>);
}
//   return (
//     <div className="file-load">
//       <button onClick={() => document.getElementById("file-input").click()}>
//         Upload
//       </button>
//       {props.maxSize && <p>Maximum file size: {props.maxSize} bytes</p>}
//       <div className="selected-files">
//         <p>Selected files: {selectedFiles ? selectedFiles.length : 0}</p>
//       </div>
//       <input
//         id="file-input"
//         type="file"
//         multiple
//         onChange={handleFileSelection}
//         accept=".txt"
//         style={{ display: "none" }}
//       />
//     </div>
//   );
// }


export default FileLoader;
