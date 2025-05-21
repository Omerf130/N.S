import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { DICT } from "../consts";
import { FaTiktok } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { RiContactsLine } from "react-icons/ri";

const sections = [
  { label: DICT.about, id: "about" },
  { label: DICT.services, id: "services" },
  { label: DICT.plans, id: "plans" },
  { label: DICT.gallery, id: "gallery" },
  { label: DICT.contact, id: "contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AppBar className="nav-wrapper" position="static">
      <Button
        className="nav-item"
        href="#contact"
        sx={{ position:"fixed", left:"10px", bottom:"10px", backgroundColor:"#3c4d37",color:"#fff" ,borderRadius:"8px"}}
      >
        <RiContactsLine size={30} color="#fff"/>
        <Typography fontSize={30} color="#fff">שיחה עם נזי</Typography>
      </Button>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          {/* Left Side: Social Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              onClick={() =>
                openLink(
                  "https://www.instagram.com/nazi_sharon_designer/?igsh=aHgyZTBoeDg2eHQx&utm_source=qr#"
                )
              }
            >
              <InstagramIcon sx={{ color: "#000", fontSize: "26px" }} />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() =>
                openLink(
                  "https://www.tiktok.com/@nazisharon9?_t=ZS-8vuhcnubIZE&_r=1"
                )
              }
            >
              <FaTiktok size={26} color="#000" />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() =>
                openLink(
                  "https://www.facebook.com/nazzisharoninteriordesigner?mibextid=wwXIfr&rdid=9Ys8vEyx2VxdjAHf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QbreJaXbc%2F%3Fmibextid%3DwwXIfr#"
                )
              }
            >
              <FacebookIcon sx={{ color: "#000", fontSize: "26px" }} />
            </IconButton>
          </Box>

          {/* Center: Logo Image */}
          <Box
            sx={{
              backgroundImage: 'url("/pics/hero.jpeg")',
              width: "50px",
              height: "50px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Right Side: Navigation */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Mobile menu icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className="hamburger-icon" />
              </IconButton>
            </Box>

            {/* Desktop nav buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {sections.map(({ label, id }) => (
                <Button
                  className="nav-item"
                  key={id}
                  href={`#${id}`}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>

        {/* Mobile dropdown menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {sections.map(({ label, id }) => (
            <MenuItem key={id} onClick={handleCloseNavMenu}>
              <Typography
                className="nav-item"
                component="a"
                href={`#${id}`}
                sx={{
                  textDecoration: "none",
                  color: "#9e9e9e",
                  width: "100%",
                }}
              >
                {label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}

export default Navbar;
