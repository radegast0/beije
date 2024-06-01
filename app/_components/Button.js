import React from "react";

const Button = ({ children, className, disabled }) => {
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
