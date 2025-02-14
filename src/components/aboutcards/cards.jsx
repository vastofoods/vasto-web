import { CardsTeam } from '@/UI/cards/cards';
import styles from './styles.module.css'


export default function CardsComponent() {

    const descriptions = [
        {
            title: 'Ernesto Benavides',
            image: '/img/ernestovastojpg.jpg',
            subtitles: 'FOUNDER & CEO',
            description: '⯌ Experience of 5 years working in the Mercado de Abastos in Monterrey, Mexico ⯌ Deep understanding of regional supermarkets and F&V supply chain challenges ⯌ In charge of day-to-day operations, leads product, and spearheads comany vision',
        },
        {
            title: 'Eugenio Benavides',
            image: '/img/eugeniovasto.jpg',
            subtitles: 'CO-FOUNDER & CFO',
            description: '⯌ B.Sc. Public Accounting & Finance / M.Sc. Tax ⯌ Founder of MyCFO, a finance and tax consulting firm highly focused on venture-backed startups ⯌ In charge of the strategin roadmap and structuring of Vasto. ',
        },
    ]
return (
    <div className={styles.container}>
        <div className={styles.containerTitle}>
            <h2>OUR TEAM</h2>
        </div>
        <div className={styles.containerCards}>
        {descriptions.map((card, index) => (
            <CardsTeam key={index} title={card.title} subtitle={card.subtitles} description={card.description} image={card.image}/>
        ))}
        </div>
    </div>
);
}