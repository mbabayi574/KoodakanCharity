import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "@/components/rtl-provider";
import Header from "@/components/layout/header";
import "@/components/hero/hero.scss";
import "@/styles/shared/title-box.scss";
import "@/styles/global.scss";
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

import "@/styles/global.css";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },

  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Header />
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}
