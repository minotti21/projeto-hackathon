import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Head from 'next/head'
import styles from '../styles/Contato.module.css'
import Form from '../src/components/Form'
import Button from '../src/components/Button'
import FormSignUp from '../src/components/FormSignUp'

import { useState } from 'react'

export default function Contato() {

  const [isSignUpFormVisible, setIsSignUpFormVisible ] = useState(false)

  function turnVisible() {
    setIsSignUpFormVisible(true)
  }

  function turnOffVisible() {
    setIsSignUpFormVisible(false)
  }

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
        <div className={styles.contatoText}>
          <h1>Entre em contato conosco ou cadastre-se como um colaborador!</h1>
          <h2>Estamos abertos a receber todo tipo de feedback, preencha o formulário ao lado para nos enviar uma mensagem ou se preferir clique no botão abaixo e cadastre-se como um de nossos colaboradores, recebendo em seu e-mail informações exclusivas, como: locais de encontros, dicas que visam aumentar nosso círculo solidário e muito mais! </h2>
          <Button onClick={turnVisible} text='Cadastrar' />
          <Button onClick={turnOffVisible} text='Mensagem' />
        </div>
        <div className={styles.contatoEmpresas}>
          {isSignUpFormVisible ? <FormSignUp /> : <Form /> }
          
        </div>
      </div>
      <Footer />
    </main>
  )
}
