import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Head from 'next/head'
import FlipImage from '../src/components/FlipImage'
import styles from '../styles/Beneficios.module.css'

export default function Beneficios() {

  return (
    <main className={styles.beneficiosContainer}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Ubuntu, ensino, solidariedade, educação'></meta>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site desenvolvido com o intuito de incentivar uma filosofia de ensino solidária.' />
        <meta name='author' content='Vinicius Minotti' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Ubuntu - Benefícios</title>
      </Head>
      <Navbar />
      <div className={styles.beneficiosFlex}>
        <FlipImage />
        <div className={styles.beneficiosImg}>
          <img src='/conhecimento.png' alt='Círculo composto com fotos de pessoas e uma lampâda no meio'/>
        </div>
      </div>
      <Footer />
    </main>
  )
}
