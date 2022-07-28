import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            
                <div className={styles.logo}>
                    <Link href="/"><img src="logo.png" alt="" /></Link>
                </div>
                <ul>
                    <li><Link href="/"><a>Início</a></Link></li>
                    <li><Link href="objetivo"><a>Objetivo</a></Link></li>
                    <li><Link href="beneficios"><a>Benefícios</a></Link></li>
                    <li><Link href="depoimentos"><a>Depoimentos</a></Link></li>
                    <li><Link href="contato"><a>Contato</a></Link></li>
                </ul>
             
        </nav>
    )
}
