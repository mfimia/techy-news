import { useMemo, useContext } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import NewsList from "./components/news/NewsList";
import NewsState from "./context/news/NewsState";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./App.css";

const App = () => {
  const darkContext = useContext(DarkContext);

  const { mode } = darkContext;

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <NewsState>
      <AlertState>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container
            className={mode === "light" ? "light--mode" : "dark--mode"}
            maxWidth="md"
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              p: {
                xs: 0,
              },
            }}
          >
            <Navbar />
            <NewsList />
          </Container>
        </ThemeProvider>
      </AlertState>
    </NewsState>
  );
};

export default App;
