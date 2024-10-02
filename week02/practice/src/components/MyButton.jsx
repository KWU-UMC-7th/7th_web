import '../App.css'


const MyButton = ({ value, onChange=()=>{}, type = "text" ,onClick=()=>{},text}) => {
    return (
      <button
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={'myButton'}
      >
        {text}
      </button>
    );
  }
  
  export default MyButton;