import React from 'react';

const Input = ({ value, onChange, placeholder = '', className, defaultValue }) => {
    return (
    <input
        type="text"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
/>
    );
};

export default Input;