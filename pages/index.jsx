import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Navbar />
      <div className={styles.homeFlex}>
        <div className={styles.homeText}>
          <h1>Nosso objetivo é transformar pessoas através da soliedariedade mutua</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam iusto at. Ullam excepturi libero aperiam eveniet eum distinctio quidem pariatur. Ducimus tenetur laborum, nobis iste, natus quam minima assumenda eum eius, vitae dolor! Ab repudiandae aliquam explicabo alias commodi ducimus eaque accusamus officia. Ipsa tenetur libero ratione repellat laborum beatae, voluptates molestiae reiciendis commodi placeat omnis explicabo doloribus delectus!</p>
          <button>Saiba Mais</button>
        </div>
        <div className={styles.homeImg}>
          <img src="peopleTalking.png" alt="" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
