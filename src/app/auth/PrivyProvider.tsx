"use client";

import { PrivyProvider as Privy } from "@privy-io/react-auth";

export default function PrivyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  return (
    <Privy
      appId={appId!}
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "images/logo.png",
        },
        loginMethods: ["farcaster"],
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          requireUserPasswordOnCreate: false,
        },
        mfa: { noPromptOnMfaRequired: false },
      }}
    >
      {children}
    </Privy>
  );
}
