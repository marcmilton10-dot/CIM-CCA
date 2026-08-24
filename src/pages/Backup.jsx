import { useState } from "react";
import { Upload, File, CheckCircle, X } from "lucide-react";

function Backup() {
  const [file, setFile] = useState(null);
  const [backupComplete, setBackupComplete] = useState(false);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    setBackupComplete(false);
  };

  const createBackup = () => {
    if (!file) return;

    setBackupComplete(true);
  };

  return (
    <div className="backup-page">

      <div className="backup-header">
        <div>
          <h1>Create Backup</h1>
          <p>Select a file to create a secure backup.</p>
        </div>
      </div>

      <div className="backup-container">

        <div className="upload-box">

          {!file ? (
            <>
              <Upload size={45} />

              <h2>Upload a file</h2>

              <p>
                Select the file you want to backup.
              </p>

              <label className="upload-btn">
                Select File
                <input
                  type="file"
                  onChange={handleFile}
                  hidden
                />
              </label>
            </>
          ) : (
            <>
              <File size={45} />

              <h2>{file.name}</h2>

              <p>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

              <div className="file-actions">

                <button
                  className="primary-btn"
                  onClick={createBackup}
                >
                  <Upload size={18} />
                  Create Backup
                </button>

                <button
                  className="remove-btn"
                  onClick={() => setFile(null)}
                >
                  <X size={18} />
                  Remove
                </button>

              </div>
            </>
          )}

          {backupComplete && (
            <div className="success-message">
              <CheckCircle size={22} />
              Backup created successfully!
            </div>
          )}

        </div>

        <div className="backup-info-card">

          <h2>Backup Information</h2>

          <div className="info-row">
            <span>Storage</span>
            <strong>AWS S3</strong>
          </div>

          <div className="info-row">
            <span>Security</span>
            <strong>Encrypted</strong>
          </div>

          <div className="info-row">
            <span>Recovery</span>
            <strong>Available</strong>
          </div>

          <div className="info-row">
            <span>Status</span>
            <strong className="green">Protected</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Backup;
