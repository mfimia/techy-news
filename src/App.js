import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import DarkState from "./context/darkMode/DarkState";
import { Container } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <NewsState>
      <AlertState>
        <DarkState>
          <Container maxWidth="md">
            <Navbar />
            <NewsList />
          </Container>
        </DarkState>
      </AlertState>
    </NewsState>
  );
};

export default App;
