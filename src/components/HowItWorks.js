import Image from "next/image";
import React from "react";
const detials = [
  {
    header: "Record Screen",
    text: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    icon: ".svg",
    pic: "/1pic.png",
  },
  {
    header: "Share Your Recording",
    text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    icon: "2.svg",
    pic: "/1pic.png",
  },
  {
    header: "Learn Effoetlessly",
    text: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    icon: "3.svg",
    pic: "/1pic.png",
  },
];
export default function HowItWorks() {
  return (
    <div className="bg-white p-[80px]">
      <h1 className="mb-[73px] text-center text-[#141414] text-[40px] font-bold">
        How it works
      </h1>
      <section className="flex gap-[83px] items-center">
        {detials.map((item) => (
          <div
            key={item.header}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-[68px] h-[68px] mb-[46px]">
              <Image src={item.icon} alt="" fill />
            </div>

            <h1 className="text-center text-[28px] text-[#1B233D] font-semibold mb-[16px]">
              {item.header}
            </h1>

            <p className="mb-[28.75px] text-[#616163] text-[20px] text-center">
              {item.text}
            </p>
            <div className="w-[358px] h-[270px] relative">
              <Image src={item.pic} alt="" fill />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
