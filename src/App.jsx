import {
  Cloud,
  Database,
  HardDrive,
  ShieldCheck,
  Upload,
  Download,
  Clock,
  RefreshCw,
} from "lucide-react";

import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Backup from "./pages/Backup";
import Recovery from "./pages/Recovery";


function Dashboard() {
  return (
    <main className="main">

      <header className="header">

        <div>
          <h1>Backup Dashboard</h1>

          <p>
            Monitor your backup and disaster recovery system.
          </p>
        </div>

        <Link to="/backup" className="primary-btn">
          <Upload size={18} />
          Create Backup
        </Link>

      </header>


      <section className="stats">

        <div className="stat-card">
          <Database />
          <p>Total Backups</p>
          <h2>24</h2>
          <span>+3 this week</span>
        </div>


        <div className="stat-card">
          <HardDrive />
          <p>Storage Used</p>
          <h2>42.6 GB</h2>
          <span>42.6% used</span>
        </div>


        <div className="stat-card">
          <ShieldCheck />
          <p>System Status</p>
          <h2>Protected</h2>
          <span>All systems operational</span>
        </div>


        <div className="stat-card">
          <Clock />
          <p>Last Backup</p>
          <h2>Today</h2>
          <span>10:42 AM</span>
        </div>

      </section>


      <section className="dashboard-grid">

        <div className="panel">

          <div className="panel-title">
            <h2>Recent Backups</h2>

            <Link to="/backup">
              View All
            </Link>
          </div>


          <div className="backup">

            <div className="backup-icon">
              <Database size={20} />
            </div>

            <div className="backup-info">

              <strong>
                Project_Backup_01
              </strong>

              <span>
                Today • 10:42 AM • 4.8 GB
              </span>

            </div>

            <span className="completed">
              Completed
            </span>

          </div>


          <div className="backup">

            <div className="backup-icon">
              <Database size={20} />
            </div>

            <div className="backup-info">

              <strong>
                Database_Backup
              </strong>

              <span>
                Yesterday • 08:15 PM • 2.1 GB
              </span>

            </div>

            <span className="completed">
              Completed
            </span>

          </div>


          <div className="backup">

            <div className="backup-icon">
              <Database size={20} />
            </div>

            <div className="backup-info">

              <strong>
                Documents_Backup
              </strong>

              <span>
                Aug 8 • 06:30 PM • 1.7 GB
              </span>

            </div>

            <span className="completed">
              Completed
            </span>

          </div>

        </div>


        <div className="panel recovery">

          <RefreshCw size={34} />

          <h2>
            Disaster Recovery
          </h2>

          <p>
            Quickly restore your data from an
            available backup when a disaster occurs.
          </p>

          <Link
            to="/recovery"
            className="primary-btn"
          >
            <Download size={18} />
            Restore Backup
          </Link>

        </div>

      </section>


      <section className="aws-status">

        <Cloud size={25} />

        <div>

          <strong>
            AWS S3 Storage
          </strong>

          <span>
            Backup storage service
          </span>

        </div>

        <div className="connected">
          ● Connected
        </div>

      </section>

    </main>
  );
}


function App() {

  const location = useLocation();

  return (
    <div className="app">


      {/* SIDEBAR */}

      <aside className="sidebar">

        <Link
          to="/"
          className="logo"
        >

          <Cloud size={28} />

          <div>

            <h2>SWA</h2>

            <span>
              Backup & Recovery
            </span>

          </div>

        </Link>


        <nav>

          <Link
            to="/"
            className={`nav-item ${
              location.pathname === "/"
                ? "active"
                : ""
            }`}
          >
            Dashboard
          </Link>


          <Link
            to="/backup"
            className={`nav-item ${
              location.pathname === "/backup"
                ? "active"
                : ""
            }`}
          >
            Backups
          </Link>


          <Link
            to="/recovery"
            className={`nav-item ${
              location.pathname === "/recovery"
                ? "active"
                : ""
            }`}
          >
            Disaster Recovery
          </Link>


          <div className="nav-item">
            Backup History
          </div>


          <div className="nav-item">
            Settings
          </div>

        </nav>


        <div className="storage-box">

          <HardDrive size={20} />

          <div>

            <small>
              Storage Used
            </small>

            <strong>
              42.6 GB / 100 GB
            </strong>

          </div>

        </div>

      </aside>


      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />


        <Route
          path="/backup"
          element={
            <main className="main">
              <Backup />
            </main>
          }
        />


        <Route
          path="/recovery"
          element={
            <main className="main">
              <Recovery />
            </main>
          }
        />

      </Routes>

    </div>
  );
}


export default App;