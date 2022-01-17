import styles from './Badge.module.css'

export default function Badge({ title }) {
  return <span className={styles.badge}> {title} </span>;
}
