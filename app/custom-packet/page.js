import Image from "next/image";
import React from "react";
import packet from "@/public/packet.webp";
import Test from "../_components/Test";
import Button from "../_components/Button";
import DisplayCard from "../_components/DisplayCard";

const page = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1150px] p-8 py-14 small:grid small:grid-cols-2 small:gap-12">
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
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </p>
          <Test />
        </div>

        <div className="ml-auto hidden h-fit max-w-[460px] rounded-2xl bg-white p-6 shadow-md transition-all small:block">
          <div className="flex flex-col gap-6">
            <span className="p-1 text-3xl font-bold">Özel Paketin</span>
            <div className="flex w-full flex-row gap-5 rounded-lg px-6 py-3 shadow-md">
              <svg
                className="self-center"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                strokeWidth="1"
              >
                <path
                  d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
                  stroke="#343131"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>2 ayda 1 gönderim</span>
            </div>
            <Image priority alt="alt" src={packet} height={100} width={500} />
            <DisplayCard />
            <Button
              disabled={false}
              className={"rounded-3xl bg-dark/10 p-3 transition-colors"}
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
