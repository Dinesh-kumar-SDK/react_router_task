import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import AllCourses from "./assets/Courses/AllCourses";
import FullStack from "./assets/Courses/Fullstack";
import DataScience from "./assets/Courses/DataScience";
import CyberSecurity from "./assets/Courses/CyberSecurity";
import Career from "./assets//Courses/Career";

const App = () => {
  return (

    <Router>
      <div>
        <header>
          <h1 style={{ textAlign: "center" }}>Course Navigation</h1>
        </header>

        {/* Navigation Menu */}
        <nav style={styles.nav}>
          <NavLink to="/" style={styles.link} activeStyle={styles.activeLink} exact>
            All
          </NavLink>
          <NavLink to="/fullstack" style={styles.link} activeStyle={styles.activeLink}>
            Full Stack Development
          </NavLink>
          <NavLink to="/datascience" style={styles.link} activeStyle={styles.activeLink}>
            Data Science
          </NavLink>
          <NavLink to="/cybersecurity" style={styles.link} activeStyle={styles.activeLink}>
            Cyber Security
          </NavLink>
          <NavLink to="/career" style={styles.link} activeStyle={styles.activeLink}>
            Career
          </NavLink>
        </nav>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<AllCourses />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    borderBottom: "2px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
  },
  activeLink: {

    fontWeight: "bold",
    borderBottom: "3px solid #28a745",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default App;