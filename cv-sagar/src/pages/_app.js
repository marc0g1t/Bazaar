import "@/styles/globals.css";
import { Header } from "@/components/Headerlayout";
export default function App({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
