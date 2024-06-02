"use client";

import React, { useState, useEffect } from "react";
import useSliderStore from "../store";
import productPrices from "../_constants/productPrices";

const TotalPrice = ({ onPriceChange }) => {
  const pedValues = useSliderStore((state) => state.pedValues);
  const gunlukValues = useSliderStore((state) => state.gunlukValues);
  const tamponValues = useSliderStore((state) => state.tamponValues);

  const calculateTotalPrice = () => {
    const pedTotal = pedValues.reduce(
      (total, value, index) => total + value * productPrices.ped[index],
      0,
    );
    const gunlukTotal = gunlukValues.reduce(
      (total, value, index) => total + value * productPrices.gunluk[index],
      0,
    );
    const tamponTotal = tamponValues.reduce(
      (total, value, index) => total + value * productPrices.tampon[index],
      0,
    );

    return (pedTotal + gunlukTotal + tamponTotal).toFixed(2);
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    const price = calculateTotalPrice();
    setTotalPrice(price);
    onPriceChange(price); // notify parent component
  }, [pedValues, gunlukValues, tamponValues]);

  return <>(&#8378;{totalPrice})</>;
};

export default TotalPrice;
