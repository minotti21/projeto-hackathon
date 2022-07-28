import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Head from 'next/head'
import styles from '../styles/Depoimentos.module.css'


export default function Depoimentos() {

    return (
        <main className={styles.depoimentosContainer}>
            <Head>
                <meta charSet='utf-8' />
                <meta name='keywords' content='Ubuntu, ensino, solidariedade, educação'></meta>
                <meta name='robots' content='index, follow' />
                <meta name='description' content='Site desenvolvido com o intuito de incentivar uma filosofia de ensino solidária.' />
                <meta name='author' content='Vinicius Minotti' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <title>Ubuntu - Depoimentos</title>
            </Head>
            <Navbar/>
            <div>
                <h1>olá</h1>
            </div>
            <Footer/>
        </main>
    )
}
