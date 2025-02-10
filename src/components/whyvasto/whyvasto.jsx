import styles from './styles.module.css'
import Image from 'next/image'
export default function WhyVasto () {
    

    return (
      <div className={styles.container} >
        <div>
            <div>
                <h5>Why <Image src={"/vasto.svg"} width={50} height={50} alt=''></Image> ?</h5>
            </div>
            <div>
                <div> <p>B2B platform supplying F&V to regional supermarkets</p> </div>
                <div> <p>For Producers</p> </div>
                <div> <p>For Regional Supermarket</p> </div>
            </div>
        </div>
      </div>
    ); 
  }