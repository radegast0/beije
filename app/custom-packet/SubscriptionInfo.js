const SubscriptionInfo = () => (
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
);

export default SubscriptionInfo;
