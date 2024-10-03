const Input = ({ isValue, value, defaultValue, onChange, className }) => {
  return isValue ? (
    <input
      type="text"
      value={value || ""}
      onChange={onChange}
      className={className}
    />
  ) : (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
