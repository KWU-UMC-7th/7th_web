const Button = ({ onClick, children, type='button', className}) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    )
}

export default Button