import styles from './styles.module.css'
import Image from 'next/image';
export default function Footer() {
    return (
      <div className={styles.container}>
        <Image src={'/img/carouselfootervasto.png'} alt='carousel vasto quality' fill></Image>
      </div>
    );
  }
  