const MyInput = ({ value, onChange, type = "text" }) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="myInput"
      />
    );
  }
  
  export default MyInput;