import type { AppProps } from "next/app";
import { Provider as ChakraProvider } from "@/components/ui/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
