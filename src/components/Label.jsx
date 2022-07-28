import styles from '../../styles/Label.module.css'

export default function Label({ title, type, name, placeholder, onChange }) {
    return (
        <label className={styles.labelContainer}>
            <p>{title}</p>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
        </label>
    )
}