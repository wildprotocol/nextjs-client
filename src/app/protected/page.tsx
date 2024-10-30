"use client";

import { useAuth } from "@/hooks/use-auth";

export default function Protected() {
  const { authenticated, user } = useAuth();

  console.log(authenticated, user);

  return (
    <div>
      <h1>Protected</h1>
      <h2>You are authenticated: {JSON.stringify(authenticated)}</h2>
      <h2>User: {JSON.stringify(user)}</h2>
    </div>
  );
}
