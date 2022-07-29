import styles from '../../styles/FlipImage.module.css'
import { useState } from 'react'


export default function FlipImage() {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={styles.flipContainer}>
            <div className={isFlipped ? styles.flipped : styles.flip} onClick={handleClick}>
<<<<<<< HEAD
                 <div className={styles.flipFront}>
                     <h1>Você já ouviu falar que aprendemos mais quando ensinamos?</h1>
                        <p>   De acordo com a pirâmide da aprendizagem de William Glasses, 
                            cerca de 90% do conhecimento é retido quando ensinamos outras pessoas aquilo que aprendemos.
                        </p>
                        <p>   Essa métodologia é aplicavel à qualquer cenário seja ele empresárial ou cotidiano 
                            pois além de acelerar o processo ensino aprendizagem torna ele mais democrático e acredita-se que todos tem algo à ensinar e aprender.
                        </p>
                 </div>
=======
                <div className={styles.flipFront}>
                    <h1>Compartilhamento e Coletividade</h1>
                    <p>De acordo com a pirâmide da aprendizagem de William Glasses, cerca de 90% do conhecimento é retido quando ensinamos outras pessoas aquilo que aprendemos.</p>
                    <p> Essa métodologia é aplicavel à qualquer cenário seja ele empresárial ou cotidiano e além de acelerar o processo ensino aprendizagem torna ele mais democrático pois, acredita-se que todos tem algo à ensinar e aprender.
                    </p>
                    <p>Baseado nesse estudo propomos uma vertente onde aquele que ensina o que já sabe,  também obtém novas aprendizagens que estão sendo compartilhadas.</p>
                </div>
>>>>>>> 8909ac7a7207231b9775b98bd4460194eadf03a6
                <div className={styles.flipBack}>
                    <img src="piramideAprendizado.png" alt="Pirâmide da Aprendizagem de Willian Glasser" />
                </div>
            </div>
        </div>
    )
}
