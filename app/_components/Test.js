"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SlideSelect from "./SlideSelect";
import productTypes from "../_constants/productTypes";

const Test = () => {

  // use productTypes for consistency 

  // const pedSliders = [
  //   { label: "Standart Ped", min: 0, max: 100, step: 1 },
  //   { label: "Süper Ped", min: 0, max: 100, step: 5 },
  //   { label: "Süper+ Ped", min: 0, max: 100, step: 10 },
  // ];
  // const gunlukSliders = [
  //   { label: "Günlük Ped", min: 0, max: 50, step: 1 },
  //   { label: "Süper Günlük Ped", min: 0, max: 50, step: 2 },
  // ];
  // const tamponSlider = [
  //   { label: "Mini Tampon", min: 0, max: 75, step: 5 },
  //   { label: "Standart Tampon", min: 0, max: 75, step: 5 },
  //   { label: "Süper Tampon", min: 0, max: 75, step: 5 },
  // ];

  return (
    <div>
      <Tabs defaultValue="ped" className="mt-12 w-full">
        <TabsList>
          <TabsTrigger className="" value="ped">
            beije Ped
          </TabsTrigger>
          <TabsTrigger value="gunluk">beije Günlük Ped</TabsTrigger>
          <TabsTrigger value="tampon">beije Tampon</TabsTrigger>
        </TabsList>
        <TabsContent value="ped">
          <SlideSelect slidersConfig={productTypes.ped} sliderType="ped" />
        </TabsContent>
        <TabsContent value="gunluk">
          <SlideSelect slidersConfig={productTypes.gunluk} sliderType="gunluk" />
        </TabsContent>
        <TabsContent value="tampon">
          <SlideSelect slidersConfig={productTypes.tampon} sliderType="tampon" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Test;
