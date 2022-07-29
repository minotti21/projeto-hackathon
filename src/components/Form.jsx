import { useState } from 'react'
import styles from '../../styles/Form.module.css'
import Label from './Label'
import Modal from './Modal'

export default function Form({title}) {

    const dadosMensagem = {}

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)

    function turnModalVisible() {
        setIsModalVisible(true)
    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dadosMensagem.name = name
        dadosMensagem.email = email
        dadosMensagem.message = message
        turnModalVisible()
        setTimeout(() => {
            setIsModalVisible(false)
        }, 2000);
        Array.from(document.querySelectorAll("input, textarea")).forEach(input => (input.value = ""))
        localStorage.setItem("dadosMensagem", JSON.stringify(dadosMensagem))
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <Label title='Nome: ' type='text' name='name' placeholder='Digite seu nome' onChange={handleName} />
            <Label title='E-mail: ' type='email' name='email' placeholder='Digite seu email' onChange={handleEmail} />
            <label><p>Mensagem: </p>
                <textarea name="message"placeholder='Digite sua mensagem' onChange={handleMessage}></textarea>
            </label>
            <button onClick={handleSubmit} className={styles.btn}>Enviar</button>
            <Modal customClass={isModalVisible ? 'active' : ''} text='Mensagem Enviada!'/>
        </form>
    )
}
