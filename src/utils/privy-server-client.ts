import { PrivyClient } from "@privy-io/server-auth";

class PrivyClientSingleton {
  private static instance: PrivyClient;

  private constructor() {}

  public static getInstance(): PrivyClient {
    if (!PrivyClientSingleton.instance) {
      if (
        !process.env.NEXT_PUBLIC_PRIVY_APP_ID ||
        !process.env.PRIVY_APP_SECRET
      ) {
        throw new Error("Missing required Privy environment variables");
      }

      PrivyClientSingleton.instance = new PrivyClient(
        process.env.NEXT_PUBLIC_PRIVY_APP_ID,
        process.env.PRIVY_APP_SECRET,
      );
    }

    return PrivyClientSingleton.instance;
  }
}

// Export a function to get the Privy client instance
export const getPrivyClient = () => PrivyClientSingleton.getInstance();
