import Button from "../actions/Button"
import Input from "../actions/Input"
import SocialLinks from "../actions/SocialMidiaLinks"
import Parag from "../texts/Parag"
import Title from "../texts/Title"

import styles from './Main.module.css'

import {useState} from 'react'

function Main() {
    const [email, setEmail] = useState([])


    

    function sendEmail(e){
        e.preventDefault();
        alert('Brinde enviado para o email: '+ email)
    }

    function handleChange(e){
        setEmail({...email, [e.target.email]: e.target.value})
        
    }
    return (
        <div className={styles.container}>

            <form>
                <Title title='Inscreva-se para fazer download do Ebook'/>

                <Parag title = 'Deixe abaixo o seu e-mail para receber um brinde, logo após o download do ebook.'/>

                <Input type='email' placeholder='Digite seu email...'
                onChange={handleChange}
                />               

                <Button title='Baixar Ebook' className={styles.btnSend}
                onChange={() => setEmail(email)}

                onClick={sendEmail}
                />
               
            </form>

            <Parag title='OU'/>

            <SocialLinks/>

            <p className={styles.showMore}>Quer saber mais sobre a Flower's Industry? 
                 <a href='/home'> Clique aqui</a>
            </p>

        </div>
    )
}

export default Main
