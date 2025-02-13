import styles from './styles.module.css';
import Image from 'next/image';
import Link from "next/link";
import { InstagramLogo, LinkedinLogo, Phone, MapPinLine} from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  const text = "* VASTO QUALITY ";
  const repetitions = 6;
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
      {Array(repetitions).fill(text).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    <div className={styles.containerLogoredes}>
      <Image src={"/img/footerLogo.png"} width={190} height={92} alt='Isologo Vasto Foods'></Image>
      <p className={styles.containerBrandsMotto}>Cultivating Partnership, Harvesting Prosperity</p>
      <div>
      <div className={styles.contactDetails}><Phone size={32} /><p className={styles.contactText}>+528115167342</p></div>
      <div className={styles.contactDetails}><MapPinLine size={32} /><p className={styles.contactText}>San Pedro Garza Garcia, NL, 66256</p></div>
      </div>
      <div className={styles.containerIcons}>
      <Link href={'.7'}><LinkedinLogo size={32} /></Link>
      <Link href={'.7'}><InstagramLogo size={32} /></Link>
      </div>
      <p className={styles.containerCopy}>@VASTO FOODS 2025 - copyright florpastudio</p>
    </div>
  </div>
  )
}