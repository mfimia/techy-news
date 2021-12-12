import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <NewsState>
      <AlertState>
        <Navbar />
        <NewsList />
      </AlertState>
    </NewsState>
  );
};

export default App;
