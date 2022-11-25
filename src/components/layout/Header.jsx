import styles from './Header.module.css'
import {GiButterflyFlower} from 'react-icons/gi'

function Header(){
    return (
        <nav className={styles.nav}>
            <h2>Flower's Industry</h2>
            <GiButterflyFlower color='#fff' size={30}/>
        </nav>
    )
}

export default Header