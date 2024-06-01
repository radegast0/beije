import Test from "../_components/Test";

const SectionLeft = () => (
  <div className="flex flex-col gap-6">
    <div className="flex h-fit flex-row justify-between gap-2">
      <span className="text-balance text-3xl font-bold">
        Kendi Paketini Oluştur
      </span>
      <span className="hidden cursor-pointer self-center small:block">
        Nasıl Çalışır?
      </span>
    </div>
    <p className="text-[#34313199]">
      Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan,
      sana özel bir paket oluşturalım.
    </p>
    <Test />
  </div>
);

export default SectionLeft;
