import Image from "next/image";
import React from "react";
import CanvasLanding from "../../components/canvasLanding";

function Login() {
  return (
    <CanvasLanding>
      <div className="text-white text-2xl mt-10 pl-5">
        <h1 className="font-black">On Time</h1>
        <h2>Login</h2>
      </div>
      <form className="text-white mx-5 mt-14 flex flex-col gap-1">
        <label className="font-light text-sm">Username</label>
        <input
          className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
          type="text"
          name="search"
          placeholder="Username"
        />
        <label className="font-light mt-5 text-sm">Password</label>
        <input
          className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
          type="password"
          name="search"
          placeholder="Password"
        />
        <button className="h-10 w-full mt-6 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          Login
        </button>
      </form>
      <div className="text-center text-xs text-white font-light mx-5 mt-28">
        <h3>Don&#32;t have account?</h3>
        <button className="h-8 w-full mt-4 text-xs bg-stone-800 opacity-75 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          <Image
            src="/images/logo/google.png"
            width="45"
            height="15"
            alt="Google Button"
          />
        </button>
        <button className="h-8 w-full mt-2 text-xs bg-stone-800 opacity-75 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          Login
        </button>
      </div>
    </CanvasLanding>
  );
}

export default Login;
