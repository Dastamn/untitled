import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const prefersDark = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(prefersDark);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = prefersDark();
      setDark(value);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const e = document.getElementsByTagName("html");
    if (e.length) {
      e[0].className = "";
      e[0].classList.add(`theme-${(dark && "dark") || "light"}`);
    }
  }, [dark]);

  return <div>App</div>;
});

export default App;
