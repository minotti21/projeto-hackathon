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
            <Navbar />
            <div className={styles.depoimentosFlex}>
                <div>
                    <h1>Let's Code</h1>
                    <h2>Escola de programação.</h2>
                    <img src="letscode.png" alt="" />
                    <p>Um projeto com grandes ambições, feito com base em uma soliedariedade mútua. Aqui na Let's Code nós aplicamos e logo nos primeiros meses vimos os resultados dessa filosofia de ensino.</p>
                </div>
                <div>
                    <h1>Jaque Laurenti</h1>
                    <h2>Colaboradora.</h2>
                    <img src="profJaque.jpg" alt="" />
                    <p>É incrível fazer parte de algo que busca levar conhecimento a todos, Ubuntu é uma filosofia que leva as pessoas a fazerem o bem, após conhece-la, não só minha vida mas a de pessoas próximas a mim também mudaram.</p>
                </div>
                <div>
                    <img src="ifood.png" alt="" />
                    <h1>Ifood</h1>
                    <h2>Empresa do ramo alimentício.</h2>
                    <p>No iFood nossos colaboradores já foram conscientizados sobre o impacto que estar sempre disposto a ensinar pode ter em um contexto empresarial, colocando acima de tudo, a coletividade.</p>
                </div>
            </div>
            <div className={styles.depoimentosEmpresas}>
                <img src="4solution.png" alt="" />
                <img src="boomit.png" alt="" />
                <img src="brasilparalelo.png" alt="" />
                <img src="coodesh.png" alt="" />
                <img src="bancointer.png" alt="" />
                <img src="logoBtg.png" alt="" />
                <img src="monkey.png" alt="" />
                <img src="nttdata.png" alt="" />
                <img src="redetv.png" alt="" />
            </div>
            <Footer />
        </main>
    )
}
