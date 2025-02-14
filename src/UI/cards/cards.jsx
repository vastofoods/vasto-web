import styles from './styles.module.css'
import Image from 'next/image';

export function CardsTeam({ title, subtitle, description, image }) {
  return (
    <div className={styles.container}>
        <Image src={image} width={50} height={50} alt='foto'></Image>
        <h3> {title} </h3>
        <h4> {subtitle}</h4>
        <p>{description}</p>
    </div>
  );
}

