import { create } from "zustand";

const useSliderStore = create((set) => ({
  pedValues: [0, 0, 0], // array of 3 values( standard, süper, süper+ )
  gunlukValues: [0, 0], // array of 2 values( normal, süper)
  tamponValues: [0, 0, 0],
  setPedValue: (index, value) =>
    set((state) => {
      const newPedValues = [...state.pedValues];
      newPedValues[index] = value;
      return { pedValues: newPedValues };
    }),
  setGunlukValue: (index, value) =>
    set((state) => {
      const newGunlukValues = [...state.gunlukValues];
      newGunlukValues[index] = value;
      return { gunlukValues: newGunlukValues };
    }),
  setTamponValue: (index, value) =>
    set((state) => {
      const newTamponValues = [...state.tamponValues];
      newTamponValues[index] = value;
      return { tamponValues: newTamponValues };
    }),
  resetPedValues: () => set({ pedValues: [0, 0, 0] }),
  resetGunlukValues: () => set({ gunlukValues: [0, 0] }),
  resetTamponValues: () => set({ tamponValues: [0, 0, 0] }),
}));

export default useSliderStore;
