import styles from './styles.module.css'

export default function Footer() {
  const text = "* VASTO QUALITY ";
  const repetitions = 7;
  return (
  <p className='containerText'>{text.repeat(repetitions)}
  </p>
  )
}