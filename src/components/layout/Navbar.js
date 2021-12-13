import NewsForm from "../news/NewsForm";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";

const Navbar = () => {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
