import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#120B48] px-[130px] py-[98px] flex gap-56">
      <div className="flex gap-2 ">
        <div className="w-[40px] h-[40px] relative">
          <Image src="/logoWhite.svg" alt="" fill />
        </div>
        <h1 className="mt-2 text-white text-[16px] font-bold">HelpMeOut</h1>
      </div>

      <section className="flex gap-56 items-center text-white text-[16px]">
        <ul className=" ">
          {["Menu", "Home", "Converter", "How it Works"].map((item) => (
            <li
              key={item}
              className="first:font-semibold cursor-pointer mb-[24px] font-light"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {["About us", "About", "Contact Us", "Privacy"].map((item) => (
            <li
              key={item}
              className="first:font-semibold cursor-pointer mb-[24px] font-light"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="">
          {["Screen Record", "Browser Window", "Desktop", "Applications"].map(
            (item) => (
              <li
                key={item}
                className="first:font-semibold cursor-pointer mb-[24px] font-light"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
