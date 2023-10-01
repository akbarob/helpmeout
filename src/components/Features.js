import Image from "next/image";
import React from "react";

const feat = [
  {
    icon: "/circle.svg",
    header: "Simple Screen Recording",
    text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },
  {
    icon: "/arrow.svg",
    header: "Simple Screen Recording",
    text: "Share your recordings instantly with a single link. No attachments, no downloads.",
  },
  {
    icon: "/roll.svg",
    header: "Simple Screen Recording",
    text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];
export default function Features() {
  return (
    <div className="flex flex-col p-[80px] bg-white text-center mb-[70px]">
      <h1 className="text-[#141414] text-[40px] font-bold mb-[8px] text-center">
        Features
      </h1>
      <h6 className="text-[#616163] text-[20px] mb-[64px]">
        Key Highlights of Our Extension
      </h6>

      <div className="flex">
        <section className="flex flex-col gap-[48px]">
          {feat.map((item) => (
            <div key={item.header} className="flex gap-4">
              <div className="w-[48px] h-[48px] relative">
                <Image src={item.icon} alt="" fill className="" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#1B233D] text-[28px] font-semibold">
                  {item.header}
                </h2>
                <p className="text-[#616163] text-[20px] ">{item.text}</p>
              </div>
            </div>
          ))}
        </section>
        <section>
          <div className="w-[636px] h-[454px] relative">
            <Image
              src="/feature.png"
              fill
              alt="feature.png"
              className="object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
