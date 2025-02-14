import styles from './styles.module.css'
export function FormInputs({ text, placeholder, type, id }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">{text}</label>

      {type === "dropdown" ? (
        <select className={styles.input} placeholder={placeholder}>
          <option value="" disabled hidden className={styles.placeholderOption}>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      ) : (
        <input className={styles.input} type={type} placeholder={placeholder} id={id} />
      )}
    </div>
  );
}

export function FormTextArea({text, placeholder}) {
    return (
      <div className={styles.bigContainer}>
        <label className={styles.bigLabel} htmlFor="">{text} </label>
        <textarea className={styles.bigInput} type="text" placeholder={placeholder}/>
      </div>
    );
  }

