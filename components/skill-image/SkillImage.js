import styles from "./SkillImage.module.css";

export default function SkillImage({ label, icon }) {
  const styleName = `${styles.devicon} ${icon}`;
  return (
    <div className={styles.skill_wrapper}>
      <i className={styleName}></i>
      <span className={styles.skill_label}>{label}</span>
    </div>
  );
}
