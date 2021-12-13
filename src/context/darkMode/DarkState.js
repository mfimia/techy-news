import { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
