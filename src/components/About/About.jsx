import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              className={styles.menuItemsImage}
              alt="Cursor Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Senior Frontend Developer</h3>
              <p>
                I am a Senior frontend developer with experience in implementing
                optimized frontend architecture with enhanced accessibility
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              className={styles.menuItemsImage}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Senior Software Engineer- Fullstack</h3>
              <p>
                As a Senior Software Engineer I am proficient in MERN stack
                development and web site optimization
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              className={styles.menuItemsImage}
              alt="UI Dev Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Developer</h3>
              <p>
                Talented Frontend Developer Specializing in HTML, CSS, and
                JavaScript with focus on enhancing and building reusable
                components across different modules that significantly improved
                efficiency and maintainability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
