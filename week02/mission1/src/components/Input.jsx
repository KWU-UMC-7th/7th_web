const Input = ({value, onChange, className}) => {
    return (
        <input
            type = 'text'
            value = {value}
            onChange = {onChange}
            className={className}
        />
    )
}

export default Input