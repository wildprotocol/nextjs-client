"use client";

import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import React from "react";

const Signin = () => {
  const { ready, authenticated, login, getAccessToken } = usePrivy();

  console.log("getAccessToken", getAccessToken());
  
  return (
    <div className="size-full bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-[450px] w-full flex flex-col justify-center items-center mx-3">
        <div>
          <Image src={"/images/logo.png"} alt="logo" width={250} height={300}/>
        </div>
        <div className="bg-white h-14 w-full mt-4 flex justify-between items-center px-2 rounded-sm">
          <h1 className="mx-auto text-black text-4xl font-extrabold">WILDCARD</h1>
          <div className="flex items-center">
            <div className="h-14 w-2 bg-black mr-1" />
            <div className="h-14 w-2 bg-black mr-1" />
            <div className="h-14 w-2 bg-black" />
          </div>
        </div>
        <div className="h-14 w-full bg-white flex justify-center items-center mt-2 rounded-sm">
          <p className="text-black text-2xl font-semibold">SOCIALFI GONE WILD</p>
        </div>
        <div className="mt-4 w-full">
          <button onClick={login} className="bg-green-500 py-2 w-full text-black font-semibold rounded-sm">SIGN IN WITH FARCASTER</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
