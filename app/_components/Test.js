"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SlideSelect from "./SlideSelect"; // Adjust the import path as necessary

const Test = () => {
  const pedSliders = [
    { label: "Standart Ped", min: 0, max: 100, step: 1 },
    { label: "Süper Ped", min: 0, max: 100, step: 5 },
    { label: "Süper+ Ped", min: 0, max: 100, step: 10 },
  ];

  const gunlukSliders = [
    { label: "Günlük Ped", min: 0, max: 50, step: 1 },
    { label: "Süper Günlük Ped", min: 0, max: 50, step: 2 },
  ];

  const tamponSlider = [
    { label: "Mini Tampon", min: 0, max: 75, step: 5 },
    { label: "Standart Tampon", min: 0, max: 75, step: 5 },
    { label: "Süper Tampon", min: 0, max: 75, step: 5 },
  ];

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
          <SlideSelect slidersConfig={pedSliders} sliderType="ped" />
        </TabsContent>
        <TabsContent value="gunluk">
          <SlideSelect slidersConfig={gunlukSliders} sliderType="gunluk" />
        </TabsContent>
        <TabsContent value="tampon">
          <SlideSelect slidersConfig={tamponSlider} sliderType="tampon" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Test;
