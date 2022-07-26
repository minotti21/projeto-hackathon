import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Projeto.module.css'

export default function Projeto() {
  return (
    <main className={styles.projetoContainer}>
      <Navbar />
      <div className={styles.projetoFlex}>
        <div className={styles.projetoImg}>
          <img src="peopleTalking2.png" alt="" />
        </div>
        <div className={styles.projetoText}>
          <h1>Um projeto com grandes ambições</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam iusto at. Ullam excepturi libero aperiam eveniet eum distinctio quidem pariatur. Ducimus tenetur laborum, nobis iste, natus quam minima assumenda eum eius, vitae dolor! Ab repudiandae aliquam explicabo alias commodi ducimus eaque accusamus officia. Ipsa tenetur libero ratione repellat laborum beatae, voluptates molestiae reiciendis commodi placeat omnis explicabo doloribus delectus!</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
