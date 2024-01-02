import "@/styles/globals.css";
import { Header } from "@/components/Headerlayout";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Header>
        <Component {...pageProps} />
      </Header>
    </NextThemesProvider>
  );
}
