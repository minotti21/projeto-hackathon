import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Text from '../src/components/Text'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Ubuntu, ensino, solidariedade, educação'></meta>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site desenvolvido com o intuito de incentivar uma filosofia de ensino solidária.' />
        <meta name='author' content='Vinicius Minotti' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Ubuntu - Início</title>
      </Head>
      <Navbar />
      <div className={styles.homeFlex}>
        <div className={styles.homeText}>
          <Text title='Transformando pessoas por meio da solidariedade mútua' paragraph1='Partimos de uma filosofia que está centrada nas pessoas, no compartilhamento de conhecimentos e na coletividade. Uma vez que você compartilha suas ideias, habilidades e competências, a sociedade é beneficamente contemplada com diferentes tipos de saberes: científico, filosófico,  empírico, popular, entre outros.' />
          <Link href='/objetivo'><a><Button text='Saiba Mais' /></a></Link>
        </div>
        <div className={styles.homeImg}>
          <img src='/peopleTalking1.png' alt='Uma mulher e um homem conversando' />
        </div>
      </div>
      <Footer />
    </main>
  )
}
