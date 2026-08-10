import {
  RefreshCw,
  Database,
  CheckCircle,
  Download,
} from "lucide-react";

function Recovery() {
  const backups = [
    {
      name: "Project_Backup_01",
      date: "Today • 10:42 AM",
      size: "4.8 GB",
    },
    {
      name: "Database_Backup",
      date: "Yesterday • 08:15 PM",
      size: "2.1 GB",
    },
    {
      name: "Documents_Backup",
      date: "Aug 8 • 06:30 PM",
      size: "1.7 GB",
    },
  ];

  return (
    <div className="recovery-page">

      <div className="recovery-header">
        <div>
          <h1>Disaster Recovery</h1>

          <p>
            Restore your data from a previously created backup.
          </p>
        </div>
      </div>


      <div className="recovery-container">

        <div className="recovery-list">

          <div className="recovery-title">
            <h2>Available Backups</h2>

            <span>
              {backups.length} backups available
            </span>
          </div>


          {backups.map((backup, index) => (

            <div className="recovery-item" key={index}>

              <div className="recovery-icon">
                <Database size={22} />
              </div>


              <div className="recovery-info">

                <strong>
                  {backup.name}
                </strong>

                <span>
                  {backup.date} • {backup.size}
                </span>

              </div>


              <button className="restore-button">

                <Download size={17} />

                Restore

              </button>

            </div>

          ))}

        </div>


        <div className="recovery-status">

          <RefreshCw size={42} />

          <h2>Recovery Ready</h2>

          <p>
            Your backups are available for recovery.
            Select a backup to restore your data.
          </p>


          <div className="recovery-check">

            <CheckCircle size={20} />

            <span>
              Backup integrity verified
            </span>

          </div>


          <div className="recovery-check">

            <CheckCircle size={20} />

            <span>
              Recovery system ready
            </span>

          </div>


          <div className="recovery-check">

            <CheckCircle size={20} />

            <span>
              AWS S3 storage available
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recovery;