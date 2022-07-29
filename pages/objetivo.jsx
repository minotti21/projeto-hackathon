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
          title='' 
          paragraph1='Queremos mostrar as pessoas que elas são capazes de ajudar a democratizar a educação a partir de pequenas ações, ao compartilhar conhecimento, assume-se o papel de agente da educação, transformado de certo ponto a vida daqueles que foram os receptores. ' 
          paragraph2='Paulo Freire uma vez citou: "Educação não transforma o mundo, educação muda as pessoas, pessoas transformam o mundo.'/>
          
        </div>
      </div>
      <Footer />
    </main>
  )
}
