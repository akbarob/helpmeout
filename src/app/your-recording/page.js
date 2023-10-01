"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import myGif from ''
const workSans = Work_Sans({ subsets: ["latin"] });
export default function page() {
  const [save, setSave] = useState(false);
  const [modal, setModal] = useState(true);
  const [videoUrl, setVideoUrl] = useState(true);
  const handleSave = () => {
    setSave(true);
    setModal(true);
  };
  useEffect(() => {
    const jeff = localStorage.getItem("blob");
    setVideoUrl(jeff);
  }, []);
  return (
    <div className="relative">
      {modal && (
        <div
          className={`${workSans.className} bg-black/40 fixed z-40 overflow-none  flex justify-center items-center h-screen w-screen `}
        >
          <div className="w-[398px] h-[576px] bg-[#F2F4F7] relative ">
            <Image
              onClick={() => setModal(!modal)}
              src="/close-circle.svg"
              alt="logo"
              width={100}
              height={100}
              className="absolute top-6 right-5 z-50 w-[40px] h-[40x] cursor-pointer"
            />
            <div className="flex flex-col gap-10 py-16 justify-center items-center">
              <Image
                src="/success-kite.gif"
                alt="my gif"
                height={100}
                width={100}
                className="w-[318px]/2 h-[268px]/2"
              />
              <h1 className="text-[#08051E] text-center">
                Your video link has been sent to{" "}
                <span className="text-[#120B48]">johnmark@gmail.com</span>
              </h1>
              <h6 className="text-center text-[#141414] text-[14px]">
                Would you need to view this video later? Save to your account
                now!
              </h6>
              <button
                className="py-[8px] px-[16px] rounded-[8px] bg-[#120B48] text-white"
                onClick={handleSave}
              >
                Save Video
              </button>
              <p className="text-[#7E7E7E] text-center text-[14px]">
                Don't have an account?{" "}
                <span className="text-[#120B48]  font-semibold cursor-pointer">
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      <Navbar />

      <div className="flex flex-col  bg-white py-[40px]">
        <div className="flex w-full px-[100px]">
          <div className="w-1/2 ">
            <h1 className="text-[#141414] text-[45px]">Your Video is ready!</h1>

            <h6 className="text-[20px] font-semibold text-[#141414] mb-[15px]">
              Name
            </h6>
            <p></p>
            <div className="flex w-[550px] h-[68px] rounded-[16px] bg-[#E7E7ED]/80 justify-center items-center px-4">
              <input
                className="flex-1 placeholder:text-[#605C84]/80 bg-transparent"
                type="text"
                placeholder="enter email of reciever"
              />
              <button className="h-[44px] w-[75px] bg-[#605C84] text-white rounded-[8px]  text-center flex justify-center items-center">
                send
              </button>
            </div>

            <div>
              <h1 className="mb-[15px] text-[20px] font-semibold text-[#141414]">
                Video Url
              </h1>
              <div className="bg-[#E7E7ED]/80 flex w-[550px] h-[68px] rounded-[16px] py-[12px] px-[24px]">
                <input
                  className="flex-1 placeholder:text-[#605C84]/80 bg-transparent"
                  type="text"
                  placeholder="enter email of reciever"
                />
                <button className="border-[#605C84] text-[#605C84] border-2 rounded-[8px] px-[18px] py-[10px] text-center">
                  copy
                </button>
              </div>
            </div>
            <div className="mt-[64px]">
              <p className="text-[#08051E] font-semibold mb-[15px]">
                Share your video
              </p>
              <div className="px-[16px] flex gap-[8px] text-black text-[16px]">
                <button className="rounded-[8px] border-black border-[1px] px-[16px] py-[12px]">
                  Facebook
                </button>
                <button className="rounded-[8px] border-black border-[1px] px-[16px] py-[12px]">
                  Whatsapp
                </button>

                <button className="rounded-[8px] border-black border-[1px] px-[16px] py-[12px]">
                  Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 border-l-2 border-[#CFCFCF] pl-[40px] text-black">
            <div>
              <video src="/test.mp4" controls className="w-[575px] h-[473px]" />
            </div>
            <div className="mt-[80px]">
              <h1 className="text-24px font-semibold mb-[16px]">Transcript</h1>
              <select className="w-[165px] h-[35px] rounded-[4px] p-1 border-[#CFCFCF] bg-transparent text-[#CFCFCF] border-2 accent-[#CFCFCF] mb-[40px]">
                <option className="text-[16px] text-[#CFCFCF]">English</option>
              </select>
              <div className="flex flex-col gap-4 w-[575px] h-[256px] overflow-y-auto">
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F9FF] mb-[64px] px-[100px] mt-[64px] py-[64px]   flex flex-col gap-[40px] items-center justify-center">
          <h1 className="text-center text-[#141414] text-[24px] font-semibold">
            To ensure the availability and privacy of your video,
            <br /> we recommend saving it to your account.
          </h1>
          <button
            className="py-[16px] px-[32px] rounded-[8px] bg-[#120B48] text-white"
            onClick={handleSave}
          >
            Save Video
          </button>
          <p className="text-[#7E7E7E]">
            Don't have an account?{" "}
            <span className="text-[#120B48] text-[24px] font-semibold">
              Create account
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
