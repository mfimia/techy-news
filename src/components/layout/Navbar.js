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

  const { darkMode, setDarkMode } = darkContext;

  const handleClick = () => {
    setDarkMode();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            style={{ display: "flex", alignItems: "center" }}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <NewspaperOutlinedIcon fontSize="large" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              letterSpacing: 8,
              ml: 2,
            }}
          >
            TECHY NEWS
          </Typography>
          <NewsForm />
          <IconButton sx={{ ml: 1 }} onClick={handleClick}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
