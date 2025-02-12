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
            <FormInputs text={'First name'} placeholder={"Susan"} type={"text"}/>
            <FormInputs text={'Last name'} placeholder={"Parker"} type={"text"}/>
            <FormInputs text={"Work e-mail address"} placeholder={"susanparker@company.com"} type={"email"}/>
            <FormInputs text={"Company"} placeholder={"-"} type={"text"}/>
            <FormInputs text={"Institution Type"} placeholder={"Select an option"} type={"dropdown"}/>
            <FormInputs text={"Phone number"} placeholder={"1122334455"}/>
            <FormTextArea text={"Your message"} />
          </div>
          <div className={styles.containerButton}>
            <button className={styles.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}