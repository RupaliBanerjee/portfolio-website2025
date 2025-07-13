import degree from "../../data/degree.json";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";
import certifications from "../../data/certifications.json";

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.certificationList}>
          {certifications.map((certification, id) => {
            return (
              <div key={id} className={styles.certification}>
                <div className={styles.certification_imagecontainer}>
                  <a href={certification.link} title="View Certificate">
                    <img
                      src={getImageUrl(certification.imageSrc)}
                      className={styles.certificationLogo}
                      alt={`${certification.title} logo`}
                    />
                  </a>
                </div>

                {/* <div className={styles.certificationDetails}>
                  <h3>{certification.title}</h3>
                  <a href={certification.link} className={styles.viewBtn}>
                    View
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
        <ul className={styles.degreeList}>
          {degree.map((education, id) => {
            return (
              <li key={id} className={styles.degree}>
                <img
                  src={getImageUrl(education.imageSrc)}
                  alt={`${education.institution} logo`}
                />
                <div className={styles.degreeDetails}>
                  <h3>{education.institution}</h3>
                  <p>{education.course_name}</p>
                  <p>{`${education.startDate} - ${education.endDate}`}</p>
                  <ul>
                    {education.relevant_modules.map((module, id) => {
                      return <li key={id}>{module}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
