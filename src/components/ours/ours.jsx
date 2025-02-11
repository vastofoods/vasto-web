import styles from './styles.module.css'
export default function Ours() {
  return (
    <div className={styles.container} >
        <div className={styles.textContainer}>
            <h4 className={styles.titleLeft}> OUR MISSION </h4>
            <div></div>
            <p className={styles.pharagraphLeft}> Transform regional supermarkets into the #1 choice for consumers in LatAm </p>
        </div>
        <div className={styles.textContainer}>
            <h4 className={styles.titleRight}> OUR VISION </h4>
            <div></div>
            <p className={styles.pharagraphRight}> Empower regional supermarkets to reclaim their customers </p>
        </div>
    </div>
  );
}
