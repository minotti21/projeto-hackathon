import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Text from '../src/components/Text'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <Text title='Nosso objetivo é transformar pessoas através da soliedariedade mutua' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam iusto at. Ullam excepturi libero aperiam eveniet eum distinctio quidem pariatur. Ducimus tenetur laborum, nobis iste, natus quam minima assumenda eum eius, vitae dolor! Ab repudiandae aliquam explicabo alias commodi ducimus eaque accusamus officia. Ipsa tenetur libero ratione repellat laborum beatae, voluptates molestiae reiciendis commodi placeat omnis explicabo doloribus delectus!' />
          <Button text='Saiba Mais' />
        </div>
        <div className={styles.homeImg}>
          <Image src='/peopleTalking1.png' width={2400} height={2299} alt='Uma mulher e um homem conversando' />
        </div>
      </div>
      <Footer />
    </main>
  )
}
