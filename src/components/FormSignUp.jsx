import { useState } from 'react'
import styles from '../../styles/FormSignUp.module.css'
import Label from './Label'
import Modal from './Modal'

export default function Form({ title }) {

    const dadosPessoa = {}

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [cpf, setCpf] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)

    function turnModalVisible() {
        setIsModalVisible(true)
    }

    function handleName(e) {
        setName(e.target.value)
        console.log(name)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
        console.log(email)
    }

    function handleAge(e) {
        setAge(e.target.value)
        console.log(age)
    }

    function handleCpf(e) {
        setCpf(e.target.value)
        console.log(cpf)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dadosPessoa.name = name
        dadosPessoa.age = age
        dadosPessoa.cpf = cpf
        dadosPessoa.email = email
        turnModalVisible()
        setTimeout(() => {
            setIsModalVisible(false)
        }, 2000);
        Array.from(document.querySelectorAll("input, textarea")).forEach(input => (input.value = ""))
        localStorage.setItem("dadosPessoa", JSON.stringify(dadosPessoa))
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <Label title='Nome: ' type='text' name='name' placeholder='Digite seu nome' onChange={handleName} />
            <Label title='Idade: ' type='number' name='age' placeholder='Digite sua idade' onChange={handleAge} />
            <Label title='CPF: ' type='number' name='cpf' placeholder='Digite seu cpf' onChange={handleCpf} />
            <Label title='E-mail: ' type='email' name='email' placeholder='Digite seu email' onChange={handleEmail} />
            <button onClick={handleSubmit} className={styles.btn}>Enviar</button>
            <Modal customClass={isModalVisible ? 'active' : ''} text='Cadastro Realizado!'/>

        </form>
    )
}
