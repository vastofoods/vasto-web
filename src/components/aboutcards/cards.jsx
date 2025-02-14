import { CardsTeam } from '@/UI/cards/cards';
import styles from './styles.module.css'


export default function CardsComponent() {

    const descriptions = [
        {
            title: 'Ernesto Benavides',
            image: '/img/ernestovastojpg.jpg',
            subtitles: 'FOUNDER & CEO',
            item1: '⯌ Experience of 5 years working in the Mercado de Abastos in Monterrey, Mexico',
            item2: '⯌ Deep understanding of regional supermarkets and F&V supply chain challenges',
            item3: '⯌ In charge of day-to-day operations, leads product, and spearheads comany vision',
        },
        {
            title: 'Eugenio Benavides',
            image: '/img/eugeniovasto.jpg',
            subtitles: 'CO-FOUNDER & CFO',
            item1: '⯌ B.Sc. Public Accounting & Finance M.Sc. Tax',
            item2: '⯌ Founder of MyCFO, a finance and tax consulting firm highly focused on venture-backed startups',
            item3: '⯌ In charge of the strategin roadmap and structuring of Vasto. ',
        },
    ]
return (
    <>
    <div className={styles.container}>
        <div className={styles.containerCards}>
        {descriptions.map((card, index) => (
            <CardsTeam key={index} title={card.title} subtitle={card.subtitles} item1={card.item1} item2={card.item2} item3={card.item3} image={card.image}/>
        ))}
        </div>
    </div>
    </>
);
}