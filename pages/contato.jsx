import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Head from 'next/head'
import styles from '../styles/Contato.module.css'
import Form from '../src/components/Form'

export default function Contato() {
  return (
    <main className={styles.contatoContainer}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Ubuntu, ensino, solidariedade, educação'></meta>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site desenvolvido com o intuito de incentivar uma filosofia de ensino solidária.' />
        <meta name='author' content='Vinicius Minotti' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Ubuntu - Contato</title>
      </Head>
      <Navbar />
      <div className={styles.contatoFlex}>
        <div className={styles.contatoForm}>
          <Form />
        </div>
        <div className={styles.contatoEmpresas}>
          <h1>Olá</h1>
        </div>
      </div>
      <Footer />
    </main>
  )
}
