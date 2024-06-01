"use client";

import React from "react";
import useSliderStore from "../store";
import productTypes from "../_constants/productTypes";

const DisplayCard = () => {
  const {
    pedValues,
    gunlukValues,
    tamponValues,
    resetPedValues,
    resetGunlukValues,
    resetTamponValues,
  } = useSliderStore();

  const handleReset = () => {
    resetPedValues();
    resetGunlukValues();
    resetTamponValues();
  };

  {
    /*
     * format:
     * x ve y
     * x, y ve z
     */
  }

  const formatValues = (values, productArray) => {
    const filteredValues = values
      .map((value, index) =>
        value > 0 ? `${value} ${productArray[index].label}` : null,
      )
      .filter(Boolean);

    if (filteredValues.length === 0) return "";

    const lastValue = filteredValues.pop();
    return filteredValues.length
      ? `${filteredValues.join(", ")} ve ${lastValue}`
      : lastValue;
  };

  const pedFormatted = formatValues(pedValues, productTypes.ped);
  const gunlukFormatted = formatValues(gunlukValues, productTypes.gunluk);
  const tamponFormatted = formatValues(tamponValues, productTypes.tampon);
  const hasProducts = pedFormatted || gunlukFormatted || tamponFormatted;

  return (
    hasProducts && (
      <div className="flex flex-col gap-2 rounded-lg px-6 py-3 shadow-md">
        {pedFormatted && (
          <>
            <h1 className="text-base font-bold">Ped Paketleri</h1>
            <h1 className="text-sm">{pedFormatted}</h1>
          </>
        )}
        {gunlukFormatted && (
          <>
            <h1 className="text-base font-bold">Günlük Ped Paketleri</h1>
            <h1 className="text-sm">{gunlukFormatted}</h1>
          </>
        )}
        {tamponFormatted && (
          <>
            <h1 className="text-base font-bold">Tampon Paketleri</h1>
            <h1 className="text-sm">{tamponFormatted}</h1>
          </>
        )}
        <button
          className="w-fit rounded-full py-3 text-start text-sm font-bold transition-all hover:bg-dark/5"
          onClick={handleReset}
        >
          Paketten Çıkar
        </button>
      </div>
    )
  );
};

export default DisplayCard;
