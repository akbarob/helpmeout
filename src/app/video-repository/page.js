import Image from "next/image";
import React from "react";
import { Sora, Work_Sans } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

export default function page() {
  return (
    <div className="bg-white ">
      <div className="px-[100px] pt-[40px] flex flex-col ">
        <nav className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image src="/logo.svg" alt="logo" fill />
            </div>

            <h1 className="text-[#120B48]">HelpMeOut</h1>
          </div>
          <div className="flex w-[164px] h-[40px] justify-between items-center">
            <div className="w-[24px] h-[24px] relative">
              <Image src="/avatar.svg" fill className="" alt="" />
            </div>
            <h1 className="text-[16px] text-[#141414]">John Mark</h1>
            <div className="w-[24px] h-[24px] relative">
              <Image src="arrow-down.svg" fill className="" alt="" />
            </div>
          </div>
        </nav>
        <div className="flex justify-between mt-[40px]">
          <div>
            {" "}
            <h1
              className={`${sora.className} text-[32px] font-bold text-[#141414]`}
            >
              Hello, John Mark
            </h1>
            <p
              className={`${workSans.className} text-[18px] text-[#141414B2] `}
            >
              Here are your recorded videos
            </p>
          </div>
          <div className="w-[400px] rounded-[12px] flex justify-center items-center p-4 gap-4 bg-[#B6B3C624] border-[#E7E7ED] border-2">
            <div className="w-[20px] h-[20px] relative">
              <Image src="search.svg" fill className="" alt="" />
            </div>
            <input
              type="search"
              className="flex-1 text-[#c3c3c3] bg-transparent"
              placeholder="Search for a particular video"
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[700px] border-t-2 border-black/10 mt-[43px]">
        <h1
          className={`${workSans.className} font-medium text-[18px] text-[#141414B2] pl-[100px]  mt-[40px] mb-[24px]`}
        >
          Recent files
        </h1>
        <div className="  w-full px-[100px] grid grid-cols-2">
          {[1, 2].map((item) => (
            <div
              className="rounded-[24px] w-[557px] h-[322px] p-[16px] border-[#B6B3C6]/60 border-2 "
              key={item}
            >
              <video
                src="/test.mp4"
                controls
                className="w-[575px] h-[208px] rounded-[24px] border-2  border-[#B6B3C6]/60"
              />
              <div className="flex justify-between items-center w-[575px]  ">
                <span>
                  <p
                    className={`${workSans.className} font-medium text-[20px] text-[#141414] capitalize   mt-[24px]`}
                  >
                    How to create Facebook Ad listing
                  </p>
                  <p
                    className={`${workSans.className} text-[16px] text-[#b6b3c6]   mt-[8px]`}
                  >
                    September 23 2021
                  </p>
                </span>
                <span className="flex gap-3 px-10">
                  <div className="w-10 h-10 relative">
                    <Image src="/link.svg" alt="logo" fill />
                  </div>
                  <div className="w-10 h-10 relative">
                    <Image src="/more.svg" alt="logo" fill />
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h1
            className={`${workSans.className} font-medium text-[18px] text-[#141414B2] pl-[100px] my-[40px]  mb-[24px]`}
          >
            Files from last week
          </h1>
          <div className=" w-full px-[100px] grid grid-cols-2">
            {[1, 2].map((item) => (
              <div
                className="rounded-[24px] w-[557px] h-[322px] p-[16px] border-[#B6B3C6]/60 border-2 "
                key={item}
              >
                <video
                  src="/test.mp4"
                  controls
                  className="w-[575px] h-[208px] rounded-[24px] border-2  border-[#B6B3C6]/60"
                />
                <div className="flex justify-between items-center w-[575px]  ">
                  <span>
                    <p
                      className={`${workSans.className} font-medium text-[20px] text-[#141414] capitalize   mt-[24px]`}
                    >
                      How to create Facebook Ad listing
                    </p>
                    <p
                      className={`${workSans.className} text-[16px] text-[#b6b3c6]   mt-[8px]`}
                    >
                      September 23 2021
                    </p>
                  </span>
                  <span className="flex gap-3 px-10">
                    <div className="w-10 h-10 relative">
                      <Image src="/link.svg" alt="logo" fill />
                    </div>
                    <div className="w-10 h-10 relative">
                      <Image src="/more.svg" alt="logo" fill />
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
