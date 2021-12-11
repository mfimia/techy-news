import React from "react";
import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import "./App.css";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <NewsState>
      <Navbar />
      <NewsList />
    </NewsState>
  );
};

export default App;
