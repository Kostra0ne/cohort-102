import React from "react";

import "styles/Button.scss";

const Button = ({ type = "default", className = "", children, onClick }) => {
  return (
    <button
      className={`Button Button--${type} ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
