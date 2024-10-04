// Input.jsx_input 컴포넌트 분리 
import React from 'react';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;