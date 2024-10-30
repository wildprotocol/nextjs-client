import PrivyProvider from "./privy-provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivyProvider>{children}</PrivyProvider>;
}
