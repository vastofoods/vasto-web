import styles from './styles.module.css'

export default function Welcomeinitial() {
    return (
        <div className={styles.container}>
            <p className={styles.containerText}>Regional supermarkets <b className={styles.containerBold}>suffer from 
significant volatility in quality, supply, and 
price of produce</b> due to highly marginalized 
suppliers, less purchasing power, and less 
technology than their national and 
international competitors</p>
        </div>
    );
}