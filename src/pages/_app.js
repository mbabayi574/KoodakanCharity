import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "@/components/rtl-provider";
import Header from "@/components/layout/header";
import "@/components/hero/hero.scss";
import "@/styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Header />
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}
