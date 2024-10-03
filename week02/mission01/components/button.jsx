const Button = ({ act, text, className }) => {
  return (
    <button onClick={act} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
