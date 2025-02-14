import styles from './styles.module.css'
import Image from 'next/image';
import CardsComponent from '@/components/aboutcards/cards';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerParagraph}>
          <p className={styles.containerParagraphText}>Optimizing the fresh produce supply chain from sourcing to sales</p>
        </div>
      </div>
      <div className={styles.containerTitle}>
            <h2>OUR TEAM</h2>
        </div>
      <div>
            <CardsComponent />
      </div>
      {/* <div className={styles.containerSubtitle}>
            <h2>Consultants</h2>
        </div> */}
    </>
  );
}