import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Beneficios.module.css'

export default function Beneficios() {
  return (
    <main className={styles.beneficiosContainer}>
      <Navbar />
    <div className={styles.beneficioFlex}>
      <div className={styles.flipContainer}>
        <div className={styles.flipper}>
          <div className={styles.front}>
            <img src="https://rubeus.com.br/wp-content/uploads/2020/10/PIRAMIDE-1-min.png"alt="Pirâmide da Aprendizagem de Willian Glasser" />
          </div>
          <div className={styles.back}>
            <h2>Você já ouviu falar que apendemos mais quando ensinamos ?</h2>
              <p> De acordo com a pirâmide da aprendizagem de William Glasses, cerca de 90% do conhecimento é retido quando ensinamos outras pessoas aquilo que aprendemos.
                </p>
              <p>
                Essa métodologia é aplicavel à qualquer cenário seja ele empresárial ou cotidiano e além de acelerar o processo ensino aprendizagem torna ele mais democrático pois, acredita-se que todos tem algo à ensinar e aprender
              </p>
          </div>
        </div>
        
      </div>
    </div>
      <Footer />
    </main>
  )
}
