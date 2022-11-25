import {FaGoogle, FaFacebookF} from 'react-icons/fa'

import styles from './SocialMidiaLinks.module.css'

function SocialLinks() {
    return (
        <div>
            <a href='/sme' className={styles.btnGoogle}> 
                <FaGoogle size={20}/>
                Entrar com Google
            </a>

            <a href='/sme' className={styles.btnFace}>
                <FaFacebookF size={20} />
                Entrar com Facebook
            </a>
        </div>
    )
}

export default SocialLinks