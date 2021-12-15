import { useState, useEffect } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const darkPref = JSON.parse(localStorage.getItem("darkModePref-techyNews"));

  const [mode, setMode] = useState(darkPref || "light");

  useEffect(() => {
    localStorage.setItem("darkModePref-techyNews", JSON.stringify(mode));
  }, [mode]);

  // Toggle dark mode
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <DarkContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
