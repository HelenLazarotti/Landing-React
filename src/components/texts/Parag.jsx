import styles from './Parag.module.css'

function Parag({title}){
    return (
        <p className={styles.text}>
            {title}
        </p>
    )
}

export default Parag
