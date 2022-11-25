import Main from '../components/functions/Main'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import styles from './Home.module.css'

function Home(){
    return(
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home
