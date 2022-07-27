import styles from '../../styles/Text.module.css'

export default function Text({ title, paragraph }) {
    return (
        <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}