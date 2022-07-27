import { useState } from 'react'
import styles from '../../styles/Form.module.css'

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleName(e) {
        setName(e.target.value)
        console.log(name)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
        console.log(email)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
        console.log(message)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`Nome: ${name} \nEmail: ${email} \nMensagem: ${message}`)
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Ficou com alguma dúvida?Entre em contato conosco!</h1>
            <label htmlFor="">Nome:
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} />
            </label>

            <label htmlFor="">E-mail:
                <input type="email" name="email" placeholder='Digite seu email' onChange={handleEmail} />
            </label>
            <label htmlFor="">Mensagem:
                <textarea name="" id="" cols="30" rows="10" placeholder='Digite sua mensagem' onChange={handleMessage}></textarea>
            </label>
            <input className={styles.btn} type="submit"  />

        </form>
    )
}