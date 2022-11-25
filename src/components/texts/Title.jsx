import styles from './Title.module.css'

function Title({title}){
    return (
        <h1 className={styles.h1}>
            {title}
            
        </h1>
    )
}

export default Title