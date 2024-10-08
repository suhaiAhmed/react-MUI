import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import myImage from "../images/Logo.png";


const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-transparent">
          <Toolbar>
            <IconButton
              className="text-dark"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={myImage} alt="" />
            <Box className="d-flex justify-content-center flex-grow-1 text-dark fw-bolder">
              <Link className="" href="#" underline="none" />
              {"Home"}
              <Link className="mx-3" href="#" underline="none" />
              {"About"}
              <Link className="mx-3" href="#" underline="none" />
              {"Services"}
              <Link className="mx-3" href="#" underline="none" />
              {"Features"}
              <Link className="mx-3" href="#" underline="none" />
              {"Products"}
              <Link className="mx-3" href="#" underline="none" />
              {"FAQ"}
            </Box>

            <Button className="text-success fw-bold" color="inherit">
              Login
            </Button>
            <Button color="success" className="fw-bold" variant="contained">
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
};

export default Header;
