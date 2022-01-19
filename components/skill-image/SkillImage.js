import styles from "./SkillImage.module.css";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function SkillImage({ label, icon }) {
  const styleName = `${styles.devicon} ${icon}`;
  const triggers = ["hover", "focus"];

  return (
    <div className={styles.skill_wrapper}>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        trigger={triggers}
        overlay={<Tooltip id={label}>{label}</Tooltip>}
      >
        <i className={styleName}></i>
      </OverlayTrigger>
      <span className={styles.skill_label}>{label}</span>
    </div>
  );
}
