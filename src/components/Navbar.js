import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white py-[20px] px-[100px] mb-[3px]">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 relative">
          <Image src="/logo.svg" alt="logo" fill />
        </div>

        <h1 className="text-[#120B48]">HelpMeOut</h1>
      </div>
      <div className="flex gap-10">
        {["Features", "How it works"].map((link) => (
          <Link key={link} href={"#"} className="text-black">
            {link}
          </Link>
        ))}
      </div>
      <button className="text-[#120B48]">Get Started</button>
    </nav>
  );
}
