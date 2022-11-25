import styles from './Input.module.css'

function Input({type, placeholder, value, hanleOnChange, name}){
    return(
        <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={hanleOnChange}
        className={styles.input}/>
    )
}

export default Input