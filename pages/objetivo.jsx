import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Text from '../src/components/Text'
import Head from 'next/head'
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
          <img src='/peopleTalking2.png' alt='Uma mulher e um homem conversando' />
        </div>
        <div className={styles.objetivoText}>
          <Text
            title='Comprometimento e Responsabilidade'
            paragraph1='Nosso objetivo é transformar o atual modelo de ensino através da coletividade, acreditamos que todas as pessoas são capazes de contribuir, a partir de pequenas ações, porém não menos relevantes,  com a  Democratização da Educação. Ao compartilharmos nossos conhecimentos assumimos o papel de agentes da educação proporcionando o engajamento e a  transformação das pessoas que estão em busca de desenvolvimento. ' />
          <div className={styles.objetivoCitação}>
            <p>&ldquo;Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.&rdquo;</p>
            <span>Paulo Freire</span>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}
