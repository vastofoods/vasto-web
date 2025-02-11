import styles from './styles.module.css'
import { FormInputs, FormTextArea } from '@/UI/formInputs/forminputs';
export default function ContactForm() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}> Get in touch</h3>
          <p className={styles.pharagraph}>Complete our form and we will contact you</p>
        </div>
        <div>
          <div className={styles.containerInputsForm}>
            <FormInputs text={'First name'} />
            <FormInputs text={'Last name'} />
            <FormInputs text={"Work e-mail address"}/>
            <FormInputs text={"Company"}/>
            <FormInputs text={"Institution Type"}/>
            <FormInputs text={"Phone number"}/>
            <FormTextArea />
          </div>
        </div>
      </div>
    </div>
  );
}