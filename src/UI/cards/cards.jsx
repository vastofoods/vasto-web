import styles from './styles.module.css'
import Image from 'next/image';

export function CardsTeam({ title, subtitle, item1, item2, item3, image }) {
  return (
    <div className={styles.container}>
        <Image src={image} width={250} height={250} alt='foto de miembro del equipo' className={styles.cardImage}></Image>
        <h3> {title} </h3>
        <h4> {subtitle}</h4>
        <p className={styles.paragrpah}>{item1}</p>
        <p className={styles.paragrpah}>{item2}</p>
        <p className={styles.paragrpah}>{item3}</p>
    </div>
  );
}

