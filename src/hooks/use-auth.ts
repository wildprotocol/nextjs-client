import { usePrivy } from "@privy-io/react-auth";

export const useAuth = () => {
  const { authenticated, user } = usePrivy();

  return { authenticated, user };
};
