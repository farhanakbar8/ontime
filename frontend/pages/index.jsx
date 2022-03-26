import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-black font-sans">
      <div className="bg-gradient-to-b from-black to-grad3 w-wmobile h-hmobile rounded-2xl overflow-hidden">
        {/*Canvas is here */}
        <div className="w-full h-96 -mt-10 bg-gradient-to-br from-grad1 to-grad2 rounded-2xl opacity-60 skew-y-12"></div>
        <Image src="/images/Saly-22.png" width="341" height="341" />
        <h1>Hi :D</h1>
      </div>
    </div>
  );
}
