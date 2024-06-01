const productTypes = {
  ped: [
    { type: "standard", label: "Standard Ped", min: 0, max: 100, step: 1 },
    { type: "super", label: "Super Ped", min: 0, max: 100, step: 1 },
    { type: "super+", label: "Super+ Ped", min: 0, max: 100, step: 1 },
  ],
  gunluk: [
    { type: "normal", label: "Normal Günlük Ped", min: 0, max: 50, step: 1 },
    { type: "super", label: "Süper Günlük Ped", min: 0, max: 50, step: 1 },
  ],
  tampon: [
    { type: "mini", label: "Mini Tampon", min: 0, max: 75, step: 1 },
    { type: "standard", label: "Standard Tampon", min: 0, max: 75, step: 1 },
    { type: "super", label: "Super Tampon", min: 0, max: 75, step: 1 },
  ],
};

export default productTypes;
