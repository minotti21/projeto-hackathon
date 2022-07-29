import styles from '../../styles/FlipImage.module.css'
import { useState } from 'react'

export default function FlipImage() {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={styles.flipContainer}>
            <div className={isFlipped ? `${styles.flip} ${styles.flipped}` : styles.flip} onClick={handleClick}>
                <div className={styles.flipFront}>
                    <h1>Compartilhamento e Coletividade</h1>
                    <p>De acordo com a pirâmide da aprendizagem de William Glasses, cerca de 90% do conhecimento é retido quando ensinamos outras pessoas aquilo que aprendemos.</p>
                    <p>Essa metodologia é aplicavel a qualquer cenário seja ele empresarial, educacional ou cotidiano e além de acelerar o processo ensino aprendizagem torna ele mais democrático pois, acredita-se que todos tem algo a ensinar e aprender.
                    </p>
                    <p>Baseado nesse estudo propomos uma vertente onde aquele que ensina o que já sabe, também obtém novas aprendizagens que estão sendo compartilhadas.</p>
                </div>
                <div className={styles.flipBack}>
                    <img src="piramideAprendizado.png" alt="Pirâmide da Aprendizagem de Willian Glasser" />
                </div>
            </div>
        </div>
    )
}
