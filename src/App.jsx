import styles from "./App.module.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
