"use client";

import React, { useState } from "react";
import TotalPrice from "./TotalPrice";

const Button = ({ children, className }) => {
  const [totalPrice, setTotalPrice] = useState("0.00");

  const handlePriceChange = (e) => {
    setTotalPrice(e);
  };

  const isDisabled = parseFloat(totalPrice) === 0;

  return (
    <button
      disabled={isDisabled}
      className={`${className} transition-all font-bold ${isDisabled ? "text-dark/40 bg-dark/20" : "bg-dark/100 text-light"}`}
    >
      {children} <TotalPrice onPriceChange={handlePriceChange} />
    </button>
  );
};

export default Button;
