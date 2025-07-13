import { getImageUrl } from "../../utils";
import styles from "../Profile/Profile.module.css";
const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Rupali</h1>
        <p className={styles.description}>
          I&apos;m a fullstack developer with 5years of experience using
          Frontend programming languages and frameworks. Reach out if you&apos;d
          like to learn more!
        </p>
        <a
          href="mailto:rupali.banerjee024@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="profile image"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Profile;
