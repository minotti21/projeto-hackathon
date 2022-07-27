import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logo}>
               <img src="logo.png" alt='Logo com nome ubuntu e um globo conectado om pontinhos'></img>
            </div>
            <ul>
                <li><Link href="/"><a>Início</a></Link></li>
                <li><Link href="/projeto"><a>Projeto</a></Link></li>
                <li><Link href="beneficios"><a>Benefícios</a></Link></li>
                <li><Link href="contato"><a>Contato</a></Link></li>
            </ul>
        </nav>
    )
}
