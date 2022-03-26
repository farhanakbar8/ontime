import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-black font-sans">
      <div className="bg-gradient-to-b from-black to-grad3 w-wmobile h-hmobile rounded-2xl overflow-hidden relative">
        {/*Canvas is here */}
        <div className="w-full h-96 -mt-10 bg-gradient-to-br from-grad1 to-grad2 rounded-2xl opacity-60 skew-y-12"></div>
        <div className="absolute top-5">
          <Image src="/images/Saly-22.png" width="341" height="341" />
        </div>
        <div className="text-white text-2xl pt-2 pl-5">
          <h1 className="font-black">On Time</h1>
          <h2>Alarm, Task,</h2>
          <h2>And Calendar</h2>
        </div>
        <p className="mt-2 text-xs font-light text-white pl-5">
          Manage your lecture, class, task,
          <br /> or everything in one place
        </p>
        <div className="mt-10 w-wmobile flex justify-center">
          <h3 className="text-white text-sm">Get Started</h3>
        </div>
        <div className="flex justify-center mt-5">
          <button className=" h-8 w-36 bg-gradient-to-r from-grad4 to-grad1 rounded-full text-white hover:opacity-80 transition duration-150">
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
