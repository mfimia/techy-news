import { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  setDarkMode((prev) => !prev);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
