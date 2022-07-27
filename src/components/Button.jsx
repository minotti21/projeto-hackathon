import styles from '../../styles/Button.module.css'
import Link from 'next/link'

export default function Button({text}) {
    return <Link href='/objetivo'><button className={styles.btn}>{text}</button></Link>
}
