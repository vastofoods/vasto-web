import styles from './styles.module.css'
export function FormInputs({text}) {
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor="">{text}</label>
        <input className={styles.input} type="text" />
      </div>
    );
  }

export function FormTextArea() {
    return (
      <div className={styles.container}>
        <label htmlFor=""></label>
        <textarea type="text" />
      </div>
    );
  }

export { FormInputs, FormTextArea }