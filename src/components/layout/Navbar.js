import NewsForm from "../news/NewsForm";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkContext from "../../context/darkMode/DarkContext";
import { useContext } from "react";

const Navbar = () => {
  const darkContext = useContext(DarkContext);

  const { mode, toggleMode } = darkContext;

  const handleClick = () => {
    toggleMode();
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "background.default", color: "text.primary" }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <NewspaperOutlinedIcon
              fontSize="large"
              sx={{ boxShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              letterSpacing: 8,
              ml: 4,
              fontWeight: 900,
              fontFamily: "Roboto Slab",
              textShadow: "2px 4px 3px rgba(0,0,0,0.5)",
            }}
          >
            TECHY NEWS
          </Typography>
          <NewsForm />
          <IconButton sx={{ ml: 2 }} onClick={handleClick} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
