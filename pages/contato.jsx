import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Contato.module.css'

export default function Contato() {
  return (
    <main className={styles.contatoContainer}>
      <Navbar />

      <Footer />
    </main>
  )
}
