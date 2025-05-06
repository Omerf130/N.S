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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { DICT } from "../consts";

const sections = [
  { label: DICT.about, id: "about" },
  { label: DICT.plans, id: "plans" },
  { label: DICT.services, id: "services" },
  { label: DICT.gallery, id: "gallery" },
  { label: DICT.contact, id: "contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection:"row-reverse" }}
        >
          {/* Left Side: Social Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              onClick={() => openLink(`https://wa.me/+972545866554`)}
            >
              <WhatsAppIcon sx={{ color: "#000", fontSize: "26px" }} />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                window.location.href = "mailto:Nazisharon@icloud.com";
              }}
            >
              <EmailIcon sx={{ color: "#000", fontSize: "26px" }} />
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
