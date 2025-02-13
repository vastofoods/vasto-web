import styles from './styles.module.css'
export function CardsTeam({ title, subtitle, description }) {
  return (
    <div className={styles.container}>
        <h3> {title} </h3>
        <h4> {subtitle}</h4>
        <p>{description}</p>
    </div>
  );
}

