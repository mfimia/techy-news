import { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [mode, setMode] = useState("light");

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
