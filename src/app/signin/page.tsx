"use client";

import { usePrivy } from "@privy-io/react-auth";
import React from "react";

const Signin = () => {
  const { ready, authenticated, login, getAccessToken } = usePrivy();

  console.log('getAccessToken', getAccessToken());

  return (
    <div>
      <div>Signin Farcaster</div>
      <button onClick={login}>Sign in</button>
    </div>
  );
};

export default Signin;
