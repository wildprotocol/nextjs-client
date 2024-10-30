"use client";

import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/ui/spinner";

const Signin = () => {
  const { ready, authenticated, login, getAccessToken } = usePrivy();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // Add this

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (ready && authenticated) {
          const accessToken = await getAccessToken();
          if (accessToken) {
            axios.defaults.headers.common["Authorization"] =
              `Bearer ${accessToken}`;
            router.push("/");
          } else {
            setIsLoading(false);
          }
        } else if (ready && !authenticated) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    delete axios.defaults.headers.common["Authorization"];
    fetchData();
  }, [ready, authenticated, getAccessToken, router]);

  return (
    <div className="size-full bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-[450px] w-full flex flex-col justify-center items-center mx-3">
        <div>
          <Image src={"/images/logo.png"} alt="logo" width={250} height={300} />
        </div>
        <div className="bg-white h-14 w-full mt-4 flex justify-between items-center px-2 rounded-sm">
          <h1 className="mx-auto text-black text-4xl font-extrabold">
            WILDCARD
          </h1>
          <div className="flex items-center">
            <div className="h-14 w-2 bg-black mr-1" />
            <div className="h-14 w-2 bg-black mr-1" />
            <div className="h-14 w-2 bg-black" />
          </div>
        </div>
        <div className="h-14 w-full bg-white flex justify-center items-center mt-2 rounded-sm">
          <p className="text-black text-2xl font-semibold">
            SOCIALFI GONE WILD
          </p>
        </div>
        <div className="mt-4 w-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              onClick={login}
              disabled={isLoading}
              className="bg-[#B4F6A5] text-black text-xl flex justify-center items-center  prose-DisplayLarge  py-2 w-full lg:w-[400px]"
            >
              Sign in with Farcaster
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
