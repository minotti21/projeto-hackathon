import styles from '../../styles/Text.module.css'

export default function Text({ title, paragraph1 }) {
    return (
        <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{paragraph1}</p>
        </div>
    )
}