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
                <div className={styles.flipFront}>
                    <h1>Testando</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iure dolorum. Veritatis quisquam voluptatibus, dolores quod similique quasi eveniet veniam perspiciatis assumenda iusto. Error fugiat esse accusantium, neque, dignissimos magni impedit et ducimus voluptates illo, deserunt iure architecto! Velit reprehenderit obcaecati id, laboriosam temporibus adipisci nihil? Natus magnam totam maiores.</p>
                </div>
                <div className={styles.flipBack}>
                    <img src="piramideAprendizado.png" alt="Pirâmide da Aprendizagem de Willian Glasser" />
                </div>
            </div>
        </div>
    )
}
