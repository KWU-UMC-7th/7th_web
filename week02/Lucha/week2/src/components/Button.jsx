import React from 'react';

const Button = ({ onClick, children, type = 'button', className }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;