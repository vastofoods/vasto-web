import styles from './styles.module.css'
import Image from 'next/image';
import CardsComponent from '@/components/aboutcards/cards';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.containerImg} src={'/img/footerLogo.png'} width={800} height={800} alt='logo de vasto foods'></Image>
        <div className={styles.containerParagraph}>
          <p className={styles.containerParagraphText}>Optimizing the fresh produce supply chain from sourcing to sales</p>
        </div>
      </div>
      <div>
            <CardsComponent />
      </div>
    </>
  );
}