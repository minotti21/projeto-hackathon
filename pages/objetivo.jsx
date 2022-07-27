import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Text from '../src/components/Text'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Objetivo.module.css'


export default function Objetivo() {
  return (
    <main className={styles.objetivoContainer}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Ubuntu, ensino, solidariedade, educação'></meta>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site desenvolvido com o intuito de incentivar uma filosofia de ensino solidária.' />
        <meta name='author' content='Vinicius Minotti' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Ubuntu - Objetivo</title>
      </Head>
      <Navbar />
      <div className={styles.objetivoFlex}>
        <div className={styles.objetivoImg}>
          <Image src='/peopleTalking2.png' width={2500} height={2184} alt='Uma mulher e um homem conversando' />
        </div>
        <div className={styles.objetivoText}>
          <Text title='Um projeto com grandes ambições' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam iusto at. Ullam excepturi libero aperiam eveniet eum distinctio quidem pariatur. Ducimus tenetur laborum, nobis iste, natus quam minima assumenda eum eius, vitae dolor! Ab repudiandae aliquam explicabo alias commodi ducimus eaque accusamus officia. Ipsa tenetur libero ratione repellat laborum beatae, voluptates molestiae reiciendis commodi placeat omnis explicabo doloribus delectus!' />
        </div>
      </div>
      <Footer />
    </main>
  )
}
