import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import { Container } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <NewsState>
      <AlertState>
        <Container maxWidth="md">
          <Navbar />
          <NewsList />
        </Container>
      </AlertState>
    </NewsState>
  );
};

export default App;
