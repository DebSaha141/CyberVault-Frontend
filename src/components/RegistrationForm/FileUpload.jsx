import React, { useState } from "react";
import styles from './styles/registrationForm.module.scss'

const FileUpload = ({ field,register,error }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // if (onFileChange) {
    //   onFileChange(file); // Pass the file to the parent component if needed
    // }
  };

    return (
        <div className={styles.cyberformgroup}>
        <label htmlFor={field.fieldName} className="cyber-label">
          {field.label.toUpperCase()}
        </label>
    <div className={styles.fileUploadContainer}>
      <label htmlFor={field.fieldName} className={styles.fileLabel}>
        {selectedFile ? selectedFile.name : "Choose a file"}
      </label>
      <input
        type="file"
        className={styles.fileInput}
        id={field.fieldName}  
        onChange={handleFileChange}
      />
            </div>
            </div>
  );
};

export default FileUpload;
