import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "@/components/rtl-provider";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}
