import { CardsTeam } from '@/UI/cards/cards';
import styles from './styles.module.css'

 
 
export default function CardsComponent() {

    const descriptions = [
        {
            title: 'Title 1',
            image: '/img/centralizedicon.png',
            Subtitles: 'Subtitle 1',
            description: 'Description 1',
        },
        {
            title: 'Title 2',
            image: '/img/centralizedicon.png',
            Subtitles: 'Subtitle 2',
            description: 'Description 2',
        },
        {
            title: 'Title 3',
            image: '/img/centralizedicon.png',
            Subtitles: 'Subtitle 2',
            description: 'Description 2',
        }
    ]
  return (
    /* Quiero mapear descritions y que por cada objeto me devuelva un CardsTeam */
    <div className={styles.container}>
        {descriptions.map((card, index) => (
            <CardsTeam key={index} title={card.title} subtitle={card.Subtitles} description={card.description} />
        ))}
    </div>
  );
}