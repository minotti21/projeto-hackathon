import styles from '../../styles/Modal.module.css'

export default function Modal({text, customClass}) {
    return (
        <div className={`${styles.modalContainer} ${styles[customClass]}`}>
            <p>{text}</p>
        </div>
    )
}
