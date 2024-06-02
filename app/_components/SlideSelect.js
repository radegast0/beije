import React from "react";
import { Slider } from "@/components/ui/slider";
import useSliderStore from "../store";

const SlideSelect = ({ slidersConfig, sliderType }) => {
  const {
    pedValues,
    gunlukValues,
    tamponValues,
    setPedValue,
    setGunlukValue,
    setTamponValue,
  } = useSliderStore();

  const getValues = () => {
    switch (sliderType) {
      case "ped":
        return pedValues;
      case "gunluk":
        return gunlukValues;
      case "tampon":
        return tamponValues;
      default:
        return [];
    }
  };

  const handleSliderChange = (index, value) => {
    switch (sliderType) {
      case "ped":
        setPedValue(index, value);
        break;
      case "gunluk":
        setGunlukValue(index, value);
        break;
      case "tampon":
        setTamponValue(index, value);
        break;
      default:
        break;
    }
  };

  const values = getValues();

  return (
    <div className="flex flex-col gap-6">
      {slidersConfig.map((config, index) => (
        <div key={index}>
          <Slider
            key={index}
            label={config.label}
            min={config.min}
            max={config.max}
            step={config.step}
            value={values[index] || 0}
            onValueChange={(value) => handleSliderChange(index, value)}
          />
          <div className="flex flex-row justify-between py-3 text-xs font-bold">
            <span> {config.min} </span>
            <span> {config.max} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideSelect;
