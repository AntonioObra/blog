import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDark") === "true") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <div className={`${isDark && "dark"} scroll-smooth `}>
      <Navbar setDarkMode={setIsDark} isDark={isDark} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
