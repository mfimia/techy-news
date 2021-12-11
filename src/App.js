import React from "react";
import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import "./App.css";

const App = () => {
  return (
    <NewsState>
      <NewsList />
    </NewsState>
  );
};

export default App;
