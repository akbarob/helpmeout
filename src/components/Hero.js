import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex  items-center gap-[13.5px] p-[80px] bg-white mb-[56px]">
      <section className="max-w-[584px] text-[#141414]">
        <h1 className="text-[64px] font-bold">
          Show Them <br /> Don't Just Tell
        </h1>

        <p className="text-black/75 mt-[20px]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="bg-[#120B48] text-white rounded-[8px] text-[18px] p-[22px] text-center mt-[48px]">
          Install HelpMeOut
          <span className="w-[20px] h-[20px]">
            <Image src="/arrow-right" alt="hero" fill />
          </span>
        </button>
      </section>
      <section className="w-[594px] h-[727px] relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </section>
    </div>
  );
}
