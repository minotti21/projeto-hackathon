import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Projeto.module.css'

export default function Projeto() {
  return (
    <main className={styles.projetoContainer}>
      <Navbar />

      <Footer />
    </main>
  )
}
