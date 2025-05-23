import { theme } from "@globals/theme";
import { GlobalStyle } from "@globals/index";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
