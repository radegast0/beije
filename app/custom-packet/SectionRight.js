import Image from "next/image";
import SubscriptionInfo from "./SubscriptionInfo";
import DisplayCard from "../_components/DisplayCard";
import Button from "../_components/Button";
import packet from "@/public/packet.webp";


const SectionRight = () => (
  <div className="ml-auto hidden h-fit max-w-[460px] rounded-2xl bg-white p-6 shadow-md transition-all small:block">
    <div className="flex flex-col gap-6">
      <h1 className="p-1 text-3xl font-bold">Özel Paketin</h1>
      <SubscriptionInfo />
      <Image
        className="object-cover"
        placeholder="blur"
        priority
        alt="alt"
        src={packet}
      />
      <DisplayCard />
      <Button className="rounded-3xl bg-dark/10 p-3 transition-colors">
        Sepete Ekle
      </Button>
    </div>
  </div>
);

export default SectionRight;
