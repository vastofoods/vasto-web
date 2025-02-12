import styles from './styles.module.css';
import Image from 'next/image';
import {InstagramLogo, LinkedinLogo} from 'phosphor-react';

export default function Footer() {
  const text = "* VASTO QUALITY ";
  const repetitions = 7;
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
      {Array(repetitions).fill(text).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    <div>
      <Image src={"/img/footerLogo.png"} width={190} height={92} alt='Isologo Vasto Foods'></Image>
      <p className={styles.containerBrandsMotto}>Cultivating Partnership, Harvesting Prosperity</p>
      <div className={styles.containerIcons}>
      <LinkedinLogo size={32} />
      <InstagramLogo size={32} />
      </div>
      <p>copyright</p>
    </div>
  </div>
  )
}