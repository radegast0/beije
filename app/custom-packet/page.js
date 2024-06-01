import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

export const metadata = {
  title: "Kendi Paketini Oluştur",
};

const Page = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-[1150px] p-8 py-14 small:grid small:grid-cols-2 small:gap-12">
        <SectionLeft />
        <SectionRight />
      </div>
    </div>
  );
};

export default Page;
