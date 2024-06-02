import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-[1150px] flex-col gap-12 px-8">
      <div className="border-b-2 border-light/30 py-12">
        <div className="grid grid-cols-1 justify-between gap-4 small:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">beije.</div>
            <div>
              <h1 className="font-bold text-light/70">Arayı açmayalım!</h1>
              <p className="text-sm text-light/70">
                beije&apos;deki yeni ürün ve gelişmeleri sana haber verelim &
                aylık e-gazetemiz döngü&apos;ye abone ol!
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="e-mail adresin"
                className="rounded-lg border-[1px] border-light/30 bg-transparent p-2"
              />
              <button className="rounded-lg bg-light p-2 text-dark">
                Gönder
              </button>
            </div>
            <p className="text-sm text-light/70">
              Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul
              ediyor ve beije&apos;den haber almayı onaylıyorum.
            </p>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div className="flex flex-col gap-4">
              <h1>beije Ped</h1>
              <h1>beije Günlük Ped</h1>
              <h1>beije Tampon</h1>
              <h1>beije Store</h1>
            </div>
            <div className="flex flex-col gap-4 text-end small:text-start">
              <h1>Blog</h1>
              <h1>Biz Kimiz?</h1>
              <h1>Sıkça Sorulan Sorular</h1>
              <h1>Quiz</h1>
            </div>
            <div className="hidden flex-col gap-4 small:flex">
              <h1>Facebook</h1>
              <h1>Instagram</h1>
              <h1>Twitter</h1>
              <h1>LinkedIn</h1>
              <h1>Spotify</h1>
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-between text-xs small:hidden">
            <h1>Facebook</h1>
            <h1>Instagram</h1>
            <h1>Twitter</h1>
            <h1>LinkedIn</h1>
            <h1>Spotify</h1>
          </div>
        </div>
      </div>
      <div className="pb-12 opacity-50">2024 beije. Tüm hakları saklıdır.</div>
    </div>
  );
};

export default Footer;
