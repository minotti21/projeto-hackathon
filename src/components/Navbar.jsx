import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

    const [isMenuActive, setIsMenuActive] = useState(false)

    function toggleActive() {
        setIsMenuActive(!isMenuActive)
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logo}>
                <Link href="/"><img src="logo.png" alt="" /></Link>
            </div>
            <div className={isMenuActive ? `${styles.hamburguerMenu} ${styles.active}` : styles.hamburguerMenu} onClick={toggleActive}>
            </div>
            <ul className={isMenuActive ? `${styles.menu} ${styles.open}` : styles.menu}>
                <li><Link href="/"><a>Início</a></Link></li>
                <li><Link href="objetivo"><a>Objetivo</a></Link></li>
                <li><Link href="beneficios"><a>Benefícios</a></Link></li>
                <li><Link href="depoimentos"><a>Depoimentos</a></Link></li>
                <li><Link href="contato"><a>Contato</a></Link></li>
            </ul>

        </nav>
    )
}
