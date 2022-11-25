

function Button ({onClick, value, title, className, onChange}) {
    return (
        <button 
        onClick={onClick} 
        value={value} 
        className={className}
        onChange={onChange}>
            {title}
        </button>
    )
}

export default Button
