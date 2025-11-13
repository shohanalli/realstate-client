import React, { useEffect, useState } from "react";

const DarkLight = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div
      className="fixed bottom-5 right-5
         bg-white text-black p-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 z-50"
    >
      <input
        onChange={(e) => handleTheme(e.target.checked)}
        type="checkbox"
        defaultChecked={localStorage.getItem("theme") === "dark"}
        className="toggle"
      />
      <br />
      D&N
    </div>
  );
};

export default DarkLight;
